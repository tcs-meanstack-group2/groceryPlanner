import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-employee-panel',
  templateUrl: './employee-panel.component.html',
  styleUrls: ['./employee-panel.component.css']
})
export class EmployeePanelComponent implements OnInit {
  displayOrder = true;
  displayProfile: boolean;
  constructor(public router:Router) { }

  ngOnInit(): void {
  }

  /*dashBoardLink(){
    console.log("dashboard");
    this.router.navigateByUrl('\admin\DashBoard');
  }*/

  sendRequestLink(){}

  updateOrderStatusLink(){
    this.hideAll();
    this.displayOrder = true;
  }

  unlockUsersLink(){}

  editProfileLink(){
    this.hideAll();
    this.displayProfile = true;
  }

  logoutLink(){
    sessionStorage.clear();
    this.router.navigateByUrl("");
  }

  hideAll() {
    this.displayOrder = false;
    this.displayProfile = false;
  }
}
