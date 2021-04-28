import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'emp-app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  EmployeeDetails(EmpRef:any){
    console.log(EmpRef)

  }
}

