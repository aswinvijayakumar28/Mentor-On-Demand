import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin-menu',
  templateUrl: './admin-menu.component.html',
  styleUrls: ['./admin-menu.component.css']
})
export class AdminMenuComponent implements OnInit {

  constructor(private router: Router) { }
  blockUser(){
    this.router.navigate(['/admin-block-user']);
   }
   
   technologies(){
    this.router.navigate(['/admin-edit-technologies'])
  }


  ngOnInit() {
  }

}
