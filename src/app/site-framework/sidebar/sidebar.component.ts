import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../products/products.service';
import { Category } from '../Category';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [HttpClientModule,CommonModule,RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})

export class SidebarComponent implements OnInit{
[x: string]: any;

  categoryList: Category[]=[];

  constructor(private productService:ProductsService){}
  
  
  ngOnInit(): void {
    this.productService.getCategories().subscribe((data: Category[])=>{
      this.categoryList=data
    })
  }
}
