import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Employee } from '../../../Classes/employee.model';
import { EmployeeService } from '../../../Services/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  
  addEmployeeForm:FormGroup;
  
  constructor(private fb:FormBuilder, private empService:EmployeeService) { }

  ngOnInit(): void {
    this.addEmployeeForm = this.fb.group({
      firstName: '',
      lastName: '',
      id: '',
      emailID:'',
      pwd: 'welcome123'
    });

  }

  addEmployee() {
    const empDetails:Employee = this.addEmployeeForm.value;

    this.empService.addEmployee(empDetails);

    //send alert employee added
    //refresh page
    location.reload();

  }

}
