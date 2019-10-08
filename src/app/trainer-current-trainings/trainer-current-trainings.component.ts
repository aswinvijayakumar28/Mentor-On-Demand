import { Component, OnInit } from '@angular/core';
import {Training} from '../training';
import {TrainingService} from '../training.service';
import {Payment} from '../payment';
import { PaymentService} from '../payment.service';

@Component({
  selector: 'app-trainer-current-trainings',
  templateUrl: './trainer-current-trainings.component.html',
  styleUrls: ['./trainer-current-trainings.component.css']
})
export class TrainerCurrentTrainingsComponent implements OnInit {

  constructor(private trainingService: TrainingService,
              private paymentService : PaymentService) { }

  

  training: Training = new Training();
  payment : Payment = new Payment();
  trainingsArray : Training[] = [];
  userId: number;
  userName:String;

  ngOnInit() {

    this.userId = Number(localStorage.getItem('userId'));
    this.userName = String(localStorage.getItem('userName'));

    this.trainingService.getMentorCurrentTrainings(this.userId).subscribe(data => {

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
