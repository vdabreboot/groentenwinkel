import { Injectable } from '@angular/core';
import { Observable, of, catchError } from 'rxjs';
import { Groente } from './groente';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GroentenService {
  private groentenURl = 'api/groenten';
  constructor(private http : HttpClient) { }

  getGroenten(): Observable<Groente[]> {    
    return this.http.get<Groente[]>(this.groentenURl)
      .pipe(
        catchError(this.handleError('getGroenten',[]))
      )
  }
  handleError<T>(operation = 'operation',result?: T){
    return (error:any) : Observable<T> => {      
      console.log(operation,error);
      return of(result as T)
    }
  }
}
