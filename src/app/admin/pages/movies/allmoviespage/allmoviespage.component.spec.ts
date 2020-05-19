import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllmoviespageComponent } from './allmoviespage.component';

describe('AllmoviespageComponent', () => {
  let component: AllmoviespageComponent;
  let fixture: ComponentFixture<AllmoviespageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllmoviespageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllmoviespageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
