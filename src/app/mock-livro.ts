import { Livro } from './components/livro/Livro';

export const livros: Livro[] = [
  {
    titulo: "1984",
    autor: "George Orwell",
    favorito: false,
    imagem: "data:image/jpeg;base64,...",
    genero: {
      id: "distopia",
      value: "Distopia",
      livros: [] // Preenchido depois
    }
  },
  {
    titulo: "O Senhor dos Anéis",
    autor: "J.R.R. Tolkien",
    favorito: false,
    imagem: "data:image/jpeg;base64,...",
    genero: {
      id: "fantasia",
      value: "Fantasia",
      livros: []
    }
  },
  {
    titulo: "Sherlock Holmes: Um Estudo em Vermelho",
    autor: "Arthur Conan Doyle",
    favorito: false,
    imagem: "data:image/jpeg;base64,...",
    genero: {
      id: "misterio",
      value: "Mistério",
      livros: []
    }
  },
  {
    titulo: "Percy Jackson e o Ladrão de Raios",
    autor: "Rick Riordan",
    favorito: false,
    imagem: "data:image/jpeg;base64,...",
    genero: {
      id: "aventura",
      value: "Aventura",
      livros: []
    }
  }
];
