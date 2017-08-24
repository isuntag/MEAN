import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { AddsubComponent } from './view/addsub/addsub.component';
import { SubdashComponent } from './view/subdash/subdash.component';
import { UserService } from './services/user.service';
import { ContentService } from './services/content.service';
import { ContentdashComponent } from './home/contentdash/contentdash.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AddComponent,
    ViewComponent,
    AddsubComponent,
    SubdashComponent,
    ContentdashComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [
      UserService,
      ContentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
