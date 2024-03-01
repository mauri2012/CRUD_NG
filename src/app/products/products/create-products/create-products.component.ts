import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Category } from '../../../site-framework/Category';
import { ProductsService } from '../../products.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-products',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './create-products.component.html',
  styleUrl: './create-products.component.css'
})
export class CreateProductsComponent implements OnInit {
  
  
  categoryList: Category[]=[];
  OldIdProduct:number=0;
  selectedFile: File | null = null;

  constructor(private productService:ProductsService,
              private http:HttpClient,
              private router:Router){}
  
  
  ngOnInit(): void {
    this.productService.getCategories().subscribe((data: Category[])=>{
      this.categoryList=data
    })
  }
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile?.name)
    
  }
  
  uploadImage() {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('image', this.selectedFile);
      this.http.post<any>('', formData).subscribe(data=> 
        {
          console.log('Image uploaded successfully:')
        }
          
      )
       
    }
  }
  addNewProduct(form:any){
    
  
    let newProduct={
      name:form.value.productName,
      description:form.value.description,
      price:form.value.price,
      rating:0,
      reviews:0,
      is_available:parseInt(form.value.availability),
      warranty:form.value.warranty,
      category_id:parseInt(form.value.categoriaId),
      product_img:'http://localhost:4200/assets/'+ this.selectedFile?.name,
      
    }
     
    this.productService.createProducts(newProduct).subscribe(
      data=>{
        this.router.navigate(['products/view-product/'+data.id], { queryParams: { created: 'true' } });      
      })
    
      
  }
}
