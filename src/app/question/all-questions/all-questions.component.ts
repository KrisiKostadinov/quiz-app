import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../services/question.service';
import { Question } from '../models/question.model';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-all-questions',
  templateUrl: './all-questions.component.html',
  styleUrls: ['./all-questions.component.css']
})
export class AllQuestionsComponent implements OnInit {

  questions: Question[];

  constructor(private questionService: QuestionService,
    private dialogRef: MatDialogRef<any>) { }

  ngOnInit(): void {
    this.questionService.all().subscribe(data => {
      this.questions = data;
    });
  }

  closeWindow():void {
    this.dialogRef.close();
  }

}
