import { Component, OnInit } from '@angular/core';
import {Payment } from '../payment';
import {PaymentService} from '../payment.service';

@Component({
  selector: 'app-trainer-payment-history',
  templateUrl: './trainer-payment-history.component.html',
  styleUrls: ['./trainer-payment-history.component.css']
})
export class TrainerPaymentHistoryComponent implements OnInit {


  paymentsArray:Payment[] = [];
  payment: Payment = new Payment();
  userId: number ;
  userName:String;

  constructor( private paymentService:PaymentService) { }

  ngOnInit() {
    this.userId = Number(localStorage.getItem("userId"));
    this.userName = String(localStorage.getItem("userName"));
    this.paymentService.getMentorPaymentsHistory(this.userId).subscribe(data =>{
      this.paymentsArray = data;
      console.log(this.paymentsArray);
    })

  }

}
