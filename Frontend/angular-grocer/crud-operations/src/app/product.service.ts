import { Injectable } from '@angular/core';
import { ProductDetails } from './model.product';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(public http:HttpClient) { }
 
  retrieveAllProductDetails():Observable<ProductDetails[]>{
    return this.http.get<ProductDetails[]>("http://localhost:9090/admin/product/allProductDetails")
 }
}
