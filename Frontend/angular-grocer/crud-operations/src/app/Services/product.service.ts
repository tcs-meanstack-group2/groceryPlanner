import { Injectable } from '@angular/core';
import { ProductDetails } from './model.productmodel';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { FundsDetails } from './funds.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(public http:HttpClient) { }
 
  retrieveAllProductDetails():Observable<ProductDetails[]>{
    return this.http.get<ProductDetails[]>("http://localhost:9090/admin/product/allProductDetails")
 }
  retrieveFund():Observable<FundsDetails>{
   return this.http.get<FundsDetails>("http://localhost:9090/user/addFunds/")
 }
  user_cart(ProductDetails:any):any{
  return this.http.put("http://localhost:9090/user/cart/", {Response:JSON})
 }
}