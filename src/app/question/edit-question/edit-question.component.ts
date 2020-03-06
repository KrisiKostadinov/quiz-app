import { Component, OnInit, Inject } from '@angular/core';
import { Question } from '../models/question.model';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { QuestionService } from '../services/question.service';
import { ToastrService } from 'ngx-toastr';
import { AddAnswerToQuestionComponent } from '../add-answer-to-question/add-answer-to-question.component';
import { Answer } from '../models/answer.model';

export class EditQuestion {
  question: Question;
}

@Component({
  selector: 'app-edit-question',
  templateUrl: './edit-question.component.html',
  styleUrls: ['./edit-question.component.css']
})
export class EditQuestionComponent implements OnInit {

  isSubmitted: boolean = false;
  answersToQuestion: Answer[] = this.data.question.answers;

  addForm = new FormGroup({
    title: new FormControl(this.data.question.title, [Validators.required])
  });
  
  constructor(public dialogRef: MatDialogRef<EditQuestion>,
    @Inject(MAT_DIALOG_DATA) public data: EditQuestion,
    private questionService: QuestionService,
    private toastrService: ToastrService,
    private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  closeWindow(): void {
    this.dialogRef.close();
  }

  edit() {
    if(this.addForm.valid) {
      this.isSubmitted = true;
      
      const question: Question = {
        title: this.addForm.value.title,
        answers: this.answersToQuestion,
        id: this.data.question.id
      }
      
      this.questionService.edit(question).then(data => {
        this.toastrService.success("Въпросът беше редактиран успешно!", "Успешно");
        this.addForm.reset();
        this.isSubmitted = false;

        this.dialogRef.close();
      });
    }
  }

  addAnswers(): void {
    var dialogAnswer = this.dialog.open(AddAnswerToQuestionComponent, {
      width: '700px',
      data: this.addForm.value.title,
      disableClose: true,
      backdropClass: 'bg-warning'
    });
    dialogAnswer.afterClosed().subscribe(data => {
      if(data) {
        this.answersToQuestion.push(data);

        this.dialog.open(AddAnswerToQuestionComponent, {
          width: '700px',
          data: this.addForm.value.title,
          disableClose: true,
          backdropClass: 'bg-warning'
        });
      }
    });
  }

  dismissAnswer(index: number): void {
    console.log(index);
    this.answersToQuestion.splice(index, 1);
    
    console.log(this.answersToQuestion);
  }
}
