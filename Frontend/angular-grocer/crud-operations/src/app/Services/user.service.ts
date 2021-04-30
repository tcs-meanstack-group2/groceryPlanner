import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Funds } from '../funds.model';
import { Order } from '../order.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  ipAddress:string="http://localhost:9090"
  constructor(public http: HttpClient) { }
  signIn(UserId:string,Password:string){
    console.log(UserId+Password);
    return this.http.post<{token:string}>(this.ipAddress+ "/user/userSignIn",{UserId,Password});
  };

  signUp(profileRef: any): any {
    return this.http.post(this.ipAddress + "/user/userSignUp", profileRef, {responseType: 'text'})
  }
  
  // Service function to get order status from backend
  retrieveOrder(id: any): Observable<Order[]> {
    return this.http.get<Order[]>(this.ipAddress + "/user/retrieveOrder/" + id);
  }

  editProfile(profileRef: any): any {
    return this.http.put(this.ipAddress + "/user/editProfile/", profileRef, {responseType: 'text'})
  }

  retrieveFunds(id: any): Observable<Funds[]> {
    return this.http.get<Funds[]>(this.ipAddress + "/user/retrieveFunds/" + id);
  }

  addFunds(fundsRef: any): any {
    return this.http.put(this.ipAddress + "/user/addFunds/", fundsRef, {responseType: 'text'})
  }
  newOrders(Order: any):any {
    this.http.post(this.ipAddress + "/user/newOrders", Order, {responseType: 'text'})
  }

  getUserById(id:any):Observable<any> {
    return this.http.get<any>(this.ipAddress + "/user/getUser/" + id);
  }
}
