import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-add-funds',
  templateUrl: './add-funds.component.html',
  styleUrls: ['./add-funds.component.css']
})
export class AddFundsComponent implements OnInit {
  fundMsg?: string;
  constructor(public userServ: UserService) { }

  ngOnInit(): void {
  }

  addFunds(fundsRef: any) {
    this.userServ.addFunds(fundsRef).subscribe((result: string) => {
      this.fundMsg = result;
    })
  }
}
