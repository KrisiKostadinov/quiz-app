import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Question } from '../models/question.model';
import { QuestionService } from '../services/question.service';
import { ToastrService } from 'ngx-toastr';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AllQuestionsComponent } from '../all-questions/all-questions.component';
import { AddAnswerToQuestionComponent } from '../add-answer-to-question/add-answer-to-question.component';
import { Answer } from '../models/answer.model';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {

  isSubmitted: boolean= false;

  answersToQuestion: Answer[] = [];

  addForm = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(7)])
  });

  constructor(
    private questionService: QuestionService,
    private toastrService: ToastrService,
    private dialog: MatDialog,
    private dialogRef: MatDialogRef<any>) { }

  ngOnInit(): void {
  }

  add(): void {
    if(this.addForm.valid) {
      this.isSubmitted = true;
      const question: Question = {
        title: this.addForm.value.title,
        answers: this.answersToQuestion
      }
      
      this.questionService.add(question).then(data => {
        this.toastrService.success("Въпросът беше добавен успешно!", "Успешно");
        this.addForm.reset();
        this.isSubmitted = false;
      });
    }
  }

  addAnswers(): void {
    var dialogAnswer = this.dialog.open(AddAnswerToQuestionComponent, {
      width: '700px',
      data: this.addForm.value.title,
      disableClose: true,
      backdropClass: 'bg-success'
    });
    dialogAnswer.afterClosed().subscribe(data => {
      if(data) {
        this.answersToQuestion.push(data);
      }
    });
  }

  all(): void {
    this.dialog.open(AllQuestionsComponent, {
      width: '400px',
      backdropClass: 'bg-primary',
      disableClose: true
    });
  }
  
  closeWindow(): void {
    this.dialogRef.close();
  }
}