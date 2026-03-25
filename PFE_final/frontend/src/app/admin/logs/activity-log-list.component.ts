import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from '../../core/services/api.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
    standalone: false,
    selector: 'app-activity-log-list',
    templateUrl: './activity-log-list.component.html',
    styleUrls: ['./activity-log-list.component.css']
})
export class ActivityLogListComponent implements OnInit {
    displayedColumns: string[] = ['timestamp', 'action', 'entityType', 'performedBy', 'status', 'description'];
    dataSource: MatTableDataSource<any>;

    dateRange = new FormGroup({
        start: new FormControl<Date | null>(null),
        end: new FormControl<Date | null>(null),
    });

    filterValues = {
        textSearch: '',
        startDate: null as Date | null,
        endDate: null as Date | null
    };

    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;

    constructor(private apiService: ApiService) {
        this.dataSource = new MatTableDataSource();
    }

    ngOnInit(): void {
        this.loadLogs();

        this.dataSource.filterPredicate = (data: any, filter: string) => {
            let searchTerms: any;
            try {
                searchTerms = JSON.parse(filter);
            } catch (e) {
                searchTerms = { textSearch: filter.trim().toLowerCase(), startDate: null, endDate: null };
            }

            const { textSearch, startDate, endDate } = searchTerms;
            let matchText = true;
            let matchDate = true;

            if (textSearch) {
                const dataStr = Object.keys(data).reduce((currentTerm: string, key: string) => {
                    if (key === 'performedBy' && data[key]) {
                        return currentTerm + (data[key].nom || '') + '◬' + (data[key].email || '') + '◬' + (data[key].role || '') + '◬';
                    }
                    return currentTerm + data[key] + '◬';
                }, '').toLowerCase();
                matchText = dataStr.indexOf(textSearch) !== -1;
            }

            if (data.createdDate && (startDate || endDate)) {
                const logDate = new Date(data.createdDate);
                logDate.setHours(0, 0, 0, 0);

                if (startDate) {
                    const s = new Date(startDate);
                    s.setHours(0, 0, 0, 0);
                    if (logDate < s) matchDate = false;
                }

                if (endDate && matchDate) {
                    const e = new Date(endDate);
                    e.setHours(0, 0, 0, 0);
                    if (logDate > e) matchDate = false;
                }
            }

            return matchText && matchDate;
        };

        this.dateRange.valueChanges.subscribe(val => {
            this.filterValues.startDate = val.start ? new Date(val.start) : null;
            this.filterValues.endDate = val.end ? new Date(val.end) : null;
            this.dataSource.filter = JSON.stringify(this.filterValues);
            
            if (this.dataSource.paginator) {
                this.dataSource.paginator.firstPage();
            }
        });
    }

    loadLogs() {
        this.apiService.getAuditLogs().subscribe({
            next: (data: any[]) => {
                this.dataSource.data = data;
                this.dataSource.paginator = this.paginator;
                this.dataSource.sort = this.sort;
            },
            error: (err: any) => console.error(err)
        });
    }

    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.filterValues.textSearch = filterValue.trim().toLowerCase();
        this.dataSource.filter = JSON.stringify(this.filterValues);
        
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
}
