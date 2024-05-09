import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfEnrtiesComponent } from './list-of-enrties.component';

describe('ListOfEnrtiesComponent', () => {
  let component: ListOfEnrtiesComponent;
  let fixture: ComponentFixture<ListOfEnrtiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOfEnrtiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfEnrtiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
