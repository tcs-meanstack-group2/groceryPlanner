import { Component, OnInit } from '@angular/core';
import { Employee } from '../../Classes/employee.model';
import { EmployeeService } from '../../Services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})

export class EmployeeComponent implements OnInit {

  employees?:Employee[];

  constructor(private empService:EmployeeService) { }

  ngOnInit(): void {
    this.empService.getEmployeeDetails().subscribe(res => this.employees = res);
  }

}
