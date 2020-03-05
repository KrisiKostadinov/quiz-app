import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Question } from '../models/question.model';
import { QuestionService } from '../services/question.service';
import { ToastrService } from 'ngx-toastr';

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
    private toastrService: ToastrService) { }

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
    
  }
  
}