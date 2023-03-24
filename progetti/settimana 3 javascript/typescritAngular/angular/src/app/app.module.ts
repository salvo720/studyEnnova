import { NgModule } from '@angular/core';
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ ],
  bootstrap: [AppComponent ]
})
export class AppModule { }
