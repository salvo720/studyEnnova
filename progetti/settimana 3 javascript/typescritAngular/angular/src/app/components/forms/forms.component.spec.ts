import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Forms } from './forms.component';

describe('Forms', () => {
  let component: Forms;
  let fixture: ComponentFixture<Forms>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Forms ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Forms);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
