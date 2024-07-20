import { Injectable } from '@angular/core';
import { IProduto, produtos } from './produtos';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
produtos: IProduto[] = produtos;
  constructor() { }
  getAll() {
    return produtos;
  }

  getOne(produtoId: number) {
    return produtos.find(produto => produto.id === produtoId);
  }
}
