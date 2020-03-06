import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DismissQuestionComponent } from './dismiss-question.component';

describe('DismissQuestionComponent', () => {
  let component: DismissQuestionComponent;
  let fixture: ComponentFixture<DismissQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DismissQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DismissQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
