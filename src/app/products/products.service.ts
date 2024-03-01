import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Category} from '../site-framework/Category';
import { Observable } from 'rxjs';
import { Products } from './Products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient: HttpClient) { }


  createProducts(productBody:any):Observable<Products>{
    const productUrl='http://localhost:3000/products';
    return this.httpClient.post<Products>(productUrl,productBody);
  }
  
  viewProduct(productId:number):Observable<Products>{
    const productUrl='http://localhost:3000/products/'+productId;
    return this.httpClient.get<Products>(productUrl);
  }
  getAllProducts():Observable<Products[]>{
    const productUrl='http://localhost:3000/products';
    return this.httpClient.get<Products[]>(productUrl)
  }  
  updateProduct(productId:number,productBody:any):Observable<Products>{
    const productUrl='http://localhost:3000/products/'+productId;
    return this.httpClient.put<Products>(productUrl,productBody);
  }

  deleteProduct(productId:number):Observable<Products>{
    const productUrl='http://localhost:3000/products/'+productId;
    return this.httpClient.delete<Products>(productUrl);
  }
  getProduct(id:number):Observable<Products[]>{
    const productUrl='http://localhost:3000/products?id='+id;
    return this.httpClient.get<Products[]>(productUrl);
  }
  searchCategoryProduct(categoryId:number):Observable<Products[]>{
    const productUrl='http://localhost:3000/products?category_id='+categoryId;
    return this.httpClient.get<Products[]>(productUrl);
  }
  searchDateProduct(dateParam:Date):Observable<Products>{
    const productUrl='http://localhost:3000/category='+dateParam;
    return this.httpClient.get<Products>(productUrl);
  }

  getCategories():Observable<Category[]>{
    const categoriesUrl='http://localhost:3000/categories';
    return this.httpClient.get<Category[]>(categoriesUrl);
  }
}
