import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { QuestionService } from '../services/question.service';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Answer } from '../models/answer.model';

@Component({
  selector: 'app-add-answer-to-question',
  templateUrl: './add-answer-to-question.component.html',
  styleUrls: ['./add-answer-to-question.component.css']
})
export class AddAnswerToQuestionComponent implements OnInit {

  addForm = new FormGroup({
    val: new FormControl('', [Validators.required]),
    points: new FormControl('', [Validators.required]),
    values: new FormControl('')
  });

  constructor(public dialogRef: MatDialogRef<string>,
    @Inject(MAT_DIALOG_DATA) public data: string,
    private toastrService: ToastrService) { }

  ngOnInit(): void {
  }

  closeWindow() {
    this.dialogRef.close();
  }

  add(): void{
    if(this.addForm.valid) {
      var values = this.addForm.value.values.split(",").filter(v => v) as Array<string>;
      
      for(let i = 0; i < values.length; i++) {
        values[i] = values[i].toLowerCase().trim();
      }

      const answer: Answer = {
        val: this.addForm.value.val,
        points: this.addForm.value.points,
        values: values
      }
      this.dialogRef.close(answer);
      this.toastrService.success(`Добавихте отговор за ${this.data}`, "Успешно!");
    }
  }
}
