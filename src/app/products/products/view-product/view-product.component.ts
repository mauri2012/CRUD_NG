import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Products } from '../../Products';
import { ProductsService } from '../../products.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-view-product',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './view-product.component.html',
  styleUrl: './view-product.component.css'
})
export class ViewProductComponent implements OnInit {
  productId=0;
  productsDetails!:Products;
  createdSuccessfully:boolean=false;
  routeParamsSubscription: Subscription | undefined;
  productServiceSubscription: Subscription | undefined;
  constructor(private activatedRoute: ActivatedRoute,
              private productService: ProductsService,
              private router:Router,){}
 
 
    
  ngOnInit():void{

    this.activatedRoute.params.subscribe(data => {
      this.productId= data['id'];
      });

      this.productServiceSubscription = this.productService.viewProduct(this.productId).subscribe((productData) => {
        this.productsDetails = productData;
      });
    this.activatedRoute.queryParams.subscribe(params => {
        this.createdSuccessfully = params['created'] === 'true';
    });  
  }
  ngOnDestroy(): void {
    // Unsubscribe from route params subscription
    if (this.routeParamsSubscription) {
      this.routeParamsSubscription.unsubscribe();
    }

    // Unsubscribe from product service subscription
    if (this.productServiceSubscription) {
      this.productServiceSubscription.unsubscribe();
    }
  }
  dismissSuccessMessage(): void {
    this.createdSuccessfully = false;
  }
  deleteQuestion():void{
    if(confirm("Estas seguro de eliminar este producto?")){
      this.productService.deleteProduct(this.productId).subscribe()
    
    this.router.navigate(['/products'], { queryParams: { deleted: 'true' } });
    }
  }
}
