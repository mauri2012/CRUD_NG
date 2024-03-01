import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListOrdersComponent } from './orders/list-orders/list-orders.component';
import { LazyLoadingRoutineModule } from './lazy-loading-routine/lazy-loading-routine.module';
import { UserDashboardComponent } from './lazy-loading-routine/user-dashboard/user-dashboard.component';
import { ProductsComponent } from './products/products/products.component';
import { SiteFrameworkModule } from './site-framework/site-framework.module';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, 
            ListOrdersComponent,
            LazyLoadingRoutineModule,
            UserDashboardComponent,
            ProductsComponent,
            SiteFrameworkModule,
            RouterOutlet,
            FormsModule
          ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'CRUD_NG';
  eliminado=''
}
