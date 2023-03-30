import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNormaleComponent } from './form-normale.component';

describe('FormNormaleComponent', () => {
  let component: FormNormaleComponent;
  let fixture: ComponentFixture<FormNormaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormNormaleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormNormaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
