import { Genero } from "./Genero";

export interface Livro {
    titulo: string;
    autor: string;
    imagem: string;
    favorito: boolean;
    genero: Genero;
}