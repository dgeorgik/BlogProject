import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAdditionComponent } from './form-addition.component';

describe('FormAdditionComponent', () => {
  let component: FormAdditionComponent;
  let fixture: ComponentFixture<FormAdditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAdditionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAdditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
