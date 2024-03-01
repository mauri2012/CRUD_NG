import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsModule } from '../../products.module';
import { ProductsService } from '../../products.service';

@Component({
  selector: 'app-delete-product',
  standalone: true,
  imports: [],
  templateUrl: './delete-product.component.html',
  styleUrl: './delete-product.component.css'
})
export class DeleteProductComponent implements OnInit{
  productId=0;
  constructor(private activatedRoute: ActivatedRoute,
              private productService: ProductsService){}
  ngOnInit():void{
    this.activatedRoute.params.subscribe(data => {
      this.productId= data['id'];

        this.productService.deleteProduct(this.productId).subscribe(
        
        )
        window.location.replace('http://localhost:4200/products/')
        
   
    })
     
  }
}
