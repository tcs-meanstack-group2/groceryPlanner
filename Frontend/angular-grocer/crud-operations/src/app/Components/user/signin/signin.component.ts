import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'user-app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
  }
  UserDetails(UserRef:any){
    console.log(UserRef)

  }
  userSigIn(){this.router.navigate(["user\SignInForm"])}
}
