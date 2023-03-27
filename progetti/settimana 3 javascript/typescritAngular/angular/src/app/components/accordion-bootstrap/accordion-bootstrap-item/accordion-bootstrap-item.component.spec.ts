import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionBootstrapItemComponent } from './accordion-bootstrap-item.component';

describe('AccordionBootstrapItemComponent', () => {
  let component: AccordionBootstrapItemComponent;
  let fixture: ComponentFixture<AccordionBootstrapItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccordionBootstrapItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccordionBootstrapItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
