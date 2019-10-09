import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Training } from '../training';
import { Payment } from '../payment';
import { TrainingService } from '../training.service';
import { PaymentService } from '../payment.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-current-trainings',
  templateUrl: './user-current-trainings.component.html',
  styleUrls: ['./user-current-trainings.component.css']
})
export class UserCurrentTrainingsComponent implements OnInit {

  updateProgress: FormGroup;

  constructor(private trainingService: TrainingService,
    private paymentService: PaymentService) {

    this.updateProgress = new FormGroup({
      progress: new FormControl('')
    });

  }

  trainingsArray: Training[] = [];
  training: Training = new Training();
  payment: Payment = new Payment();
  userId: number;
  userName: String;
  progress:number;


  ngOnInit() {


    this.userId = Number(localStorage.getItem('userId'));
    this.userName = String(localStorage.getItem('userName'));



    this.trainingService.getUserCurrentTrainings(this.userId).subscribe(data => {

      this.trainingsArray = data;
      console.log(data);
    });

  }

  onCompleted(id:number) {

    this.trainingService.completeTraining(id).subscribe(()=>{

      this.userId = Number(localStorage.getItem('userId'));
    this.userName = String(localStorage.getItem('userName'));



    this.trainingService.getUserCurrentTrainings(this.userId).subscribe(data => {

      this.trainingsArray = data;
      console.log(data);
    });

    })

  }
  onSubmit(id:number){
    this.progress = this.updateProgress.get("progress").value;
    this.trainingService.updateProgress(id,this.progress).subscribe(()=>{

      this.userId = Number(localStorage.getItem('userId'));
      this.userName = String(localStorage.getItem('userName'));
  
  
  
      this.trainingService.getUserCurrentTrainings(this.userId).subscribe(data => {
  
        this.trainingsArray = data;
        console.log(data);
      });

    })

  }


}