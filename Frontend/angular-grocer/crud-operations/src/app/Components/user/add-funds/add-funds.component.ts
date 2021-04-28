import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-add-funds',
  templateUrl: './add-funds.component.html',
  styleUrls: ['./add-funds.component.css']
})
export class AddFundsComponent implements OnInit {
  funds?: string;
  fundMsg?: string;
  constructor(public userServ: UserService) { }

  ngOnInit(): void {
  }

  getFunds(id: any) {
    this.userServ.retrieveFunds(id).subscribe(result => {
      if(result?.length > 0) {
        this.funds = "Account Number " + result[0]._id + ". Funds in your account: " + result[0].funds;
      } else {
        this.funds = "Account not found."
      }
    })
  }

  addFunds(fundsRef: any) {
    this.userServ.addFunds(fundsRef).subscribe((result: string) => {
      this.fundMsg = result;
    })
  }
}
