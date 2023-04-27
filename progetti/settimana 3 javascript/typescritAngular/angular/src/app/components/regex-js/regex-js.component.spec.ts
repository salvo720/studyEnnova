import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegexJsComponent } from './regex-js.component';

describe('RegexJsComponent', () => {
  let component: RegexJsComponent;
  let fixture: ComponentFixture<RegexJsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegexJsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegexJsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
