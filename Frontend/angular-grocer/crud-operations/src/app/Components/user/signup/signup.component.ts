import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'user-app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
  }

  StoreUserDetails(UserRef:any){
    console.log(UserRef)

  }
  userSigUp(){this.router.navigate(["user\SignUpForm"])}
}
