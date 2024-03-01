import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../products.service';
import { Products } from '../../Products';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Category } from '../../../site-framework/Category';
@Component({
  selector: 'app-update-product',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './update-product.component.html',
  styleUrl: './update-product.component.css'
})
export class UpdateProductComponent implements OnInit{
  productId=0;
  productDetails:Products[]=[];
  categoryList:Category[]=[];
  selectedFile: File | null = null;
  constructor(private activatedRoute:ActivatedRoute,
              private productService:ProductsService){}
  ngOnInit():void{
    this.activatedRoute.params.subscribe((data)=> {
      this.productId=data["id"];
      this.productService.getProduct(this.productId).subscribe((data:Products[])=>{
        this.productDetails=data
      }),
      this.productService.getCategories().subscribe((data: Category[])=>{
        this.categoryList=data
      })
    })
    console.log(this.productDetails[0])
   
  }
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile?.name)
    
  }
    updateProduct(form:any){

      
      const updateProduct={
        name:form.value.productName,
        description:form.value.description,
        price:form.value.price,
        rating:0,
        reviews:0,
        is_available:parseInt(form.value.availability),
        warranty:form.value.warranty,
        category_id:parseInt(form.value.categoriaId),
        product_img:'http://localhost:4200/assets/'+ this.selectedFile?.name 
      }
       this.productService.updateProduct(this.productId,updateProduct).subscribe(data =>{
        console.log(data)
        window.location.replace('http://localhost:4200/products/view-product/'+data.id)    
       })

      
    }
}
