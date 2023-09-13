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
  private bestellingURL = 'api/bestellingen';
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
  getGroente(index: number): Observable<Groente> {
    const urlAction = `${this.groentenURl}/${index}}`;
    return this.http.get<Groente>(urlAction)
      .pipe(
        catchError(this.handleError<Groente>(`getGroente ${index}`))
      )
  }
  getGroente2<Groente>(index: number){
    const urlAction = `${this.groentenURl}/${index}}`;
    return this.http.get<Groente>(urlAction)
      .pipe(
        catchError(this.handleError<Groente>(`getGroente ${index}`))
      )
  }

  addGroente(groente: Groente) : Observable<any> {
    return this.http.post(this.groentenURl,groente,httpOptions)
      .pipe( catchError(this.handleError<any>('addGroente')));
  }

  getBestellingen() : Observable<Bestelling[]> {
    return this.http.get<Bestelling[]>(this.bestellingURL)
      .pipe(
        catchError(this.handleError('getBestellingen',[]))
      )
  }
  addBestelling(bestelling: Bestelling) : Observable<Bestelling> {
    console.log("toevoegen bestelling");
    return this.http.post<Bestelling>(this.bestellingURL,bestelling,httpOptions)
      .pipe(
        catchError(this.handleError<Bestelling>('addBestelling')),        
      )      
  }
  VerwijderBestelling(bestelling: Bestelling): Observable<Bestelling>{
    const urlAction = this.bestellingURL + `/${bestelling.id}`;
    return this.http.delete<Bestelling>(urlAction,httpOptions)
      .pipe(catchError(this.handleError<Bestelling>('deleteBestelling')))
  }

  handleError<T>(operation = 'operation',result?: T){
    return (error:any) : Observable<T> => {      
      console.log(operation,error);
      return of(result as T)
    }
  }
}
