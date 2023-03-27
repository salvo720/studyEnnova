import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestPaginaComponent } from './test-pagina.component';

describe('TestPaginaComponent', () => {
  let component: TestPaginaComponent;
  let fixture: ComponentFixture<TestPaginaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestPaginaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestPaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
