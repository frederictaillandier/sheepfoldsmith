import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NavbarComponent} from './header-footer/header/navbar.component';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {LanguageSelectionComponent} from './header-footer/header/language-selection/language-selection.component';
import {AngularFittextModule} from 'angular-fittext';
import {RouterModule} from '@angular/router';
import {LandingComponent} from './pages/landing/landing.component';
import {FindUsComponent} from './pages/find-us/find-us.component';
import {AgmCoreModule} from '@agm/core';
import {MapComponent} from './pages/find-us/map/map.component';


// AoT requires an exported function for factories
export const HttpLoaderFactory = (http: HttpClient) => new TranslateHttpLoader(http);

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LanguageSelectionComponent,
    LandingComponent,
    FindUsComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFittextModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDDM4AFDaxQz3ARNJExS5FC8_QD4KJVhSg'
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
      defaultLanguage: 'fr'
    }),
    NgbModule,
    RouterModule.forRoot([
          {path: 'landing', component: LandingComponent},
          {path: 'find-us', component: FindUsComponent},
          {path: '', redirectTo: 'landing', pathMatch: 'full'},
          {path: '**', redirectTo: 'landing', pathMatch: 'full'},
        ], {scrollPositionRestoration: 'enabled'}
    ),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
