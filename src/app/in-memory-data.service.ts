import { InMemoryDbService } from 'angular-in-memory-web-api'
import { HttpClient } from '@angular/common/http'
import { Groente } from './groente'
import { Observable } from 'rxjs'

export class InMemoryDataService implements InMemoryDbService{    
    //private _jsonURL = 'assets/groenten.js';
    
    //constructor(private http: HttpClient) {}

    createDb(){
        const groenten : Groente[] =  [
        { naam : "aardappelen" ,   prijs: 0.95, eenheid: 'kg'   },
        ];
        return groenten;
    }

    /*public getJSON(): Observable<any> {
        return this.http.get(this._jsonURL)
    }*/
}