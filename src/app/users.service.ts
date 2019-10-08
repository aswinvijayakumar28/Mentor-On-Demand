import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Users} from '../app/users';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient:HttpClient) { }


  getUser(id:number): Observable<Users>{

    return this.httpClient.get<Users>('http://localhost:8050/api/users-service/user/'+id);
     
  }

  deleteUser(id:number):Observable<void>{

    return this.httpClient.delete<void>('http://localhost:8050/api/users-service/users/'+id);

    alert("User Blocked!");
     
  }

  blockUser(userName:String):Observable<void>{

    return this.httpClient.get<void>('http://localhost:8050/api/users-service/blockUser/'+userName);

    alert("User Blocked!");
     
  }

  unblockUser(userName:String):Observable<void>{

    return this.httpClient.get<void>('http://localhost:8050/api/users-service/unblockUser/'+userName);

    alert("User Unblocked!");
     
  }
  
  
  
  getUserCred(userName:String): Observable<Users>{

    return this.httpClient.get<Users>('http://localhost:8050/api/users-service/userName/'+userName);
     
  }

  public addUser(user : Users){
    console.log(user);
    return this.httpClient.post<Users>('http://localhost:8050/api/users-service/users',user);
  }

  sendmail(to:String,technology:String):Observable<void>{
    return this.httpClient.get<void>('http://localhost:8050/api/mail-service/mail/'+to+'/Mentor On Demand Training Enrolement/You have been enrolled to '+technology+' course');
  }


 




}
