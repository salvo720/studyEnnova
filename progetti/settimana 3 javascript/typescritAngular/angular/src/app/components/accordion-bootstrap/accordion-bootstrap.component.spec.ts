import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionBootstrapComponent } from './accordion-bootstrap.component';

describe('AccordionBootstrapComponent', () => {
  let component: AccordionBootstrapComponent;
  let fixture: ComponentFixture<AccordionBootstrapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccordionBootstrapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccordionBootstrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
