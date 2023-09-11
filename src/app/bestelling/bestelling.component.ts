import { Component , OnInit} from '@angular/core';
import { Groente } from '../groente';
import { GroentenService } from '../groenten.service';

@Component({
  selector: 'app-bestelling',
  templateUrl: './bestelling.component.html',
  styleUrls: ['./bestelling.component.css']
})
export class BestellingComponent implements OnInit {
  groenten: Groente[] = null!;

  constructor(private groenteService: GroentenService) {}

  ngOnInit(): void {
  
    this.getAllGroenten();
    console.log(this.groenten);
  } 
  getAllGroenten() {
    return this.groenteService.getGroenten().subscribe(groenten => this.groenten = groenten);
  }
}
