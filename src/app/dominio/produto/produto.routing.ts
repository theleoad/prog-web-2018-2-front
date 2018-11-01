import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { ProdutoListaComponent } from './produto-lista/produto-lista.component';
import { ProdutoFormularioComponent } from './produto-formulario/produto-formulario.component';
import { ProdutoHomeComponent } from './produto-home/produto-home.component';

const produtoRoutes: Routes = [
    { path: '', component: ProdutoListaComponent},
    { path: 'lista', component: ProdutoHomeComponent},
    { path: 'visualizar/:id', component: ProdutoFormularioComponent},
    { path: 'novo', component: ProdutoFormularioComponent},
    { path: 'alterar/:id', component: ProdutoFormularioComponent},
];


@NgModule({
    imports: [RouterModule.forChild(produtoRoutes)],
    exports: [RouterModule]
  })

  export class ProdutoRouting {}