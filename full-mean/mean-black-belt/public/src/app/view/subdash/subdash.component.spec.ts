import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubdashComponent } from './subdash.component';

describe('SubdashComponent', () => {
  let component: SubdashComponent;
  let fixture: ComponentFixture<SubdashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubdashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubdashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
