import { Component, OnInit } from '@angular/core';
  import { Employee } from '../../Classes/employee.model';
import { EmployeeService } from '../../Services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
  
})
export class EmployeeComponent implements OnInit {

  employees:Employee[];

  constructor(public router:Router) { }

  ngOnInit(): void {
  }

  employeeSigUp(){this.router.navigate(["employee\SignUpForm"])}
  
}
