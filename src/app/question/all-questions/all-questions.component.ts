import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../services/question.service';
import { Question } from '../models/question.model';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { EditQuestionComponent } from '../edit-question/edit-question.component';
import { DismissQuestionComponent } from '../dismiss-question/dismiss-question.component';

@Component({
  selector: 'app-all-questions',
  templateUrl: './all-questions.component.html',
  styleUrls: ['./all-questions.component.css']
})
export class AllQuestionsComponent implements OnInit {

  questions: Question[];

  constructor(
    private questionService: QuestionService,
    private dialogRef: MatDialogRef<any>,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    this.questionService.all().subscribe(data => {
      this.questions = data;
    });
  }

  closeWindow():void {
    this.dialogRef.close();
  }

  edit(index: number): void {
    this.dialog.open(EditQuestionComponent, {
      width: '400px',
      data: {
        question: this.questions[index]
      },
      disableClose: true,
      backdropClass: 'bg-warning'
    });
  }

  dismiss(index: number): void {
    this.dialog.open(DismissQuestionComponent, {
      width: '400px',
      data: this.questions[index],
      disableClose: true,
      backdropClass: 'bg-danger'
    })
  }
}
