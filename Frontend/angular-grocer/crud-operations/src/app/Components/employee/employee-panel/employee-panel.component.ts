import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-employee-panel',
  templateUrl: './employee-panel.component.html',
  styleUrls: ['./employee-panel.component.css']
})
export class EmployeePanelComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
  }

  /*dashBoardLink(){
    console.log("dashboard");
    this.router.navigateByUrl('\admin\DashBoard');
  }*/

  sendRequestLink(){}

  updateOrderStatusLink(){}

  unlockUsersLink(){}

  editProfileLink(){}

  logoutLink(){}
}
