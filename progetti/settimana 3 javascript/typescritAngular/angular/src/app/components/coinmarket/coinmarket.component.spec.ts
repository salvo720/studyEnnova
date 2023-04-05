import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinmarketComponent } from './coinmarket.component';

describe('CoinmarketComponent', () => {
  let component: CoinmarketComponent;
  let fixture: ComponentFixture<CoinmarketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoinmarketComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoinmarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
