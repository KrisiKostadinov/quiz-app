import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-play-test',
  templateUrl: './play-test.component.html',
  styleUrls: ['./play-test.component.css']
})
export class PlayTestComponent implements OnInit {
  
  @ViewChild("answer") answer: ElementRef;
  points: number = 0;
  pointsOfAnswer: number = 20;

  constructor() { }

  ngOnInit(): void {
  }

  checkAnswer(): void {
    this.answer.nativeElement.value = '';
    this.answer.nativeElement.focus();

    this.animPoints(this.pointsOfAnswer);
  }

  animPoints(number: number) {
    let newPoints = this.points + number;
    let interval = setInterval(() => {
      this.points++;

      if(newPoints <= this.points) {
        clearInterval(interval);
      }
    }, 70);
  }

}
