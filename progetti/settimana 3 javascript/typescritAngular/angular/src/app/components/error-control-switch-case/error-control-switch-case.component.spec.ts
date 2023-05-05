import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorControlSwitchCaseComponent } from './error-control-switch-case.component';

describe('ErrorControlSwitchCaseComponent', () => {
  let component: ErrorControlSwitchCaseComponent;
  let fixture: ComponentFixture<ErrorControlSwitchCaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorControlSwitchCaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrorControlSwitchCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
