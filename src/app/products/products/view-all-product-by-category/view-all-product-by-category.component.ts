import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from '../../../site-framework/Category';
import { Products } from '../../Products';
import { ProductsService } from '../../products.service';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-view-all-product-by-category',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './view-all-product-by-category.component.html',
  styleUrl: './view-all-product-by-category.component.css'
})
export class ViewAllProductByCategoryComponent implements OnInit{
  searchCategory!:number;
  productList:Products[]=[];
  constructor(private activatedRoute:ActivatedRoute,
              private productService:ProductsService ){}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data)=> {
      this.searchCategory=data["id"];
      this.productService.searchCategoryProduct(this.searchCategory).subscribe((data:Products[])=>{
        this.productList=data
      })
    })
  }
}
