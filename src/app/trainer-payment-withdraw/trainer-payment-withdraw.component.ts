import { Component, OnInit } from '@angular/core';
import {Payment } from '../payment';
import {PaymentService} from '../payment.service';

@Component({
  selector: 'app-trainer-payment-withdraw',
  templateUrl: './trainer-payment-withdraw.component.html',
  styleUrls: ['./trainer-payment-withdraw.component.css']
})
export class TrainerPaymentWithdrawComponent implements OnInit {


  paymentsArray:Payment[] = [];
  payment: Payment = new Payment();
  userId: number ;
  userName:String;
  constructor(private paymentService:PaymentService) { }

  ngOnInit() {

    this.userId = Number(localStorage.getItem("userId"));
    this.userName = String(localStorage.getItem("userName"));
    this.paymentService.getMentorPendingPayments(this.userId).subscribe(data =>{
      this.paymentsArray = data;
      console.log(this.paymentsArray);
    })
  }

}
