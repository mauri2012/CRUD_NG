import { Routes } from '@angular/router';

export const routes: Routes = [{
    path: 'user-dashboard',
    loadChildren: () =>   
   import('./lazy-loading-routine/lazy-loading-routine.module')
      .then(m => m.LazyLoadingRoutineModule)
 } ,
{
    path: 'products',
    loadChildren: () =>   
   import('./products/products.module')
      .then(m => m.ProductsModule)
 } ,
{
   path: 'orders',
   loadChildren: () =>   
  import('./orders/orders.module')
     .then(m => m.OrdersModule)
} ,
];
