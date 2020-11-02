import { BrowserModule } from '@angular/platform-browser';
import {  BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MenuComponent } from './shared/menu/menu.component';
import { NgxModule } from './shared/ngx/ngx/ngx.module';
import { DropdownDirective } from './shared/directives/dropdown.directive';
import { ShowMenuDirective } from './shared/directives/show-menu.directive';
import { HomeComponent } from './components/home/home.component';
import { MatchPropertyPipe } from './shared/pipes/match-property.pipe';
import { SortDatePipe } from './shared/pipes/sort-date.pipe';
import { NewsListingComponent } from './components/news-listing/news-listing.component';
import { NewsDetailsComponent } from './components/news-listing/news-details/news-details.component';
import { FilterPipe } from './shared/pipes/filter.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    DropdownDirective,
    ShowMenuDirective,
    HomeComponent,
    MatchPropertyPipe,
    SortDatePipe,
    NewsListingComponent,
    NewsDetailsComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgxModule,
    HttpClientModule,
    FormsModule
  ],
 
  providers: [FilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
