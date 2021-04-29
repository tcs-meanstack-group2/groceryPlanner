import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/Services/employee.service';

@Component({
  selector: 'app-update-order',
  templateUrl: './update-order.component.html',
  styleUrls: ['./update-order.component.css']
})
export class UpdateOrderComponent implements OnInit {
  orderMsg: string;
  constructor(public empServ: EmployeeService) { }

  ngOnInit(): void {
  }

  editOrder(orderRef: any) {
    this.empServ.updateOrder(orderRef).subscribe((result: string) => {
      this.orderMsg = result;
    })
  }
}
