import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglegenreComponent } from './singlegenre.component';

describe('SinglegenreComponent', () => {
  let component: SinglegenreComponent;
  let fixture: ComponentFixture<SinglegenreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinglegenreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglegenreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
