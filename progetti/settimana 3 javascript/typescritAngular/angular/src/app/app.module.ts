import { NgModule, AfterViewInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
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
import { AccordionBootstrapComponent } from './components/accordion-bootstrap/accordion-bootstrap.component';
import { AccordionBootstrapItemComponent } from './components/accordion-bootstrap/accordion-bootstrap-item/accordion-bootstrap-item.component';
import { ModalComponent } from './components/modal/modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorComponent } from './components/error/error.component';
import { BlogComponent } from './components/blog/blog.component';
import { BlogArticleComponent } from './components/blog-article/blog-article.component';
import { InputSelectComponent } from './components/input-select/input-select.component';
import { SliderComponent } from './components/slider/slider.component';
import { FormNormaleComponent } from './components/form-normale/form-normale.component';
import { FormsModule } from '@angular/forms';

@NgModule({
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
    AccordionBootstrapComponent,
    AccordionBootstrapItemComponent,
    ModalComponent,
    ErrorComponent,
    BlogComponent,
    BlogArticleComponent,
    InputSelectComponent,
    SliderComponent,
    FormNormaleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule, // questo e un modulo che deve essere imporatato per usare i [(ngModel)]
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() { }
}
