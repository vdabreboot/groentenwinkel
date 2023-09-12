import { Component , OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Groente } from '../groente';
import { GroentenService } from '../groenten.service';

@Component({
  selector: 'app-bestelling',
  templateUrl: './bestelling.component.html',
  styleUrls: ['./bestelling.component.css']
})
export class BestellingComponent implements OnInit {
  groentenURL = '/assets/groenten.json';
  groenten: any; //Groente[] = null!;
  selectedGroente: Groente = null!;
  //groenteData: any = GroenteData;

  constructor(private groentenService: GroentenService, private http: HttpClient) {}
  //constructor( private http: HttpClient) {}

  ngOnInit(): void {  
    this.getAllGroenten();        
    //console.log('data', this.groenteData);
  } 
  getAllGroenten() {
    //return this.groentenService.getGroenten().subscribe(groenten => this.groenten = groenten);
    console.log("test");
    return this.http.get(this.groentenURL).subscribe(g => this.groenten = g);
  }
  toevoegenMandje(): void {
    console.log("toevoegen mandje");
    console.log(this.selectedGroente);
    //console.log(this.selectedGroente);
  }  
}
