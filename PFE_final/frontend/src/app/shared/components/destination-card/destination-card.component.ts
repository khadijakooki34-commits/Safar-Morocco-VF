import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
    standalone: false,
    selector: 'app-destination-card',
    templateUrl: './destination-card.component.html',
    styleUrls: ['./destination-card.component.css']
})
export class DestinationCardComponent implements OnInit {
    @Input() destination: any;
    constructor(public translate: TranslateService) { }
    ngOnInit(): void {
    }

    handleImageError(event: any) {
        event.target.src = 'assets/placeholder.jpg';
    }

    getDestinationDescription(dest: any): string {
        if (!dest) return '';
        const key = `DESTINATIONS.DESCRIPTION.${dest.nom}`;
        const translated = this.translate.instant(key);
        return translated === key ? dest.description : translated;
    }
}
