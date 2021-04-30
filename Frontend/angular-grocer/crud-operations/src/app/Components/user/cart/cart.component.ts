import { Component, OnInit } from '@angular/core';
import { ProductDetails } from '../../../Model/model.productmodel';
import { UserService } from '../../../Services/user.service';
import { AdminService } from '../../../Services/admin.service';
import { Order } from '../../../Model/order.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  user_cart?: Array<ProductDetails>;
  user_total_price?: Array<number> = [];
  check_fund_total?: number = 0;
  //funds?:FundsDetails;
  funds?: number;

  constructor(
    private userService: UserService,
    private adminService: AdminService
  ) {}

  ngOnInit(): void {
    this.create_table();
    //this.productSer.retrieveFund().subscribe(result=>this.funds=result);
    console.log(this.funds);
  }

  create_table() {
    var user_data = sessionStorage.getItem('user_cart');
    var user_cart_items = JSON.parse(user_data);
    // Insert  empty rows for all items
    var table = document.getElementById('AddedItems');
    var body = table.getElementsByTagName('tbody')[0];
    // iterate over each item and add it to a row
    var index = 0;
    for (var item of user_cart_items) {
      var rows = body.insertRow(index++);
      var newCol1 = rows.insertCell(0);
      newCol1.innerHTML = item._id;
      var newCol2 = rows.insertCell(1);
      newCol2.innerHTML = item.ProductName;
      var newCol3 = rows.insertCell(2);
      newCol3.innerHTML = item.ProductPrice;
      var newCol4 = rows.insertCell(3);
      newCol4.innerHTML = "<div contenteditable='false'>1</div>";
      var newCol5 = rows.insertCell(4);
      newCol5.innerHTML = item.Discount;
      var newCol6 = rows.insertCell(5);
      newCol6.innerHTML = String(
        item.ProductPrice - item.ProductPrice * (item.Discount / 100)
      );
      var newCol7 = rows.insertCell(6);
      var delete_btn = document.createElement('button');
      delete_btn.innerHTML = 'delete item';
      delete_btn.addEventListener('click', this.delete_onClick);
      //user_cart_items.splice(parseInt(delete_btn.id), 1);
      //} );
      newCol7.appendChild(delete_btn);
    }
  }

  get_cart() {
    return this.user_cart;
  }

  delete_onClick() {
    console.log('we are here');
    var chosen_index = document.getElementById('product_delete');
    console.log('Index chose: {{}}', chosen_index);
    this.user_cart.splice(parseInt(chosen_index.innerHTML), 1);
    chosen_index.innerHTML = '';
  }

  calculate_total_price() {
    var user_data = sessionStorage.getItem('user_cart');
    var user_cart_items = JSON.parse(user_data);
    let total_price: number = 0;
    for (var index = 0; index < user_cart_items.length; index++) {
      //console.log(user_cart_items[index]["ProductPrice"])
      total_price =
        total_price +
        user_cart_items[index]['ProductPrice'] -
        user_cart_items[index]['ProductPrice'] *
          (user_cart_items[index]['Discount'] / 100);
    }
    //console.log("The total Price:")
    //console.log(total_price);
    this.check_fund_total = total_price;
    return total_price;
  }
  check_funds() {
    var user_data = sessionStorage.getItem('user_cart');
    const accNum = sessionStorage.getItem('accNum');
    var user_cart_items = JSON.parse(user_data);

    console.log(user_cart_items);

    this.userService.retrieveFunds(accNum).subscribe((result) => {
      this.funds = result[0].funds;

      const fundsLeftOver = this.funds - this.check_fund_total;

      if (fundsLeftOver > 0) {
        //decrease Product Quantity of purchased products
        user_cart_items.forEach((item) => {
          const { _id } = item;
          //should
          this.userService.subtractProductQuant({ id: _id });

        });

        //add to Orders table
        const newOrder:Order = {
          id: Date.now(), //cheap way to add unique id
          userId: sessionStorage.getItem('userID'),
          status: "Ordered",
          amount: this.check_fund_total,
          timestamp: Date()
        }

        // console.log(newOrder)
        this.userService.addNewOrder(newOrder);

        //success alert
        alert('Thank you! Order got placed');

        //clear cart in storage
        sessionStorage.setItem('user_cart', JSON.stringify([]));
      } else {
        alert('Error: Not enough funds to purchase items.');
      }
    });

    //update funds for acc
  }
}
