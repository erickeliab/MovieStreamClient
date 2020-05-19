import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletegenreComponent } from './deletegenre.component';

describe('DeletegenreComponent', () => {
  let component: DeletegenreComponent;
  let fixture: ComponentFixture<DeletegenreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletegenreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletegenreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
