import { Component, OnInit } from '@angular/core';
import { Products } from '../../Products';
import { ProductsService } from '../../products.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-view-all-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './view-all-product.component.html',
  styleUrl: './view-all-product.component.css'
})
export class ViewAllProductComponent implements OnInit{
  productList: Products[]=[];
  deletedSuccessfully: boolean = false;
  constructor(private productService:ProductsService,
              private route:ActivatedRoute){}
  ngOnInit(): void {
    this.productService.getAllProducts().subscribe((data:Products[])=>{
      this.productList=data
    }),
    this.route.queryParams.subscribe(params => {
      this.deletedSuccessfully = params['deleted'] === 'true';
    });
  }
  dismissSuccessMessage(): void {
    this.deletedSuccessfully = false;
  }
  
}
