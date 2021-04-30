import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(private fb:FormBuilder, private router:Router) { }

  ngOnInit(): void {
    this.dailyReportForm = this.fb.group({
      date: ''
    });

    this.monthlyReportForm = this.fb.group({
      year: '',
      month: ''
    });

    this.userReportForm = this.fb.group({
      user: ''
    });
  }

  getDailyReport() {
    const {date} = this.dailyReportForm.value;

    this.router.navigateByUrl('admin/ReportsTable/daily/'+date);

    
  }

  getMonthlyReport() {
    const {year, month} = this.monthlyReportForm.value;

    //easy way to get month num as string
    // const monthNum = new Date(Date.parse(month[0] +" 1, 2021")).getMonth()+1

    this.router.navigateByUrl(`admin/ReportsTable/monthly/${month[0]}-${year}`);
   
  }

  getUserReport() {
    const {user} = this.userReportForm.value;

    this.router.navigateByUrl('admin/ReportsTable/user/'+user);
  
  }

}
