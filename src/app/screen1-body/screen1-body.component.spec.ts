import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Screen1BodyComponent } from './screen1-body.component';

describe('Screen1BodyComponent', () => {
  let component: Screen1BodyComponent;
  let fixture: ComponentFixture<Screen1BodyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Screen1BodyComponent]
    });
    fixture = TestBed.createComponent(Screen1BodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
