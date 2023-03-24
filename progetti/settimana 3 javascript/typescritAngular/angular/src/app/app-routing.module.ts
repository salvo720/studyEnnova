import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaContataoreEArticoliComponent } from './components/pagina-contataore-earticoli/pagina-contataore-earticoli.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'home', redirectTo: '' },
  { path: 'ContatoreEArticoli', component: PaginaContataoreEArticoliComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
