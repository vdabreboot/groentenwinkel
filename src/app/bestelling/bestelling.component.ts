import { Component , OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Groente } from '../groente';
import { GroentenService } from '../groenten.service';
import { Bestelling } from '../bestelling';

@Component({
  selector: 'app-bestelling',
  templateUrl: './bestelling.component.html',
  styleUrls: ['./bestelling.component.css']
})
export class BestellingComponent implements OnInit {
  groentenURL = '/assets/groenten.json';
  groenten: any; //Groente[] = null!;
  selectedGroente: Groente = null!;
  bestellingen: Bestelling[] = null!;
  //groenteData: any = GroenteData;

  constructor(private groentenService: GroentenService, private http: HttpClient) {   }
  //constructor( private http: HttpClient) {}

  ngOnInit(): void {  
    this.getAllGroenten();     
  
    //console.log('data', this.groenteData);
  } 
  getAllGroenten() {
    //return this.groentenService.getGroenten().subscribe(groenten => this.groenten = groenten);    
    //return this.http.get(this.groentenURL).subscribe(g => this.groenten = g);
    
    return this.http.get(this.groentenURL).subscribe(g => this.groenten = g);
   

  }
  getAllBestellingen(){
    this.groentenService.getBestellingen().subscribe(bestelling => this.bestellingen = bestelling);
  }
  toevoegenMandje(): void {
    console.log("toevoegen mandje");
    console.log(this.selectedGroente);
    //this.groentenService.addGroente(this.selectedGroente);                
     const nieuwebestelling = {
        groente: this.selectedGroente.naam,
        prijs: this.selectedGroente.prijs,
        tebetalen: 0,
        totaal: 0      
      }
      this.groentenService.addBestelling(nieuwebestelling);
    this.selectedGroente=null!;
    this.getAllBestellingen();
    //console.log(this.selectedGroente);
    console.log("bestelling", this.bestellingen)
  }  
}
