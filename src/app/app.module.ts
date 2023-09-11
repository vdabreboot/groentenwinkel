import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BestellingComponent } from './bestelling/bestelling.component';
import { GroentenService } from './groenten.service';
import { InMemoryDataService } from './in-memory-data.service';

@NgModule({
  declarations: [
    AppComponent,
    BestellingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule ,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService)
    HttpClientInMemoryWebApiModule.forFeature(InMemoryDataService)
  ],
  providers: [GroentenService],
  bootstrap: [AppComponent]
})
export class AppModule { }
