import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,FooterComponent,HeaderComponent,SidebarComponent,HttpClientModule
  ],
  exports:[FooterComponent,HeaderComponent,SidebarComponent,HttpClientModule]
})
export class SiteFrameworkModule { }
