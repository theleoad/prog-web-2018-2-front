import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';


const appRoutes: Routes = [
    { path: '', redirectTo: '/produto/lista', pathMatch: 'full'},
    { path: 'produto', loadChildren: './dominio/produto/produto.module#ProdutoModule'},
    { path: 'categoria', loadChildren: './dominio/categoria/categoria.module#CategoriaModule'}
];



@NgModule({
    imports: [RouterModule.forRoot(
        appRoutes,
        { enableTracing: false }
    )],
    exports: [RouterModule]
  })

  export class AppRouting {}