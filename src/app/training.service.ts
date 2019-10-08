import { Injectable } from '@angular/core';
import { Training} from '../app/training';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {

  constructor(private httpClient:HttpClient) { }

  getUserCurrentTrainings(userId:number): Observable<Training[]>{

    console.log(userId);

    return this.httpClient.get<Training[]>('http://localhost:8050/api/training-service/userTrainings/'+userId+'/started');
     
  }

  getUserCompletedTrainings(userId:number): Observable<Training[]>{

    return this.httpClient.get<Training[]>('http://localhost:8050/api/training-service/userTrainings/'+userId+'/completed');
     
  }


  getMentorCurrentTrainings(userId:number): Observable<Training[]>{

    return this.httpClient.get<Training[]>('http://localhost:8050/api/training-service/mentorTrainings/'+userId+'/started');
     
  }

  getMentorCompletedTrainings(userId:number): Observable<Training[]>{

    return this.httpClient.get<Training[]>('http://localhost:8050/api/training-service/mentorTrainings/'+userId+'/completed');
     
  }

  addtraining(training : Training): Observable<void>{
    return this.httpClient.post<void>('http://localhost:8050/api/training-service/user/trainings',training);
  }


}
