import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from 'src/app/Services/user.service';
@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})
export class SignUpFormComponent implements OnInit {

  constructor(public userService:UserService,public router:Router) { }

  ngOnInit(): void {
  }
  SignUp(userRef:any){
    console.log(userRef.empId)
    this.userService.signUp(userRef.empId,userRef.Password, userRef.FirstName, userRef.LastName, userRef.EmailID,userRef.AccountNumber, userRef.Funds,userRef.Address,userRef.PhoneNumber,userRef.DOB)
  }
}
