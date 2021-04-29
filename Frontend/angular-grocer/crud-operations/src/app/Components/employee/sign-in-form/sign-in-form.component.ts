import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { resourceLimits } from 'node:worker_threads';
import { EmployeeService } from 'src/app/Services/employee.service';


@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.css']
})
export class SignInFormComponent implements OnInit {

  constructor(public empService:EmployeeService,public router:Router) { }
  message:String=""

  ngOnInit(): void {
  }
 
      
  signIn(empSignInRef:any){
    console.log(empSignInRef.empId)
    this.empService.signIn(empSignInRef.empId,empSignInRef.Password)

}
}