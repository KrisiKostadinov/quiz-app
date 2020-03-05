import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayTestComponent } from './play-test.component';

describe('PlayTestComponent', () => {
  let component: PlayTestComponent;
  let fixture: ComponentFixture<PlayTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
