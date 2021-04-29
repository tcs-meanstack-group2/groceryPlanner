import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ProductDetails } from '../Model/model.productmodel';
import { Funds } from '../funds.model';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  ipAddress:string="http://localhost:9090"
  constructor(public http:HttpClient) { }
 
  retrieveAllProductDetails():Observable<ProductDetails[]>{
    return this.http.get<ProductDetails[]>(this.ipAddress+ "/admin/product/allProductDetails")
  }

  user_cart(ProductDetails:any){
   this.http.post("http://localhost:9090/user/orderSelected/", ProductDetails, {responseType: 'text'}).subscribe(result=>console.log(result),error=>console.log(error));
 }
  addTicket(ticketRef: any) {
   this.http.post("http://localhost:9090/user/addTicket/", ticketRef, {responseType: 'text'}).subscribe(result=>console.log(result),error=>console.log(error));

  retrieveFund():Observable<FundsDetails>{
    return this.http.get<FundsDetails>(this.ipAddress+ "/user/addFunds/")
  }

}
 retrieveFunds(id: any): Observable<Funds[]> {
 return this.http.get<Funds[]>("http://localhost:9090/user/retrieveFunds/" + id);
}
}
