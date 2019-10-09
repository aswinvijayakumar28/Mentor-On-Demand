import { Component, OnInit } from '@angular/core';
import { TechnologyService} from '../technology.service';
import { Technology} from 'src/app/technology';
import { delay } from 'q';
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin-edit-technologies',
  templateUrl: './admin-edit-technologies.component.html',
  styleUrls: ['./admin-edit-technologies.component.css']
})
export class AdminEditTechnologiesComponent implements OnInit {

  constructor(private router:Router,private technologyService:TechnologyService) { }

  technologiesArray: Technology[] = [];
  

  technology: Technology= new Technology();

  
  ngOnInit() {

    this.technologyService.getTechnologies().subscribe( data =>{
      this.technologiesArray = data;
     
    })
  }
  onEdit(id:number){
    console.log("hi");
    localStorage.setItem('technologyId',String(id));
    this.router.navigate(['/admin-edit-technologies2']);
  }

  async onDelete(id:number){

    

      this.technologyService.deleteTechnology(id).subscribe( ()=>{
        console.log("technology deleted");
      })

      await delay(200);
      this.technologyService.getTechnologies().subscribe( data =>{
        this.technologiesArray = data;
      
      })



  }

}
