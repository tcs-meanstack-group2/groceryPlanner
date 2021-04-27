import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { ProductDetails } from '../model.product';
import { ProductService } from '../product.service';
import { Router } from '@angular/router'

let user_products = []

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
  //p1?:Product;
  //product?[];
  products?:Array<ProductDetails> = [];
  
   
  constructor(public productSer:ProductService) { }

  ngOnInit(): void {
    this.productSer.retrieveAllProductDetails().subscribe(result=>this.products=result)
  }
  addToCart(pp){
    user_products.push(pp);
    console.log(user_products)
    sessionStorage.setItem("user_cart", JSON.stringify(user_products))
  }
  
 

//  create_table(){
//     this.products.forEach(product => {
//       let body_tag = document.getElementById("productList");
//       let product_id = document.createElement('div');
//       product_id.innerHTML = "Product ID: " + product._id.toString();
//       let product_name = document.createElement('div');
//       product_name.innerHTML = product.ProductName;
//       let product_price = document.createElement('div');
//       product_price.innerHTML = product.ProductPrice.toString();
//       let product_quantity = document.createElement('div');
//       product_quantity.innerHTML = product.ProductQuantity.toString();
//       let product_discount = document.createElement('div');
//       product_discount.innerHTML = product.Discount.toString(); 
//       let add_to_cart_btn = document.createElement('button');
//       add_to_cart_btn.innerHTML = "Add to Cart";
//       add_to_cart_btn.id = product._id.toString();
//       let br = document.createElement('br');
//       body_tag.appendChild(product_id);
//       body_tag.appendChild(product_name);
//       body_tag.appendChild(product_price);
//       body_tag.appendChild(product_quantity);
//       body_tag.appendChild(product_discount);
//       body_tag.appendChild(add_to_cart_btn);
//       body_tag.appendChild(br);
//     });
    
}
