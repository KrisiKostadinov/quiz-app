import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddQuestionComponent } from './add-question/add-question.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { QuestionService } from './services/question.service';
import { ToastrModule } from 'ngx-toastr';



@NgModule({
  declarations: [
    AddQuestionComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    ToastrModule.forRoot()
  ],
  providers: [
    QuestionService
  ],
  entryComponents: [
    AddQuestionComponent
  ]
})
export class QuestionModule { }
