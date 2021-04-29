import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-raise-ticket',
  templateUrl: './raise-ticket.component.html',
  styleUrls: ['./raise-ticket.component.css']
})
export class RaiseTicketComponent implements OnInit {
Ticket?: String;
  constructor(public productServ:ProductService) { }

  ngOnInit(): void {
  }
  
  addTicket(TicketRef: any) {
    this.productServ.addTicket(TicketRef).subscribe;
    alert("Ticket Stored! Thank you..")
    }
}
