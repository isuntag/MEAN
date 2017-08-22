import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionComponent } from './question/question.component';
import { HomeComponent } from './home/home.component';
import { NewQuestionComponent } from './new-question/new-question.component';
import { NewAnswerComponent } from './new-answer/new-answer.component';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'index', component: IndexComponent},
  { path: 'new_question', component: NewQuestionComponent},
  { path: 'question/:id', component: QuestionComponent, pathMatch: 'full' },
  { path: 'question/:id/new_answer', component: NewAnswerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
