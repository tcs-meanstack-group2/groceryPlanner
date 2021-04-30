import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../Services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-user-sign-in',
  templateUrl: './user-sign-in.component.html',
  styleUrls: ['./user-sign-in.component.css']
})
export class UserSignInComponent implements OnInit {

  message:String=""
  constructor(public userService:UserService,public router:Router) { }

  ngOnInit(): void {
  }

  signIn(userSignInRef:any){
    console.log(userSignInRef.UserID);
    this.userService.signIn(userSignInRef.UserID,userSignInRef.password).subscribe(data=>{
      console.log(data.token);
      if(!(data.token=="Enter Correct ID" || data.token.includes("Enter correct password") || data.token.includes("You have no valid")))
      {
        sessionStorage.setItem('token',data.token);

        this.router.navigate(["user"]);

      }else{
        this.message=data.token;
      }
      
    },
    )
  }

}
