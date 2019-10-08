import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import {Router} from "@angular/router";
import { TechnologyService} from '../technology.service';
import { Technology} from '../technology';

@Component({
  selector: 'app-admin-edit-technologies2',
  templateUrl: './admin-edit-technologies2.component.html',
  styleUrls: ['./admin-edit-technologies2.component.css']
})
export class AdminEditTechnologies2Component implements OnInit {

  adminEditTechnologies : FormGroup;

  id:number;

  technology:Technology = new Technology();
  
  constructor(private router: Router,private technologyService:TechnologyService) { 

    this.adminEditTechnologies = new FormGroup({
      technology: new FormControl(''),
      fees: new FormControl(''),
      duration : new FormControl(''),
      prerequisites : new FormControl(''),
      toc : new FormControl(''),

    });

  }



  onSubmit(){

    this.technology.id = this.id;
    this.technology.technologyName=this.adminEditTechnologies.get("technology").value;
    this.technology.fees=this.adminEditTechnologies.get("fees").value;
    this.technology.duration=this.adminEditTechnologies.get("duration").value;
    this.technology.prerequisites=this.adminEditTechnologies.get("prerequisites").value;
    this.technology.toc=this.adminEditTechnologies.get("toc").value;

    
    console.log(this.technology);

    this.technologyService.updateTechnology(this.id,this.technology).subscribe(()=>{
      console.log("updated!!");
      this.router.navigate(['/admin-edit-technologies']);
    })


  

    
   

    
  }

  ngOnInit() {

    this.id = Number(localStorage.getItem('technologyId'));
    console.log(this.id);
  }

}
