import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchnavComponent } from './searchnav.component';

describe('SearchnavComponent', () => {
  let component: SearchnavComponent;
  let fixture: ComponentFixture<SearchnavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchnavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
