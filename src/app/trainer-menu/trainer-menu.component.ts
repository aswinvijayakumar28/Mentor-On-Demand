import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-trainer-menu',
  templateUrl: './trainer-menu.component.html',
  styleUrls: ['./trainer-menu.component.css']
})
export class TrainerMenuComponent implements OnInit {

  constructor(private router: Router) { }

  editSkills(){
    this.router.navigate(['/trainer-edit-skills']);
   }
   currentTrainings(){
     this.router.navigate(['/trainer-current-trainings'])
   }
   completedTrainings(){
    this.router.navigate(['/trainer-completed-trainings'])
  }

  ngOnInit() {
  }

}
