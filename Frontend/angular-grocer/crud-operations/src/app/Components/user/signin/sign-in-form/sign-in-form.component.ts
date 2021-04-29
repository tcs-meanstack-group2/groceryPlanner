import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/Services/employee.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.css']
})
export class SignInFormComponent implements OnInit {

  constructor(public userService:EmployeeService,public router:Router) { }

  ngOnInit(): void {
  }
  signIn(userSignInRef:any){
    console.log(userSignInRef.userId)
    this.userService.signIn(userSignInRef.empId,userSignInRef.Password)
}
}
