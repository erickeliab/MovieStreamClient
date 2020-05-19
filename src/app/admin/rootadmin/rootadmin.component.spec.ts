import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RootadminComponent } from './rootadmin.component';

describe('RootadminComponent', () => {
  let component: RootadminComponent;
  let fixture: ComponentFixture<RootadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RootadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RootadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
