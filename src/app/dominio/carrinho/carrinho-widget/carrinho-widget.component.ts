import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'carrinho-widget',
  templateUrl: './carrinho-widget.component.html',
  styleUrls: ['./carrinho-widget.component.css']
})
export class CarrinhoWidget implements OnInit {

    constructor(
      private router: Router
    ){}

    ngOnInit() {

    }

}
