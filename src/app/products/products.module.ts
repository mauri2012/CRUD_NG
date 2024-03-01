import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { CreateProductsComponent } from './products/create-products/create-products.component';
import { ViewProductComponent } from './products/view-product/view-product.component';
import { UpdateProductComponent } from './products/update-product/update-product.component';
import { DeleteProductComponent } from './products/delete-product/delete-product.component';
import { ViewAllProductByCategoryComponent } from './products/view-all-product-by-category/view-all-product-by-category.component';
import { ViewAllProductByDateComponent } from './products/view-all-product-by-date/view-all-product-by-date.component';
import { ViewAllProductComponent } from './products/view-all-product/view-all-product.component';
import { BrowserModule } from '@angular/platform-browser';

const routes: Routes = [
  { path: '',  component: ViewAllProductComponent},
  { path: 'create-products', component: CreateProductsComponent},
  { path: 'view-product/:id', component: ViewProductComponent},
  { path: 'update-product/:id', component:UpdateProductComponent},
  {path:'delete-product/:id', component:DeleteProductComponent},
  {path:'search',component:ViewAllProductByCategoryComponent},
  {path:'search-date',component:ViewAllProductByDateComponent},
  {path:'category/:id',component:ViewAllProductByCategoryComponent}
 ]; 
 @NgModule({
  
  imports: [RouterModule.forChild(routes),CommonModule],
  exports: [RouterModule]
 }) 

export class ProductsModule { }
