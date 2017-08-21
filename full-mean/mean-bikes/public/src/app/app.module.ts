import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowseComponent } from './browse/browse.component';
import { ListingsComponent } from './listings/listings.component';
import { UsersService } from './users.service';
import { BikesService } from './bikes.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BrowseComponent,
    ListingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [
      BikesService,
      UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
