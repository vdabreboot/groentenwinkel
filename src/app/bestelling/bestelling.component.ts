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
  //selectedGroente: Groente = null!;
  selectedGroente: number = null!;
  bestellingen: Bestelling[] = [];
  aantal: number = 1;
  totaal: number = 0;  
  //groenteData: any = GroenteData;
  selectedBestelling : Bestelling = null!;

  constructor(private groentenService: GroentenService, private http: HttpClient) {   }
  //constructor( private http: HttpClient) {}

  ngOnInit(): void {      
    this.getAllGroenten();         
    //console.log('data', this.bestellingen);
    //this.getAllBestellingen();
    this.totaal = 0;
    this.bestellingen.forEach(b => this.totaal = this.totaal + (b.aantal * b.prijs));
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
    let promise: Observable<Groente>;    
    this.groentenService.getGroente(this.selectedGroente).subscribe(g => 
          { 
            console.log("selected naam ",g.naam)                
            const nieuwebestelling = {
              id: this.bestellingen.length + 1,
              groente: g.naam,
              aantal: this.aantal,
              prijs: g.prijs,
              tebetalen: g.prijs * this.aantal,              
            } ;            
            this.groentenService.addBestelling(nieuwebestelling);
            this.bestellingen.push(nieuwebestelling);
            //this.getAllBestellingen();
            this.ngOnInit();
          });    
  }  
  onSelect(bestelling:Bestelling) : void {
    this.selectedBestelling = bestelling;    
  }
  onDelete(bestelling:Bestelling) : void {    
    this.selectedBestelling = null!;    
    this.bestellingen = this.bestellingen.filter(l => l.id !== bestelling.id);        
    this.ngOnInit()
  }
}
