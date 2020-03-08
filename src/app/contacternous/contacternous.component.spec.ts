import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContacternousComponent } from './contacternous.component';

describe('ContacternousComponent', () => {
  let component: ContacternousComponent;
  let fixture: ComponentFixture<ContacternousComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContacternousComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContacternousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
