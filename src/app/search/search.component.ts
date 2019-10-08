import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SearchService } from '../search.service';
import { UsersService} from '../users.service';
import { TechnologyService} from '../technology.service';
import { Technology} from 'src/app/technology';
import { Course } from 'src/app/course';
import { Users} from 'src/app/users';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchTraining: FormGroup
  technologyName: String;
  timeSlot: String;



  constructor(private searchService: SearchService,
    private usersService:UsersService,
    private technologyService:TechnologyService) {

    this.searchTraining = new FormGroup({
      technologyName: new FormControl(''),
      timeSlot: new FormControl(''),
    });

  }

  coursesArray: Course[] = [];
  dtTrigger: Subject<any> = new Subject();
  courses: Observable<Course[]>;
  course: Course = new Course();


  user : Users = new Users();

  technology : Technology = new Technology();

  ngOnInit() {

    this.searchService.getCourses().subscribe(data => {

      this.coursesArray = data;

    })

    
  }

  onSubmit() {

    

    this.technologyName = this.searchTraining.get("technologyName").value;
    this.timeSlot = this.searchTraining.get("timeSlot").value;

    this.searchService.searchCourses(this.technologyName, this.timeSlot).subscribe(data => {

      this.coursesArray = data;

    })

  }

  onViewProfile(mentorid : number,technologyName:String){


    this.usersService.getUser(mentorid).subscribe( data =>{

      this.user = data;
    })
 
    this.technologyService.getFees(technologyName).subscribe( data =>{

      this.technology = data;
    })



    

  }

}
