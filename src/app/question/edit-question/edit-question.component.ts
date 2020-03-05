import { Component, OnInit, Inject } from '@angular/core';
import { Question } from '../models/question.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { QuestionService } from '../services/question.service';
import { ToastrService } from 'ngx-toastr';

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

  addForm = new FormGroup({
    title: new FormControl(this.data.question.title, [Validators.required]),
    answers: new FormControl(this.data.question.answers.toString(), [Validators.required])
  });
  
  constructor(public dialogRef: MatDialogRef<EditQuestion>,
    @Inject(MAT_DIALOG_DATA) public data: EditQuestion,
    private questionService: QuestionService,
    private toastrService: ToastrService) { }

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
        answers: this.addForm.value.answers.split(','),
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
}