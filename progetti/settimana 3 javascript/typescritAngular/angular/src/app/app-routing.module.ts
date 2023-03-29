import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaContataoreEArticoliComponent } from './components/pagina-contataore-earticoli/pagina-contataore-earticoli.component';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { TestPaginaComponent } from './components/test-pagina/test-pagina.component';
import { ErrorComponent } from './components/error/error.component';
import { BlogComponent } from './components/blog/blog.component';
import { BlogArticleComponent } from './components/blog-article/blog-article.component';

const routes: Routes = [
  { title: 'Pagina Home', path: '', component: HomeComponent },
  { title: 'Home redirect', path: 'home', redirectTo: '' },
  {
    title: 'Pagina Blog', path: 'blog', children: [{
      path: '',
      component: BlogComponent,
      data: {
        // creaimao dentro il blog-page.component una lista di articoli che passiamo da ta
        // cliccando su un articolo navigliamo su /blog/:slug , usando un router link

        articles: [
          { title: 'il catania va in serie c ', data: new Date(), slug: 'catania-serie-c ' },
          { title: 'il catania va in serie c ', data: new Date(), slug: 'catania-serie-c ' },
          { title: 'il catania va in serie c ', data: new Date(), slug: 'catania-serie-c ' },
          { title: 'il catania va in serie c ', data: new Date(), slug: 'catania-serie-c ' },
          { title: 'il catania va in serie c ', data: new Date(), slug: 'catania-serie-c ' },
          { title: 'il catania va in serie c ', data: new Date(), slug: 'catania-serie-c ' },
          { title: 'il catania va in serie c ', data: new Date(), slug: 'catania-serie-c ' },
        ]
      }

    },
    {
      // mostrare il data statico
      path: ':id',
      component: BlogArticleComponent,
      data: { article: { title: 'il catania va in serie c ', data: new Date() } }
    },
    {
      path: ':id/edit',
      component: HomeComponent
    },]
  },
  { title: 'Pagina ContatoreEArticoli', path: 'ContatoreEArticoli', component: PaginaContataoreEArticoliComponent },
  { title: 'Pagina testPagina', path: 'testPagina', component: TestPaginaComponent },
  { title: '404 - Page not found ', path: '**', component: ErrorComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
