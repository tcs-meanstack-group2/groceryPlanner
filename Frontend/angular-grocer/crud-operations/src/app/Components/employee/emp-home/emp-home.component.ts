import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-emp-home',
  templateUrl: './emp-home.component.html',
  styleUrls: ['./emp-home.component.css']
})
export class EmpHomeComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
  }
  employeeSignIn(){}
  employeeSignUp(){}
}

