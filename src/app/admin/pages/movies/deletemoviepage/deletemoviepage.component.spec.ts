import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletemoviepageComponent } from './deletemoviepage.component';

describe('DeletemoviepageComponent', () => {
  let component: DeletemoviepageComponent;
  let fixture: ComponentFixture<DeletemoviepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletemoviepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletemoviepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
