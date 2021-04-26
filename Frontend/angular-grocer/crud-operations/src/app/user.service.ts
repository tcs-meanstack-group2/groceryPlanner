import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from './order.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http: HttpClient) { }

  // Service function to get order status from backend
  retrieveOrder(id: any): Observable<Order[]> {
    return this.http.get<Order[]>("http://localhost:9090/user/retrieveOrder/" + id);
  }

  editProfile(productRef: any): any {
    return this.http.put("http://localhost:9090/product/updateProductPrice/", productRef, {responseType: 'text'})
  }
}
