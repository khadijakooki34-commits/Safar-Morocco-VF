import { Component, OnInit, EventEmitter, signal } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';
import { Directionality, Direction } from '@angular/cdk/bidi';

export class LtrDirectionality implements Directionality {
    readonly value: Direction = 'ltr';
    readonly change = new EventEmitter<Direction>();
    readonly valueSignal = signal<Direction>('ltr');
    ngOnDestroy() {}
}

@Component({
    standalone: false,
    selector: 'app-admin-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.css'],
    providers: [{ provide: Directionality, useClass: LtrDirectionality }]
})
export class AdminLayoutComponent implements OnInit {
    isSidebarOpen = true;
    adminUser: any;

    constructor(
        private authService: AuthService,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.adminUser = this.authService.currentUserValue;
    }

    toggleSidebar() {
        this.isSidebarOpen = !this.isSidebarOpen;
    }

    logout() {
        this.authService.logout();
        this.router.navigate(['/auth/login']);
    }

    viewProfile() {
        this.router.navigate(['/profile']);
    }

    openSettings() {
        this.router.navigate(['/settings']);
    }
}

