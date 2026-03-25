import { Component } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-terms-and-conditions',
  standalone: false,
  templateUrl: './terms-and-conditions.component.html',
  styleUrls: ['./terms-and-conditions.component.css']
})
export class TermsAndConditionsComponent {
  currentDate = new Date();

  constructor(public translate: TranslateService) {}

  get currentLang(): string {
    return this.translate.currentLang || this.translate.getDefaultLang() || 'en';
  }
}
