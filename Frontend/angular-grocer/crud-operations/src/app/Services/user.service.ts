import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Funds } from '../funds.model';
import { Order } from '../order.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http: HttpClient) { }

  // Service function to get order status from backend
  retrieveOrder(id: any): Observable<Order[]> {
    return this.http.get<Order[]>("http://localhost:9090/user/retrieveOrder/" + id);
  }

  editProfile(profileRef: any): any {
    return this.http.put("http://localhost:9090/user/editProfile/", profileRef, {responseType: 'text'})
  }

  retrieveFunds(id: any): Observable<Funds[]> {
    return this.http.get<Funds[]>("http://localhost:9090/user/retrieveFunds/" + id);
  }

  addFunds(fundsRef: any): any {
    return this.http.put("http://localhost:9090/user/addFunds/", fundsRef, {responseType: 'text'})
  }
}
