import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Question } from '../models/question.model';
import { QuestionService } from '../services/question.service';
import { ToastrService } from 'ngx-toastr';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AllQuestionsComponent } from '../all-questions/all-questions.component';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {

  isSubmitted: boolean= false;

  addForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    answers: new FormControl('', [Validators.required])
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
        answers: this.addForm.value.answers.split(',')
      }
      
      this.questionService.add(question).then(data => {
        this.toastrService.success("Въпросът беше добавен успешно!", "Успешно");
        this.addForm.reset();
        this.isSubmitted = false;
      });
    }
  }

  all(): void {
    console.log(0);
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