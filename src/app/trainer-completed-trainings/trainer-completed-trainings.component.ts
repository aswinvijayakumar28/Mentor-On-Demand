import { Component, OnInit } from '@angular/core';
import {Training} from '../training';
import {TrainingService} from '../training.service';
import {Payment} from '../payment';
import { PaymentService} from '../payment.service';

@Component({
  selector: 'app-trainer-completed-trainings',
  templateUrl: './trainer-completed-trainings.component.html',
  styleUrls: ['./trainer-completed-trainings.component.css']
})
export class TrainerCompletedTrainingsComponent implements OnInit {

  constructor(private trainingService: TrainingService,private paymentService : PaymentService) { }

  training: Training = new Training();
  payment : Payment = new Payment();
  trainingsArray : Training[] = [];
  userId: number;
  userName:String;


  ngOnInit() {

    this.userId = Number(localStorage.getItem('userId'));
    this.userName = String(localStorage.getItem('userName'));

    this.trainingService.getMentorCompletedTrainings(this.userId).subscribe(data => {

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
