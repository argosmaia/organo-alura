import { Component, input } from '@angular/core';
import { LivroComponent } from "../livro/livro.component";
import { livros } from '../../mock-livro';
import { Genero } from '../livro/Genero';

@Component({
  selector: 'app-genero-literario',
  imports: [LivroComponent],
  templateUrl: './genero-literario.component.html',
  styleUrl: './genero-literario.component.css'
})
export class GeneroLiterarioComponent {
  genero = input.required<Genero>();
  // livro = livros[0];
}
