import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SearchService } from '../search.service';
import { UsersService } from '../users.service';
import { TechnologyService } from '../technology.service';
import { Technology } from '../technology';
import { Payment } from '../payment';
import { PaymentService} from '../payment.service';
import {Training} from '../training';
import { TrainingService } from '../training.service';
import { Course } from '../course';
import { Users } from '../users';
import { Observable, Subject } from 'rxjs';
import { getLocaleTimeFormat } from '@angular/common';



@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent implements OnInit {

  searchTraining: FormGroup
  technologyName: String;
  timeSlot: String;


  constructor(private searchService: SearchService,
    private usersService: UsersService,
    private technologyService: TechnologyService,
    private paymentService:PaymentService,
    private trainingService : TrainingService) {
    this.searchTraining = new FormGroup({
      technologyName: new FormControl(''),
      timeSlot: new FormControl(''),
    });
  }


  coursesArray: Course[] = [];
  dtTrigger: Subject<any> = new Subject();
  courses: Observable<Course[]>;
  course: Course = new Course();


  user: Users = new Users();
  payment : Payment = new Payment();
  training : Training = new Training();

  to:String;

  
  

  technology: Technology = new Technology();

  ngOnInit() {

    this.searchService.getCourses().subscribe(data => {

      this.coursesArray = data;

    })


  }

  onSubmit() {

    

    this.technologyName = this.searchTraining.get("technologyName").value;
    this.timeSlot = this.searchTraining.get("timeSlot").value;

    this.searchService.searchCourses(this.technologyName, this.timeSlot).subscribe(data => {

      this.coursesArray = data;

    })

  }

  userId: number;

  onEnroll(technologyName:String,technology:Technology,user:Users,course:Course,mentorId:number){

    this.to = String(localStorage.getItem("userName"));

    this.userId  = Number(localStorage.getItem("userId"));

    this.payment.mentorId = mentorId;
    this.payment.paymentPending = technology.fees;
    this.payment.paymentReleased = 0;
    this.payment.paymentStatus = "pending";
    this.payment.totalPayment = technology.fees;
    this.payment.trainingName = technology.technologyName;
    this.payment.userId = this.userId;
    

    this.training.avgRating = course.avgRating;
    this.training.fees = technology.fees;
    this.training.mentorId = mentorId;
    this.training.userId = this.userId;
    this.training.payment = this.payment;
    this.training.progress = 0;
    this.training.status = "started";
    this.training.technologyName = technology.technologyName;

    console.log(this.training);

    this.trainingService.addtraining(this.training).subscribe( ()=>{
      console.log("Training Added");
    })


    // this.usersService.sendmail(this.to,technologyName).subscribe(()=>{
    //   console.log("mail sent");
    // })



  }

  onViewProfile(mentorid: number, technologyName: String) {


    this.usersService.getUser(mentorid).subscribe(data => {

      this.user = data;
    })

    this.technologyService.getFees(technologyName).subscribe(data => {

      this.technology = data;
    })



  }
}
