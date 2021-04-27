import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../Services/admin.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-admin-page-sign-in-form',
  templateUrl: './admin-page-sign-in-form.component.html',
  styleUrls: ['./admin-page-sign-in-form.component.css']
})
export class AdminPageSignInFormComponent implements OnInit {

  constructor(public adminService:AdminService,public router:Router) { }
   message:String=""
  ngOnInit(): void {
  }
  signIn(adminSignInRef:any){
    console.log(adminSignInRef.adminId);
    this.adminService.signIn(adminSignInRef.adminId,adminSignInRef.password).subscribe(data=>{
      console.log(data);
      sessionStorage.setItem('token',data.token);
      this.router.navigateByUrl('\admin\DashBoard');
    },
    /*err=>{
      this.message = err.error.message;
      if(err.error.message == "Login Failure")
      {
        
        this.message = 'Login Failure';
      }
      else if(err.error.message == "Please enter a id")
      {
        this.message = 'Please enter a id';
      }
      else if(err.error.message == "Please enter a password")
      {
        this.message = 'Please enter a password';
      }
    }*/
    )
  }
}
