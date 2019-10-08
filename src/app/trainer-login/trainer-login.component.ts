import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UsersService } from '../users.service';
import { Users } from '../users';

import { Router } from "@angular/router";
import { delay } from 'q';

@Component({
  selector: 'app-trainer-login',
  templateUrl: './trainer-login.component.html',
  styleUrls: ['./trainer-login.component.css']
})
export class TrainerLoginComponent implements OnInit {
  trainerLogin: FormGroup;

  userName: String;
  password: String;

  user: Users = new Users;




  constructor(private router: Router, private usersService: UsersService) {

    this.trainerLogin = new FormGroup({
      userName: new FormControl(''),
      password: new FormControl(''),
    });
  }

  async onSubmit() {
    this.userName = this.trainerLogin.get("userName").value;
    this.password = this.trainerLogin.get("password").value;

    this.usersService.getUserCred(this.userName).subscribe(data => {
      this.user = data;
    })
    await delay(100);

    if (this.user != null && this.user.role == "mentor" && this.user.active == true) {

      if (this.user.password == this.password){
      localStorage.setItem('userId',String(this.user.id));
      localStorage.setItem('userName',String(this.user.userName));

        this.router.navigate(['/trainer-menu']);
      }
    } else {
      alert("Wrong Credentials");
    }





  }

  ngOnInit() {
  }

}
