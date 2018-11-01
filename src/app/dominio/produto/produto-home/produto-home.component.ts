import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


import { Produto } from '../produto';
import { ProdutoService } from '../produto.service';
import { Categoria } from '../../categoria/categoria';
import { CategoriaService } from '../../categoria/categoria.service';
import { CarrinhoService } from '../../carrinho/carrinho.service';

@Component({
  selector: 'produto-lista',
  templateUrl: './produto-home.component.html',
  styleUrls: ['./produto-home.component.css']
})
export class ProdutoHomeComponent implements OnInit {

  produtos: Produto[];

  constructor(
    private produtoService: ProdutoService,
    private carrinhoService : CarrinhoService,
    private router: Router
  ){}

  ngOnInit() {
      
    this.produtoService.buscarTodos()
    .subscribe(resposta => {
      this.produtos = resposta
    });

  }

  adicionarProduto(produto: Produto){
    this.carrinhoService.adicionarProduto(produto);
  }

}
