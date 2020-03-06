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
import { EditQuestionComponent } from './edit-question/edit-question.component';
import { DismissQuestionComponent } from './dismiss-question/dismiss-question.component';
import { AddAnswerToQuestionComponent } from './add-answer-to-question/add-answer-to-question.component';



@NgModule({
  declarations: [
    AddQuestionComponent,
    AllQuestionsComponent,
    EditQuestionComponent,
    DismissQuestionComponent,
    AddAnswerToQuestionComponent
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
    AllQuestionsComponent,
    EditQuestionComponent,
    DismissQuestionComponent,
    AddAnswerToQuestionComponent
  ]
})
export class QuestionModule { }
