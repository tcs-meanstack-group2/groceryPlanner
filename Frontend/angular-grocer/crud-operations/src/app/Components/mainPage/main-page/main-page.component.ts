import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
  }
  adminPage(){
    this.router.navigate(["admin\SignIn"]);
  }
  userPage(){
    this.router.navigate(["customer\SignIn"]);
  }
  employeePage(){}

}
