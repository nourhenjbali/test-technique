import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Screen2BodyComponent } from './screen2-body.component';

describe('Screen2BodyComponent', () => {
  let component: Screen2BodyComponent;
  let fixture: ComponentFixture<Screen2BodyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Screen2BodyComponent]
    });
    fixture = TestBed.createComponent(Screen2BodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
