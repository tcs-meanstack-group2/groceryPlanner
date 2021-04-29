import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AdminService } from '../../../Services/admin.service';

@Component({
  selector: 'app-generate-reports',
  templateUrl: './generate-reports.component.html',
  styleUrls: ['./generate-reports.component.css']
})
export class GenerateReportsComponent implements OnInit {

  dailyReportForm:FormGroup;
  monthlyReportForm:FormGroup;
  userReportForm:FormGroup;

  constructor(private fb:FormBuilder, private adminService:AdminService) { }

  ngOnInit(): void {
    this.dailyReportForm = this.fb.group({
      date: ''
    });

    this.monthlyReportForm = this.fb.group({
      month: ''
    });

    this.userReportForm = this.fb.group({
      user: ''
    });
  }

  getDailyReport() {
    const {date} = this.dailyReportForm.value;


    this.adminService.generateDailyReport(date);
  }

}
