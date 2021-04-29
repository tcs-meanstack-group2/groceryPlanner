import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'emp-app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
  }
  EmployeeDetails(EmpRef:any){
    console.log(EmpRef)

  }
  employeeSigin(){ this.router.navigate(["employee\SignInForm"]);}


}

