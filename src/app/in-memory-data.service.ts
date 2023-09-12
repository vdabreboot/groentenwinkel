import { InMemoryDbService } from 'angular-in-memory-web-api'
import { HttpClient } from '@angular/common/http'
import { Groente } from './groente'
import { Observable } from 'rxjs'
import { Bestelling } from './bestelling';

export class InMemoryDataService implements InMemoryDbService{    
    private _jsonURL = 'assets/groenten.js';
    
    createDb(){
        const groenten : Groente[] =  [
        { id: 1, naam : "aardappelen" ,   prijs: 0.95, eenheid: 'kg'   },
        { id: 2, naam : "avocado" ,   prijs: 2.69, eenheid: 'kg'   }
        ];

        const bestelling : Bestelling[] = [];
        return { bestelling , groenten };


    }

    /*public getJSON(): Observable<any> {
        return this.http.get(this._jsonURL)
    }*/
}