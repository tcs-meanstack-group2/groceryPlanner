import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { Employee } from '../Classes/employee.model';

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

  ipAddress:string="http://localhost:9090";

  addEmployee(employee:any){
    this.http.post(this.ipAddress+"/employee/addEmployeeDetails",employee,{responseType:"text"}).
    subscribe(result=>console.log(result),error=>console.log(error));
  }
  //by default all HttpClient method return type is observable with json format data. 
  deleteProductById(empID:any):any{
    return this.http.delete(this.ipAddress+"/employee/deleteEmployeeById/"+empID,{responseType:'text'});
  }

}
