import { Component, OnInit, Inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { QuestionService } from '../services/question.service';
import { Question } from '../models/question.model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dismiss-question',
  templateUrl: './dismiss-question.component.html',
  styleUrls: ['./dismiss-question.component.css']
})
export class DismissQuestionComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<Question>,
    @Inject(MAT_DIALOG_DATA) public data: Question,
    private questionService: QuestionService,
    private toastrService: ToastrService) { }

  ngOnInit(): void {
  }

  closeWindow(): void {
    this.dialogRef.close();
  }

  dismiss(): void {
    this.questionService.dismiss(this.data.id).then(data => {
      this.toastrService.success("Въпросът беше изтрит успешно!", "Успешно");
      this.closeWindow();
    });
  }

}
