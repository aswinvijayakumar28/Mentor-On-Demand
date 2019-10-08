import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import {Router} from "@angular/router";

import { TechnologyService} from '../technology.service';
import { Technology} from '../technology';

@Component({
  selector: 'app-admin-add-technologies',
  templateUrl: './admin-add-technologies.component.html',
  styleUrls: ['./admin-add-technologies.component.css']
})
export class AdminAddTechnologiesComponent implements OnInit {

  adminAddTechnology : FormGroup;

  technology:Technology = new Technology();
  
  constructor(private router: Router,private technologyService:TechnologyService) { 

    this.adminAddTechnology = new FormGroup({
      technology: new FormControl(''),
      fees: new FormControl(''),
      duration : new FormControl(''),
      prerequisites : new FormControl(''),
      toc : new FormControl(''),

    });

  }
  onSubmit(){
   
 

    this.technology.technologyName=this.adminAddTechnology.get("technology").value;
    this.technology.fees=this.adminAddTechnology.get("fees").value;
    this.technology.duration=this.adminAddTechnology.get("duration").value;
    this.technology.prerequisites=this.adminAddTechnology.get("prerequisites").value;
    this.technology.toc=this.adminAddTechnology.get("toc").value;

    
    console.log(this.technology);

    this.technologyService.addTechnology(this.technology).subscribe(()=>{
      console.log("added!!");
      this.router.navigate(['/admin-edit-technologies']);
    })


     
   
 
     
   }
  ngOnInit() {
  }

}
