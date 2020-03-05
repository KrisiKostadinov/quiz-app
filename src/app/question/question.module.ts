import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddQuestionComponent } from './add-question/add-question.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { QuestionService } from './services/question.service';
import { ToastrModule } from 'ngx-toastr';
import { AllQuestionsComponent } from './all-questions/all-questions.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';



@NgModule({
  declarations: [
    AddQuestionComponent,
    AllQuestionsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    ToastrModule.forRoot(),
    MatProgressSpinnerModule
  ],
  providers: [
    QuestionService
  ],
  entryComponents: [
    AddQuestionComponent,
    AllQuestionsComponent
  ]
})
export class QuestionModule { }
