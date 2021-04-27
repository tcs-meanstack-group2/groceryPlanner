import { Component, OnInit } from '@angular/core';
import { ProductDetails } from '../model.product';
import { Router } from '@angular/router'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  user_cart?:Array<ProductDetails>;
  constructor(public router:Router) { }

  ngOnInit(): void {
    this.create_table();
  }
  create_table(){
  var user_data = sessionStorage.getItem("user_cart");
    var user_cart_items = JSON.parse(user_data);

    // Insert  empty rows for all items 
    var table = document.getElementById("AddedItems");
    var body = table.getElementsByTagName("tbody")[0];

    // iterate over each item and add it to a row
    var index = 0;
    for (var item of user_cart_items){
        var rows = body.insertRow(index++);
        var newCol1 = rows.insertCell(0);
        newCol1.innerHTML = item._id;
        var newCol2 = rows.insertCell(1);
        newCol2.innerHTML = item.ProductName;
        var newCol3 = rows.insertCell(2);
        newCol3.innerHTML = item.ProductPrice;
        var newCol4 = rows.insertCell(3);
        newCol4.innerHTML = item.ProductQuantity;
        var newCol5 = rows.insertCell(4);
        newCol5.innerHTML = item.Discount;
        var newCol6 = rows.insertCell(5);
        var delete_btn = document.createElement('button');
        delete_btn.innerHTML = "delete item";
        delete_btn.addEventListener('click', this.delete_onClick);
        newCol6.appendChild(delete_btn);
        index += 1;
      }
}

  delete_onClick(){
    console.log("delete product");
  }
}
