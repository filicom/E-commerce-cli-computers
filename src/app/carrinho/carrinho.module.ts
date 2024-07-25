import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CarrinhoComponent } from './carrinho.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: CarrinhoComponent },
];

@NgModule({
  declarations: [CarrinhoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ]
})
export class CarrinhoModule { }
