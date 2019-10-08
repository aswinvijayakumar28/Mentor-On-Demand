import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import {Router} from "@angular/router";
import { Skills } from '../skills';
import { SkillsService } from '../skills.service';

@Component({
  selector: 'app-trainer-add-skills',
  templateUrl: './trainer-add-skills.component.html',
  styleUrls: ['./trainer-add-skills.component.css']
})
export class TrainerAddSkillsComponent implements OnInit {

  trainerAddSkills : FormGroup;

  skill: Skills = new Skills();

  mentorId : number = Number(localStorage.getItem('userId'));
  
  constructor(private router: Router,private skillsService:SkillsService) { 

    this.trainerAddSkills = new FormGroup({
      technology: new FormControl(''),
      timeSlot: new FormControl('')
      
    });

  }
  onSubmit(){
   
  console.log(this.mentorId);
    

    this.skill.technologyName=this.trainerAddSkills.get("technology").value;
    this.skill.timeSlot = this.trainerAddSkills.get("timeSlot").value;
    this.skill.mentorId = this.mentorId;

    
    console.log(this.skill);

    this.skillsService.addSkill(this.skill).subscribe(()=>{
      console.log("added!!");
      this.router.navigate(['/trainer-edit-skills']);
    })


     
   
 
     
   }

  ngOnInit() {
  }

}
