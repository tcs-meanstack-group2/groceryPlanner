import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'user-app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  StoreUserDetails(UserRef:any){
    console.log(UserRef)

  }
}
