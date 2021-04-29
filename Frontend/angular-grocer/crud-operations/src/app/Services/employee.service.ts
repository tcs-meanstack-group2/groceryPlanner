import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../Model/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  ipAddress:string="http://localhost:9090";

  constructor(private http:HttpClient) { }

  signIn(EmployeeId:string,Password:string){
    console.log(EmployeeId+Password);
    return this.http.post(this.ipAddress+ '/employee/employeeSignIn',{EmployeeId,Password});
  };
  signUp(EmployeeId:string,Password:string,FirstName:String,LastName:String,EmailID:String){
    console.log(EmployeeId+Password+FirstName+LastName+EmailID);
    return this.http.post(this.ipAddress+ '/employee/employeeSignUp',{EmployeeId,Password,FirstName,LastName,EmailID});
  };

  getEmployeeDetails():Observable<Employee[]>{
    return this.http.get<Employee[]>(this.ipAddress+"/admin/employee/getEmployeeDetails")
 }

  addEmployee(employee:any){
    this.http.post(this.ipAddress+"/admin/employee/addEmployeeDetails",employee,{responseType:"text"}).
    subscribe(result=>console.log(result),error=>console.log(error));
  }
  //by default all HttpClient method return type is observable with json format data. 
  deleteEmployee(empID:any):any{
    this.http.post(this.ipAddress+"/admin/employee/deleteEmployeeById/"+empID,{responseType:'text'}).subscribe(result=>console.log(result),error=>console.log(error));
  }

}
