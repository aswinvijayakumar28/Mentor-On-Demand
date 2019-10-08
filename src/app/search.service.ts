import { Injectable } from '@angular/core';
import {Course} from '../app/course';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
 

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private httpClient:HttpClient) { }


  getCourses(): Observable<Course[]>{

    return this.httpClient.get<Course[]>('http://localhost:8050/api/search-service/search');
     
  }

  searchCourses(technologyName:String,timeSlot:String): Observable<Course[]>{

    return this.httpClient.get<Course[]>('http://localhost:8050/api/search-service/search/'+technologyName+'/'+timeSlot);
     
  }
}
