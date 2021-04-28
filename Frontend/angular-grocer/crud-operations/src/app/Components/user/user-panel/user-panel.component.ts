import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.css']
})
export class UserPanelComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }
  
  selectItemsLink(){}

  deleteItemsLink(){}

  viewItemsLink(){}

  checkOutLink(){}

  orderStatusLink(){
    this.router.navigateByUrl('\customer\OrderStatus');
  }

  editProfileLink(){
    this.router.navigateByUrl('\customer\EditProfile');
  }

  fundsLink(){
    this.router.navigateByUrl('\customer\AddFunds');
  }

  logoutLink(){
    this.router.navigateByUrl('\customer\Logout');
  }
}
