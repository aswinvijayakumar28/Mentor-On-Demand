import { Injectable } from '@angular/core';
import { Technology} from 'src/app/technology';

import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
 

@Injectable({
  providedIn: 'root'
})
export class TechnologyService {

  constructor(private httpClient:HttpClient) { }

  getTechnologies():Observable<Technology[]>{
    return this.httpClient.get<Technology[]>('http://localhost:8050/api/technology-service/technologies');
  }

  getFees(technologyName:String):Observable<Technology>{

    return this.httpClient.get<Technology>('http://localhost:8050/api/technology-service/feetechnologies/'+technologyName);


  }

  deleteTechnology(technologyId:number):Observable<void>{
    return this.httpClient.delete<void>('http://localhost:8050/api/technology-service/technologies/'+technologyId);
  }

  updateTechnology(technologyId:number,technology:Technology):Observable<void>{
    return this.httpClient.put<void>('http://localhost:8050/api/technology-service/technologies/'+technologyId,technology);
  }

  addTechnology(technology:Technology):Observable<void>{
    return this.httpClient.post<void>('http://localhost:8050/api/technology-service/technologies',technology);
  }
}
