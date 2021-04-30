import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from '../../../Services/admin.service';
import { Order } from '../../../Model/order.model';

@Component({
  selector: 'app-reports-table',
  templateUrl: './reports-table.component.html',
  styleUrls: ['./reports-table.component.css']
})
export class ReportsTableComponent implements OnInit {

  type:String;
  query:any;
  orders?:Order[];

  constructor(private adminService:AdminService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.type = this.route.snapshot.params.type;
    this.query = this.route.snapshot.params.query;

    if(this.type === "daily") {

      this.adminService.generateDailyReport(this.query).subscribe(res => this.orders = res);

    } else if(this.type === "monthly") {
      this.adminService.generateMonthlyReport(this.query).subscribe(res => this.orders = res);

    } else if(this.type === "user") {
      this.adminService.generateUserReport(this.query).subscribe(res => this.orders = res);
    }

  }

}
