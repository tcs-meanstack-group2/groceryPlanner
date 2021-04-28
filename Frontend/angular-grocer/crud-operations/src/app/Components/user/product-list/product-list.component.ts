import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { ProductDetails } from '../model.productmodel';
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
    
}
