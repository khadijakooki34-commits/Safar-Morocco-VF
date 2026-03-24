import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TranslateModule, TranslateLoader, MissingTranslationHandler, MissingTranslationHandlerParams } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';

import localeAr from '@angular/common/locales/ar';
import localeFr from '@angular/common/locales/fr';
import localeEn from '@angular/common/locales/en';
import localeEs from '@angular/common/locales/es';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './user/profile/profile.component';
import { ItineraryModule } from './itinerary/itinerary.module';
import { HelpCenterComponent } from './pages/help-center/help-center.component';
import { ContactComponent } from './pages/contact/contact.component';
import { TermsComponent } from './pages/terms/terms.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { TermsAndConditionsComponent } from './pages/terms-and-conditions/terms-and-conditions.component';
import { HttpLoggingInterceptor } from './core/interceptors/http-logging.interceptor';

registerLocaleData(localeAr, 'ar');
registerLocaleData(localeFr, 'fr');
registerLocaleData(localeEn, 'en');
registerLocaleData(localeEs, 'es');

export class CustomHttpLoader implements TranslateLoader {
    constructor(private http: HttpClient) { }
    public getTranslation(lang: string): Observable<any> {
        const timestamp = new Date().getTime();
        return this.http.get(`/assets/i18n/${lang}.json?v=${timestamp}`);
    }
}

export function HttpLoaderFactory(http: HttpClient) {
    return new CustomHttpLoader(http);
}

export class CustomMissingTranslationHandler implements MissingTranslationHandler {
    handle(params: MissingTranslationHandlerParams) {
        console.warn(`[I18N Warning] Missing translation for key: ${params.key}`);
        const parts = params.key.split('.');
        const lastPart = parts[parts.length - 1];
        if (lastPart) {
            return lastPart.charAt(0).toUpperCase() + lastPart.slice(1).toLowerCase().replace(/_/g, ' ');
        }
        return params.key;
    }
}

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        ProfileComponent,
        HelpCenterComponent,
        ContactComponent,
        TermsComponent,
        PrivacyPolicyComponent,
        TermsAndConditionsComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        TranslateModule.forRoot({
            defaultLanguage: 'fr',
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            },
            missingTranslationHandler: {
                provide: MissingTranslationHandler,
                useClass: CustomMissingTranslationHandler
            },
            useDefaultLang: true
        }),
        CoreModule,
        SharedModule,
        ItineraryModule
    ],
    providers: [
        provideCharts(withDefaultRegisterables()),
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HttpLoggingInterceptor,
            multi: true
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
