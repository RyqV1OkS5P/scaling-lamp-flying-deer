import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-component',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  pokemons: any;
  type = 'fire';
  types = ['fire', 'ice', 'water'];

  // viewchild
  @ViewChild('pokemonTable', { static: false }) pokemonTable: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons() {
    this.http.get(`https://pokeapi.co/api/v2/type/${this.type}`).subscribe((data: any) => {
      this.pokemons = data.pokemon;
    });
  }

  // Change pokemons by type when the dropdown changes
  onTypeChange(type: Event) {
	  
    this.type = (type.target as HTMLInputElement).value;
    this.getPokemons();
  }
}

