import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import {Users} from '../users';
import {Router} from "@angular/router";
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-sign-up',
  templateUrl: './user-sign-up.component.html',
  styleUrls: ['./user-sign-up.component.css']
})
export class UserSignUpComponent implements OnInit {

  userSignUp : FormGroup;
  submitted=false;

  user : Users = new Users();
  

  constructor(private fb:FormBuilder,private router: Router,private usersService:UsersService) {

    this.userSignUp = this.fb.group({
      firstName : ['',Validators.required],
      lastName : [''],
      email :['',Validators.required],
      contactNumber : ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      password : ['', [Validators.required, Validators.minLength(6)]],
      checkPassword : ['',[Validators.required, Validators.minLength(6)]]
    })


   }

   get f() { return this.userSignUp.controls; }

   onSubmit(){
     
    this.submitted = true;

    // stop here if form is invalid
    if (this.userSignUp.invalid) {
        return;
    }

    if(this.userSignUp.get("password").value == this.userSignUp.get("checkPassword").value){

    this.user.userName=this.userSignUp.get("email").value;
    this.user.firstName = this.userSignUp.get("firstName").value;
    this.user.lastName = this.userSignUp.get("lastName").value;
    this.user.password = this.userSignUp.get("password").value;
    this.user.contactNumber = this.userSignUp.get("contactNumber").value;
    this.user.active = true;
    this.user.role = "user";
   

      this.usersService.addUser(this.user).subscribe( data =>{
        alert("Registration Successfull");
        this.router.navigate(['/user-login'])
      });
    ;
    
    this.router.navigate(['/user-login'])
    }else{
      alert("passwords dont match");
    } 
  
  }


  ngOnInit() {
  }

}
