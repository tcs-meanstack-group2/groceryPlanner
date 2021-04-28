import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }

  signIn(EmployeeId:string,Password:string){
    console.log(EmployeeId+Password);
    return this.http.post('http://localhost:9090/employee/employeeSignIn',{EmployeeId,Password});
  };
  signUp(EmployeeId:string,Password:string,FirstName:String,LastName:String,EmailID:String){
    console.log(EmployeeId+Password+FirstName+LastName+EmailID);
    return this.http.post('http://localhost:9090/employee/employeeSignUp',{EmployeeId,Password,FirstName,LastName,EmailID});
  };
}
