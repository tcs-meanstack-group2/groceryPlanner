import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { EmployeeService } from '../../../Services/employee.service';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})
export class DeleteEmployeeComponent implements OnInit {

  deleteEmployeeForm:FormGroup;

  constructor(private fb:FormBuilder, private empService:EmployeeService) { }

  ngOnInit(): void {
    this.deleteEmployeeForm = this.fb.group({
      id: '' 
    });

  }

  deleteEmployee() {
    const { id } = this.deleteEmployeeForm.value; //int parsing handled server-side  
    this.empService.deleteEmployee(id);

    //send alert employee added
    //refresh page
    
    //location.reload();
  }

}
