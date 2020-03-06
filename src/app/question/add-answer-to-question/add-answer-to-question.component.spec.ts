import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAnswerToQuestionComponent } from './add-answer-to-question.component';

describe('AddAnswerToQuestionComponent', () => {
  let component: AddAnswerToQuestionComponent;
  let fixture: ComponentFixture<AddAnswerToQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAnswerToQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAnswerToQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
