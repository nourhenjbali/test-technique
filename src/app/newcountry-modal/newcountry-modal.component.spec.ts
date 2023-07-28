import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewcountryModalComponent } from './newcountry-modal.component';

describe('NewcountryModalComponent', () => {
  let component: NewcountryModalComponent;
  let fixture: ComponentFixture<NewcountryModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewcountryModalComponent]
    });
    fixture = TestBed.createComponent(NewcountryModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
