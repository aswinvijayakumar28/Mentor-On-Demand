import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import {Router} from "@angular/router";
import { UsersService } from '../users.service';
import { Users } from '../users';
import { delay } from 'q';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  adminLogin : FormGroup;

  userName: String;
  password: String;

  user: Users = new Users;
  
  constructor(private router: Router,private usersService: UsersService) { 

    this.adminLogin = new FormGroup({
      userName: new FormControl(''),
      password: new FormControl(''),
    });

  }

  async onSubmit(){

    this.userName = this.adminLogin.get("userName").value;
    this.password = this.adminLogin.get("password").value;

    this.usersService.getUserCred(this.userName).subscribe(data => {
      this.user = data;
    })
    await delay(200);

    if (this.user != null && this.user.role == "admin" && this.user.active == true) {

      if (this.user.password == this.password){
      localStorage.setItem('userId',String(this.user.id));
      localStorage.setItem('userName',String(this.user.userName));

        this.router.navigate(['/admin-menu']);
      }
    } else {
      alert("Wrong Credentials");
    }
   

  }
  ngOnInit() {
  }

}
