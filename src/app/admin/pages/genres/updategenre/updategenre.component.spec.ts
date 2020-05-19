import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdategenreComponent } from './updategenre.component';

describe('UpdategenreComponent', () => {
  let component: UpdategenreComponent;
  let fixture: ComponentFixture<UpdategenreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdategenreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdategenreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
