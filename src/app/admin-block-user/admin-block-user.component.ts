import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import {Router} from "@angular/router";
import { UsersService} from '../users.service';

@Component({
  selector: 'app-admin-block-user',
  templateUrl: './admin-block-user.component.html',
  styleUrls: ['./admin-block-user.component.css']
})
export class AdminBlockUserComponent implements OnInit {

  adminBlockUser : FormGroup;

  userName : String;
  action : String;
  
  constructor(private router: Router,private usersService:UsersService) { 

    this.adminBlockUser = new FormGroup({
      userName: new FormControl(''),
      action: new FormControl('')
    
    });

  }
  onSubmit(){

    this.userName = this.adminBlockUser.get("userName").value;
    this.action = this.adminBlockUser.get("action").value;

    console.log(this.userName);
    console.log(this.action);
    
    if(this.action == "Block"){
    this.usersService.blockUser(this.userName).subscribe(()=> console.log("User Blocked"));
    }else if(this.action == "Unblock"){
      this.usersService.unblockUser(this.userName).subscribe(()=> console.log("User Unblocked"));
    }



    this.router.navigate(['/admin-menu']);
  }

 


  ngOnInit() {
  }

}
