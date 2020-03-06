import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { QuestionService } from 'src/app/question/services/question.service';
import { Question } from 'src/app/question/models/question.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-play-test',
  templateUrl: './play-test.component.html',
  styleUrls: ['./play-test.component.css']
})
export class PlayTestComponent implements OnInit {
  
  @ViewChild("answer") answer: ElementRef;
  points: number = 0;
  questions: Question[];
  question: Question;
  correctAnswers: Array<string> = [];
  index: number = 0;
  levelCompleted: boolean = false;

  constructor(
    private questionService: QuestionService,
    private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.questionService.all().subscribe(data => {
      this.questions = data;
      this.question = this.questions[this.index];
    });
  }

  checkAnswer(): void {
    let isCorrect = this.question.answers
    .find(a => a.val === this.answer.nativeElement.value ||
       a.values.find(v => v === this.answer.nativeElement.value));
    if(isCorrect) {
      const isContain = this.correctAnswers.find(a => a === isCorrect.val);
      if(!isContain) {
        this.correctAnswers.push(isCorrect.val);

        this.animPoints(isCorrect.points).then(data => {
          if(this.question.answers.length === this.correctAnswers.length) {
            this.toastrService.success(this.question.title, "Браво!").onHidden.subscribe(data => {
              this.nextQuestion();
            });
          }
        });
      } else {
        this.toastrService.error("Този отговор вече е съществува", "Уххх!");
      }
    }
    this.answer.nativeElement.value = '';
    this.answer.nativeElement.focus();
  }

  nextQuestion(): void {
    this.index++;
    
    if(this.index === this.questions.length) {
      this.toastrService.success("Преминахте всички въпроси", "Браво!");

      this.levelCompleted = true;
    }
    
    this.question = this.questions[this.index];

    this.correctAnswers = [];
    this.points = 0;
  }

  async animPoints(number: number) {
    let newPoints = this.points + number;
    return await new Promise(resolve => {
      const interval = setInterval(() => {
        this.points++;

        if (newPoints === this.points) {
          resolve();
          clearInterval(interval);
        };
      }, 70);
    });
  }

}
