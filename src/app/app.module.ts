import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { AlertModule } from 'ngx-bootstrap';
import { AppRouting } from './app.routing';
import { CarrinhoWidget } from './dominio/carrinho/carrinho-widget/carrinho-widget.component';
import { CarrinhoService } from './dominio/carrinho/carrinho.service';
import { ProdutoService } from './dominio/produto/produto.service';

@NgModule({
  declarations: [
    AppComponent,
    CarrinhoWidget
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    AlertModule.forRoot(),

    // app
    AppRouting
  ],
  providers: [
    CarrinhoService,
    ProdutoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
