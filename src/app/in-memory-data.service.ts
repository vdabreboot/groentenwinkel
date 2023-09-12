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
        { id: 2, naam : "avocado" ,   prijs: 2.69, eenheid: 'kg'   },
        { id: 3, naam : "bloemkool" ,   prijs: 1.93, eenheid: 'kg'   },
        { id: 4, naam : "broccoli" , prijs: 1.29, eenheid: "stuk" },
        { id: 5, naam : "champginons", prijs: 0.89, eenheid: "250g" },
        { id: 6, naam : "chinese koool", prijs: 1.59, eenheid: "stuk"},
        { id: 7, naam : "groene kool" , prijs: 1.69, eenheid: "stuk"},
        { id: 8, naam : "knolselder", prijs: 1.29, eenheid: "stuk"},
        { id: 9, naam : "komkommer", prijs: 2.49 , eenheid: "stuk"},
        { id: 10, naam : "kropsla", prijs: 1.69, eenheid: "stuk"},
        { id: 11, naam : "paprika", prijs: 0.89, eenheid: "stuk"},
        { id: 12, naam: "prei", prijs: 2.99, eenheid: "stuk"},
        { id: 13, naam: "princessenbonen", prijs: 1, eenheid: "250g"},
        { id: 14, naam: "rapen", prijs: 0.99, eenheid: "bundel"},
        { id: 15, naam: "rode kool", prijs: 1.39, eenheid: "stuk"},
        { id: 16, naam: "sla iceberg", prijs: 1.49, eenheid: "300g"},
        { id: 17, naam: "spinazie vers", prijs: 1.89, eenheid: "300g"},
        { id: 18, naam: "sjalot", prijs: 0.99, eenheid: "500g"},
        { id: 19, naam: "spruiten", prijs: 1.86, eenheid: "kg"},
        { id: 20, naam: "trostomaat", prijs: 2.99, eenheid: "500g"},
        { id: 21, naam: "ui", prijs: 0.89, eenheid: "kg"},
        { id: 22, naam: "witloof 1ste keus", prijs: 1.49, eenheid: "700g"},
        { id: 23, naam: "wortelen", prijs: 2.59, eenheid: "kg"},
        { id :24, naam: "courgetten", prijs: 1.5, eenheid: "stuk"}
        ];

        const bestellingen : Bestelling[] = [];
        return { bestellingen , groenten };


    }

    /*public getJSON(): Observable<any> {
        return this.http.get(this._jsonURL)
    }*/
}