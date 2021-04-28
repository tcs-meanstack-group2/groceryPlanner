import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.css']
})
export class UserPanelComponent implements OnInit {
  displayOrder: Boolean;
  displayEdit: Boolean;
  displayFunds: Boolean;
  displayLogout: Boolean;
  constructor(public router: Router) { }

  ngOnInit(): void {
  }
  
  selectItemsLink(){
    this.router.navigateByUrl('/user/product-list');
  }

  deleteItemsLink(){
    this.router.navigateByUrl('/user/cart');
  }

  viewItemsLink(){
    this.router.navigateByUrl('/user/cart');
  }

  checkOutLink(){
    this.router.navigateByUrl('/user/cart');
  }

  orderStatusLink(){
    this.hideAll();
    this.displayOrder = true;
  }

  editProfileLink(){
    this.hideAll();
    this.displayEdit = true;
  }

  fundsLink(){
    this.hideAll();
    this.displayFunds = true;
  }

  logoutLink(){
    this.hideAll();
    this.displayLogout = true;
  }

  hideAll() {
    this.displayOrder = false;
    this.displayEdit = false;
    this.displayFunds = false;
    this.displayLogout = false;
  }
}
