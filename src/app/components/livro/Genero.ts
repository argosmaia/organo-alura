import { Livro } from "./Livro";

export interface Genero {
    id: string;
    value: string;
    livros: Livro[];
}