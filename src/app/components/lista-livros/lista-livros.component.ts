import { Component, OnInit } from '@angular/core';
import { Genero } from '../livro/Genero';
import { Livro } from '../livro/Livro';
import { livros } from '../../mock-livro';
import { LivroComponent } from '../livro/livro.component';
import { GeneroLiterarioComponent } from "../genero-literario/genero-literario.component";

@Component({
  selector: 'app-lista-livros',
  standalone: true,
  imports: [GeneroLiterarioComponent],
  templateUrl: './lista-livros.component.html',
  styleUrl: './lista-livros.component.css'
})

export class ListaLivrosComponent implements OnInit {
  genero: Genero[] = [];
  livrosPorGenero: Map<string, Livro[]> = new Map();
  
  // ORIGINAL

  ngOnInit() {
    this.livrosPorGenero = new Map();

    livros.forEach(livro => {
      const generoId = livro.genero.id;
      if (!this.livrosPorGenero.has(generoId)) {
        this.livrosPorGenero.set(generoId, []);
      }
      this.livrosPorGenero.get(generoId)?.push(livro);
    });

    this.genero = [
      {
        id: 'distopia',
        value: 'Distopia',
        livros: this.livrosPorGenero.get('distopia') ?? []
      },
      {
        id: 'fantasia',
        value: 'Fantasia',
        livros: this.livrosPorGenero.get('fantasia') ?? []
      },
      {
        id: 'misterio',
        value: 'Mistério',
        livros: this.livrosPorGenero.get('misterio') ?? []
      },
      {
        id: 'aventura',
        value: 'Aventura',
        livros: this.livrosPorGenero.get('aventura') ?? []
      }
    ];
    
    
  }

  // NOVO
  // ngOnInit() {
  //   this.livrosPorGenero = new Map();
  
  //   livros.forEach(livro => {
  //     const generoId = livro.genero.id;
  //     if (!this.livrosPorGenero.has(generoId)) {
  //       this.livrosPorGenero.set(generoId, []);
  //     }
  //     this.livrosPorGenero.get(generoId)?.push(livro);
  //   });
  
  //   this.generos = [];
  
  //   this.livrosPorGenero.forEach((livrosDoGenero, idGenero) => {
  //     const generoNome = livrosDoGenero[0]?.genero.value || idGenero;
  
  //     this.generos.push({
  //       id: idGenero,
  //       value: generoNome,
  //       livros: livrosDoGenero
  //     });
  //   });
  // }
  
}
