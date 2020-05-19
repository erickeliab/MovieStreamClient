import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmoviepageComponent } from './addmoviepage.component';

describe('AddmoviepageComponent', () => {
  let component: AddmoviepageComponent;
  let fixture: ComponentFixture<AddmoviepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddmoviepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddmoviepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
