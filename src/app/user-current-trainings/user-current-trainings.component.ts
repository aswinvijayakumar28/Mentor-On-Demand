import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Training } from '../training';
import {Payment} from '../payment';
import { TrainingService } from '../training.service';
import { PaymentService} from '../payment.service';

@Component({
  selector: 'app-user-current-trainings',
  templateUrl: './user-current-trainings.component.html',
  styleUrls: ['./user-current-trainings.component.css']
})
export class UserCurrentTrainingsComponent implements OnInit {

  constructor(private trainingService: TrainingService,
              private paymentService:PaymentService) { }

  trainingsArray: Training[] = [];
  training: Training = new Training();
  payment : Payment = new Payment();
  userId: number;
  userName:String;


  ngOnInit() {


    this.userId = Number(localStorage.getItem('userId'));
    this.userName = String(localStorage.getItem('userName'));



    this.trainingService.getUserCurrentTrainings(this.userId).subscribe(data => {

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