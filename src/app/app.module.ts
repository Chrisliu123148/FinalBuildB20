import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { TopnavbarComponent } from './topnavbar/topnavbar.component';
import { FooterComponent } from './footer/footer.component';
import { FeaturesComponent } from './features/features.component';
import { ServicesComponent } from './services/services.component';
import { RecreationalComponent } from './recreational/recreational.component';
import { CityhighlightsComponent } from './cityhighlights/cityhighlights.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgOptionHighlightModule } from '@ng-select/ng-option-highlight';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { AgmJsMarkerClustererModule } from '@agm/js-marker-clusterer';
import { NewsComponent } from './news/news.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    TopnavbarComponent,
    FooterComponent,
    FeaturesComponent,
    ServicesComponent,
    RecreationalComponent,
    CityhighlightsComponent,
    NewsComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgSelectModule,
    NgOptionHighlightModule,
    ReactiveFormsModule,
    FormsModule,
    Ng2SearchPipeModule,
    AgmCoreModule.forRoot({
      apiKey: 'Please paste the Google API key here'
    }),
    AgmJsMarkerClustererModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
