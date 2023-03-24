import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaContataoreEArticoliComponent } from './pagina-contataore-earticoli.component';

describe('PaginaContataoreEArticoliComponent', () => {
  let component: PaginaContataoreEArticoliComponent;
  let fixture: ComponentFixture<PaginaContataoreEArticoliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaContataoreEArticoliComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaContataoreEArticoliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
