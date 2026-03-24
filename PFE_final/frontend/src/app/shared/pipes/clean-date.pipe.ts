import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
    name: 'cleanDate',
    standalone: false
})
export class CleanDatePipe implements PipeTransform {
    transform(value: any, format: string = 'mediumDate', timezone: string = '', locale: string = 'fr'): string {
        const datePipe = new DatePipe(locale);
        const result = datePipe.transform(value, format, timezone, locale);
        if (!result) return '';
        // Remove periods after month abbreviations (e.g. "juil." → "juil")
        return result.replace(/\./g, '');
    }
}
