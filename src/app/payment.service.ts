import { Injectable } from '@angular/core';
import { Payment} from '../app/payment';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private httpClient:HttpClient) { }

  getUserPaymentStatus(trainingId:number): Observable<Payment>{

    return this.httpClient.get<Payment>('http://localhost:8050/api/payment-service/userPaymentStatus/'+trainingId);
     
  }
  getMentorPendingPayments(userId:number): Observable<Payment[]>{

    return this.httpClient.get<Payment[]>('http://localhost:8050/api/payment-service/mentorPayments/'+userId+'/pending');
     
  }

  getMentorPaymentsHistory(userId:number): Observable<Payment[]>{

    return this.httpClient.get<Payment[]>('http://localhost:8050/api/payment-service/mentorPayments/'+userId+'/paid');
     
  }
}
