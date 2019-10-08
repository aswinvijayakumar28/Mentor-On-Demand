import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { UsersService} from '../users.service';
import { Users} from '../users';
import {Router} from "@angular/router";
import { delay } from 'q';


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  userLogin : FormGroup;

  userName : String;
  password : String;

  user : Users = new Users;
  
  constructor(private router: Router,
              private usersService:UsersService) { 

    this.userLogin = new FormGroup({
      userName: new FormControl(''),
      password: new FormControl(''),
    });

  }

  async onSubmit(){

    this.userName = this.userLogin.get("userName").value;
    this.password = this.userLogin.get("password").value;

    this.usersService.getUserCred(this.userName).subscribe(data =>{
      this.user = data;
    })
await delay(100);

   if(this.user != null && this.user.role=="user" && this.user.active == true){

    if(this.user.password == this.password){

    localStorage.setItem('userId',String(this.user.id));
    localStorage.setItem('userName',String(this.user.userName));
    this.router.navigate(['/user-menu']);
   }
   }else{
    alert("Wrong Credentials");
   }

    
  }

  ngOnInit() {
  }

}
