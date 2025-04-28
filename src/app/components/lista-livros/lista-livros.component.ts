import { Component, OnInit } from '@angular/core';
import { Genero } from '../livro/Genero';
import { Livro } from '../livro/Livro';
import { livros } from '../../mock-livro';

@Component({
  selector: 'app-lista-livros',
  imports: [],
  templateUrl: './lista-livros.component.html',
  styleUrl: './lista-livros.component.css'
})

export class ListaLivrosComponent implements OnInit {
  generos: Genero[] = []
  livrosPorGenero: Map<string, Livro[]> = new Map();

  ngOnInit() {
    this.livrosPorGenero = new Map();

    livros.forEach(livro => {
      const generoId = livro.genero.id;
    }
  }
}
