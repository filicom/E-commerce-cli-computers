import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NaoEncontradaComponent } from './nao-encontrada/nao-encontrada.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';

const routes: Routes = [
  { path: 'produtos', loadChildren: () => import('./produtos/produtos.module').then(m => m.ProdutosModule) },
  { path: 'carrinho', loadChildren: () => import('./carrinho/carrinho.module').then(m => m.CarrinhoModule)},
  { path: '', redirectTo: 'produtos', pathMatch: 'full' },
  { path: '**', component: NaoEncontradaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
