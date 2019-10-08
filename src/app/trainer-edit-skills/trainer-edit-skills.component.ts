import { Component, OnInit } from '@angular/core';
import { Skills} from '../skills';
import {SkillsService} from '../skills.service';
import { delay } from 'q';


@Component({
  selector: 'app-trainer-edit-skills',
  templateUrl: './trainer-edit-skills.component.html',
  styleUrls: ['./trainer-edit-skills.component.css']
})
export class TrainerEditSkillsComponent implements OnInit {


  skill:Skills = new Skills();
  skillsArray : Skills[] = [];
  mentorId:number = Number(localStorage.getItem("userId"));
 
  constructor( private skillsService:SkillsService) { }

  ngOnInit() {

    console.log(this.mentorId);

    this.skillsService.getMentorSkills(this.mentorId).subscribe(data=>{
      this.skillsArray = data;
      console.log(this.skillsArray);
    })

  }

  async onDelete(id:number){

    

    this.skillsService.deleteSkill(id).subscribe( ()=>{
      console.log("skill deleted");
    })

    await delay(200);
    this.skillsService.getMentorSkills(this.mentorId).subscribe( data =>{
      this.skillsArray = data;
    
    })



}


}
