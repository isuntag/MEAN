import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentdashComponent } from './contentdash.component';

describe('ContentdashComponent', () => {
  let component: ContentdashComponent;
  let fixture: ComponentFixture<ContentdashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentdashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentdashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
