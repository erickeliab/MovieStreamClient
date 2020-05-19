import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatemoviepageComponent } from './updatemoviepage.component';

describe('UpdatemoviepageComponent', () => {
  let component: UpdatemoviepageComponent;
  let fixture: ComponentFixture<UpdatemoviepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatemoviepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatemoviepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
