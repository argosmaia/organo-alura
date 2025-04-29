import { Livro } from './components/livro/Livro';

export const livros: Livro[] = [
  {
    titulo: "1984",
    autor: "George Orwell",
    favorito: false,
    imagem: "https://img.yumpu.com/62329863/1/500x640/1984-george-orwell.jpg",
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
    imagem: "https://harpercollins.com.br/cdn/shop/products/9786555113631_11cf7abe-a2b3-4635-8467-c0f34f0ebd59.jpg?v=1686061056",
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
    imagem: "https://cirandacultural.fbitsstatic.net/img/p/sherlock-holmes-um-estudo-em-vermelho-70548/257062.jpg?w=520&h=520&v=no-change&qs=ignore",
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
    imagem: "https://m.media-amazon.com/images/I/61JenSx3wKL._AC_UF1000,1000_QL80_.jpg",
    genero: {
      id: "aventura",
      value: "Aventura",
      livros: []
    }
  }
];
