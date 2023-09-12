const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'})}
import { Injectable } from '@angular/core';
import { Observable, of, catchError } from 'rxjs';
import { Groente } from './groente';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Bestelling } from './bestelling';

@Injectable({
  providedIn: 'root'
})
export class GroentenService {
  res:string = null!;
  private groentenURl = 'api/groenten';
  //private groentenURl = '/assets/groenten.json';
  private bestellingURl = 'api/bestellingen';
  constructor(private http : HttpClient) { }

  getGroenten(): Observable<Groente[]> {    
    return this.http.get<Groente[]>(this.groentenURl)
      .pipe(
        catchError(this.handleError('getGroenten',[]))
      )
  }

  /*getGroentenFromJason(): Observable<Groente[]> {    
     this.res = fetch('/assets/groenten.json').then((response)=> response.json()
      .then(    
    this.http.get<Groente[]>(this.groentenURl)
      .pipe(
        catchError(this.handleError('getGroenten',[]))
      )
  }*/

  addGroente(groente: Groente) : Observable<any> {
    return this.http.post(this.groentenURl,groente,httpOptions)
      .pipe( catchError(this.handleError<any>('addGroente')));
  }

  getBestellingen() : Observable<Bestelling[]> {
    return this.http.get<Bestelling[]>(this.bestellingURl)
      .pipe(
        catchError(this.handleError('getBestellingen',[]))
      )
  }
  addBestelling(bestelling: Bestelling) : Observable<any> {
    return this.http.post<Bestelling>(this.bestellingURl,httpOptions)
      .pipe(
        catchError(this.handleError<any>('addBestelling'))
      )
  }

  handleError<T>(operation = 'operation',result?: T){
    return (error:any) : Observable<T> => {      
      console.log(operation,error);
      return of(result as T)
    }
  }
}
