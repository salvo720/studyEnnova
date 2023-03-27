import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaContataoreEArticoliComponent } from './components/pagina-contataore-earticoli/pagina-contataore-earticoli.component';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { TestPaginaComponent } from './components/test-pagina/test-pagina.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', redirectTo: '' },
  { path: 'ContatoreEArticoli', component: PaginaContataoreEArticoliComponent },
  { path: 'testPagina', component: TestPaginaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
