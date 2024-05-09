import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfArchiveComponent } from './list-of-archive.component';

describe('ListOfArchiveComponent', () => {
  let component: ListOfArchiveComponent;
  let fixture: ComponentFixture<ListOfArchiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOfArchiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfArchiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
