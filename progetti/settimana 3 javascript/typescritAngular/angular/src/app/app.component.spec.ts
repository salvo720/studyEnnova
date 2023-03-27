import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PaginaContataoreEArticoliComponent } from './components/pagina-contataore-earticoli/pagina-contataore-earticoli.component';
import { NavComponent } from './components/nav/nav.component';
import { PipeCapitalizePipe } from './pipes/pipeCapitalize/pipe-capitalize.pipe';
import { PipeDoubleNumberPipe } from './pipes/pipeDoubleNumber/pipe-double-number.pipe';
import { PipeIntLPipe } from './pipes/pipeIntL/pipe-int-l.pipe';
import { CastArrayPipe } from './pipes/castArray/cast-array.pipe';
import { HomeComponent } from './components/home/home.component';
import { TestPaginaComponent } from './components/test-pagina/test-pagina.component';


describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
      ],
      declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        PaginaContataoreEArticoliComponent,
        NavComponent,
        PipeCapitalizePipe,
        PipeDoubleNumberPipe,
        PipeIntLPipe,
        CastArrayPipe,
        HomeComponent,
        TestPaginaComponent,
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angular');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('angular app is running!');
  });
});
