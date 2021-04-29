import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/Services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})
export class SignUpFormComponent implements OnInit {

  constructor(public empService:EmployeeService,public router:Router) { }

  ngOnInit(): void {
  }
  SignUp(EmpRef:any){
    console.log(EmpRef.empId)
    this.empService.signUp(EmpRef.empId,EmpRef.Password, EmpRef.FirstName, EmpRef.LastName, EmpRef.EmailID)
  }
}
