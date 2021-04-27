import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { Employee } from '../Classes/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  ipAddress:string="http://localhost:9090";

  constructor(private http:HttpClient) { }

  addEmployee(employee:any){
    this.http.post(this.ipAddress+"/employee/addEmployeeDetails",employee,{responseType:"text"}).
    subscribe(result=>console.log(result),error=>console.log(error));
  }
  //by default all HttpClient method return type is observable with json format data. 
  deleteProductById(empID:any):any{
    return this.http.delete(this.ipAddress+"/employee/deleteEmployeeById/"+empID,{responseType:'text'});
  }

}
