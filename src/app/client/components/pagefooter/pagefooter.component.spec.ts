import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagefooterComponent } from './pagefooter.component';

describe('PagefooterComponent', () => {
  let component: PagefooterComponent;
  let fixture: ComponentFixture<PagefooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagefooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagefooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
