import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListOrdersComponent } from './list-orders/list-orders.component';
import { RouterModule, Routes } from '@angular/router';


const route: Routes = [
  {path:'',component:ListOrdersComponent}
];

@NgModule({
  imports: [RouterModule.forChild(route)],
  exports:[RouterModule]
})
export class OrdersModule { }
