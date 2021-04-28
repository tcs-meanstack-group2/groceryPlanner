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


  signIn(UserId:string,Password:string){
    console.log(UserId+Password);
    return this.http.post('http://localhost:9090/user/userSignIn',{UserId,Password});
  };
  signUp(UserId:string, fName: String,lName: String, email: String, password: String,dob: String,
    pNumber: Number,address: String,funds: Number,accNumber: Number){
    console.log(UserId+password+fName+lName+email+dob+pNumber+address+funds);
    return this.http.post('http://localhost:9090/user/userSignUp',{UserId,password,fName,lName,email,dob,pNumber,address,funds});
  };

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
