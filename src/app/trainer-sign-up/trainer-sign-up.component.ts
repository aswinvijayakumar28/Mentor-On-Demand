import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import {Router} from "@angular/router";
import {Users} from '../users';

import { UsersService } from '../users.service';
import { delay } from 'q';

@Component({
  selector: 'app-trainer-sign-up',
  templateUrl: './trainer-sign-up.component.html',
  styleUrls: ['./trainer-sign-up.component.css']
})
export class TrainerSignUpComponent implements OnInit {

  trainerSignUp : FormGroup;
  submitted = false;

  user : Users = new Users();
  user2 : Users = new Users();

  constructor(private fb:FormBuilder,private router: Router,private usersService:UsersService) {

    this.trainerSignUp = this.fb.group({
      firstName : ['',Validators.required],
      lastName : ['',Validators.required],
      email :['',Validators.required],
      contactNumber: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      yearsOfExperience:[''],
      password : ['', [Validators.required, Validators.minLength(6)]],
      checkPassword : ['',[Validators.required, Validators.minLength(6)]]
    })


   }

   get f() { return this.trainerSignUp.controls; }

   onSubmit(){

    this.submitted = true;

    // stop here if form is invalid
    if (this.trainerSignUp.invalid) {
        return;
    }

    if(this.trainerSignUp.get("password").value == this.trainerSignUp.get("checkPassword").value){

      this.user.userName=this.trainerSignUp.get("email").value;
      this.user.firstName = this.trainerSignUp.get("firstName").value;
      this.user.lastName = this.trainerSignUp.get("lastName").value;
      this.user.password = this.trainerSignUp.get("password").value;
      this.user.contactNumber = this.trainerSignUp.get("contactNumber").value;
      this.user.yearsOfExperience = this.trainerSignUp.get("yearsOfExperience").value;
      this.user.active = true;
      this.user.role = "mentor";
     
  
        this.usersService.addUser(this.user).subscribe( async data =>{
          alert("Registration Successfull");
          
          this.usersService.getUserCred(this.user.userName).subscribe(data => {
            this.user2 = data;
          })
          await delay(500);
          localStorage.setItem('userId',String(this.user2.id));
          localStorage.setItem('userName',String(this.user2.userName));
          this.router.navigate(['/trainer-edit-skills'])
        });
      ;
      
  
      }else{
        alert("passwords dont match");
      } 

    
     
    
   }

  ngOnInit() {
  }

}
