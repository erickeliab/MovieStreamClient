import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllgenresComponent } from './allgenres.component';

describe('AllgenresComponent', () => {
  let component: AllgenresComponent;
  let fixture: ComponentFixture<AllgenresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllgenresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllgenresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
