import { Livro } from './components/livro/Livro';

export const livros: Livro[] = [
  {
    titulo: "1984",
    autor: "George Orwell",
    favorito: false,
    genero: {
      id: "distopia",
      value: "Distopia",
      livros: []
    },
    imagem: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD..."
  },
  {
    titulo: "O Senhor dos Anéis: A Sociedade do Anel",
    autor: "J.R.R. Tolkien",
    favorito: false,
    genero: {
      id: "fantasia",
      value: "Fantasia",
      livros: [
        {
          titulo: "O Senhor dos Anéis: As Duas Torres",
          autor: "J.R.R. Tolkien",
          favorito: false,
          genero: {
            id: "fantasia",
            value: "Fantasia",
            livros: []
          },
          imagem: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD..."
        },
        {
          titulo: "O Senhor dos Anéis: O Retorno do Rei",
          autor: "J.R.R. Tolkien",
          favorito: false,
          genero: {
            id: "fantasia",
            value: "Fantasia",
            livros: []
          },
          imagem: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD..."
        }
      ]
    },
    imagem: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD..."
  },
  {
    titulo: "Dom Quixote",
    autor: "Miguel de Cervantes",
    favorito: false,
    genero: {
      id: "classico",
      value: "Clássico",
      livros: []
    },
    imagem: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD..."
  },
  {
    titulo: "Orgulho e Preconceito",
    autor: "Jane Austen",
    favorito: false,
    genero: {
      id: "romance",
      value: "Romance",
      livros: []
    },
    imagem: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD..."
  },
  {
    titulo: "O Apanhador no Campo de Centeio",
    autor: "J.D. Salinger",
    favorito: false,
    genero: {
      id: "ficcao",
      value: "Ficção",
      livros: []
    },
    imagem: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD..."
  }
];
