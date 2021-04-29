import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ProductDetails } from '../Model/model.productmodel';
import { FundsDetails } from '../Model/funds.model';


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
    
      return this.http.post("http://localhost:9090/user/selectedOrders/", ProductDetails)
  }
  
  addTicket(ticketRef: any): any {
      return this.http.post("http://localhost:9090/user/addTicket/", ticketRef)
  }
}
