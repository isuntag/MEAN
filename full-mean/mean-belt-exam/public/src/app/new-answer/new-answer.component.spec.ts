import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAnswerComponent } from './new-answer.component';

describe('NewAnswerComponent', () => {
  let component: NewAnswerComponent;
  let fixture: ComponentFixture<NewAnswerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewAnswerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
