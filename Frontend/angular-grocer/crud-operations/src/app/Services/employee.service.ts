import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../Classes/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  ipAddress:string="http://localhost:9090";

  constructor(private http:HttpClient) { }

  getEmployeeDetails():Observable<Employee[]>{
    return this.http.get<Employee[]>(this.ipAddress+"/admin/employee/getEmployeeDetails")
 }

  addEmployee(employee:any){
    this.http.post(this.ipAddress+"/admin/employee/addEmployeeDetails",employee,{responseType:"text"}).
    subscribe(result=>console.log(result),error=>console.log(error));
  }
  //by default all HttpClient method return type is observable with json format data. 
  deleteEmployee(empID:any):any{
    return this.http.delete(this.ipAddress+"/admin/employee/deleteEmployeeById/"+empID,{responseType:'text'});
  }

}
