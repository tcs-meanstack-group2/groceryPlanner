import { Component, OnInit } from '@angular/core';
import { ProductDetails } from '../../../Model/model.productmodel';
import { ProductService } from '../../../Services/product.service';
import { FundsDetails } from '../../../Model/funds.model';
import { Router } from '@angular/router'


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  user_cart?:Array<ProductDetails>;
  user_total_price?:Array<number> = [];
  check_fund_total?:number = 0;
  funds?:Array<FundsDetails>;
  constructor(public productSer:ProductService) { }
  
  ngOnInit(): void {
    this.create_table();
  }

  create_table(){

    if (this.user_cart.length == 0){
      var user_data = sessionStorage.getItem("user_cart");
      var user_cart_items = JSON.parse(user_data);
    }

    // Insert  empty rows for all items 
    var table = document.getElementById("AddedItems");
    var body = table.getElementsByTagName("tbody")[0];

    // iterate over each item and add it to a row
    var index = 0;
    var product_delete_index = 0;
    var index_to_product = {}
    for (var item of user_cart_items){
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
        newCol6.innerHTML = String(item.ProductPrice - (item.ProductPrice * (item.Discount / 100)));
        var newCol7 = rows.insertCell(6);
        index_to_product[item._id] = index;
        var delete_btn = document.createElement('button');
        delete_btn.innerHTML = "delete item";
        delete_btn.id = product_delete_index.toString();
        delete_btn.addEventListener('click', function(){
          console.log("Deleting this index")
          console.log(parseInt(delete_btn.id))
          user_cart_items.splice(parseInt(delete_btn.id), 1);
        } );
        newCol7.appendChild(delete_btn);
      }
      product_delete_index++;
    }
    
  get_cart() {
    return this.user_cart;
  }

  delete_onClick(){
    
    console.log("we are here")
    var chosen_index = document.getElementById("product_deleter")
    console.log("Index chose: {{}}", chosen_index)
    this.user_cart.splice(parseInt(chosen_index.innerHTML), 1);
    chosen_index.innerHTML = "";
    this.create_table()
  }

  calculate_total_price(){
    var user_data = sessionStorage.getItem("user_cart");
    var user_cart_items = JSON.parse(user_data);
    let total_price:number = 0;
    for(var index = 0; index < user_cart_items.length; index++){
      //console.log(user_cart_items[index]["ProductPrice"])
      total_price = total_price + user_cart_items[index]["ProductPrice"] - (user_cart_items[index]["ProductPrice"] * (user_cart_items[index]["Discount"] / 100))
    }
    //console.log("The total Price:")
    //console.log(total_price);
    this.check_fund_total = total_price;
    return total_price;
}
  check_funds(check_fund_total){
    //console.log(this.check_fund_total + "total product price")
    
      if( check_fund_total <= this.funds){
        alert("Thank you! Order got placed");
        this.productSer.user_cart(ProductDetails).subscribe;

      }else {
        alert("Insufficient funds! Please Add more funds ");
      }
    }
  
    
  

}
  

  
  
 

  

  
 





