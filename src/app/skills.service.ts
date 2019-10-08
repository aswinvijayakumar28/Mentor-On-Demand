import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import {Skills} from '../app/skills';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  constructor(private httpClient:HttpClient) { }

  getSkills():Observable<Skills[]>{
    return this.httpClient.get<Skills[]>('http://localhost:8050/api/skills-service/skills');
  }

  getMentorSkills(mentorId:number):Observable<Skills[]>{
    return this.httpClient.get<Skills[]>('http://localhost:8050/api/skills-service/mentorSkills/'+mentorId);
  }
 

  deleteSkill(skillId:number):Observable<void>{
    return this.httpClient.delete<void>('http://localhost:8050/api/skills-service/skills/'+skillId);
  }

  updateSkill(skillId:number,skill:Skills):Observable<void>{
    return this.httpClient.put<void>('http://localhost:8050/api/skills-service/skils/'+skillId,skill);
  }

  addSkill(skill:Skills):Observable<void>{
    console.log(skill.mentorId);
    return this.httpClient.post<void>('http://localhost:8050/api/skills-service/skills',skill);
  }
}
