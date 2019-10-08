import { Component, OnInit } from '@angular/core';
import {Training} from '../training';
import {TrainingService} from '../training.service';
import {Payment} from '../payment';
import { PaymentService} from '../payment.service';

@Component({
  selector: 'app-user-completed-trainings',
  templateUrl: './user-completed-trainings.component.html',
  styleUrls: ['./user-completed-trainings.component.css']
})
export class UserCompletedTrainingsComponent implements OnInit {

  constructor(private trainingService: TrainingService,private paymentService : PaymentService) { }

  training: Training = new Training();
  payment : Payment = new Payment();
  trainingsArray : Training[] = [];
  userId: number;
  userName:String;


  ngOnInit() {

    this.userId = Number(localStorage.getItem('userId'));
    this.userName = String(localStorage.getItem('userName'));

    this.trainingService.getUserCompletedTrainings(this.userId).subscribe(data => {

      this.trainingsArray = data;
      console.log(data);
    });
  }
  onPaymentStatus(trainingId:number){

    this.paymentService.getUserPaymentStatus(trainingId).subscribe( data =>{
      this.payment = data;
    })
  }

}
