import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin-block-trainer',
  templateUrl: './admin-block-trainer.component.html',
  styleUrls: ['./admin-block-trainer.component.css']
})
export class AdminBlockTrainerComponent implements OnInit {

  adminBlockTrainer : FormGroup;
  
  constructor(private router: Router) { 

    this.adminBlockTrainer = new FormGroup({
      userName: new FormControl('')
    
    });

  }

  onSubmit(){
    this.router.navigate(['/admin-menu']);
  }

  ngOnInit() {
  }

}
