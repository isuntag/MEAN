import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { HomeComponent } from './home/home.component';
import { NewQuestionComponent } from './new-question/new-question.component';
import { QuestionComponent } from './question/question.component';
import { NewAnswerComponent } from './new-answer/new-answer.component';
import { QuestionService } from './services/question.service';
import { AnswerService } from './services/answer.service';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    HomeComponent,
    NewQuestionComponent,
    QuestionComponent,
    NewAnswerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [
      QuestionService,
      AnswerService,
      UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
