import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglemoviepageComponent } from './singlemoviepage.component';

describe('SinglemoviepageComponent', () => {
  let component: SinglemoviepageComponent;
  let fixture: ComponentFixture<SinglemoviepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinglemoviepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglemoviepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
