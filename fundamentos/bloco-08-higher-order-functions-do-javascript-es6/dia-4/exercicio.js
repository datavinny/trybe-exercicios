const arrays = [['1', '2', '3'], [true], [4, 5, 6]];

function flatten(value, acc) {
  return [`${value},${acc}`];
  // return `[${value},${acc}]`;
}

// console.log(arrays.reduce(flatten, 0));
const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:
// 1
function reduceNames(acc, element) {
  stringaA = `${acc},${element.author.name}`;
  stringaB = acc + element.author.name;
  return stringaB;
}
const reduced = books.reduce(reduceNames, []);
// 2
function averageAge(acc, element) {
  let calcIdade = element.releaseYear - element.author.birthYear;
  let media = acc + calcIdade / books.length;
  return media;
}
const medida = books.reduce(averageAge, 0);
// 3
// function longestNamedBook(acc, element) {
//   let result;
//   if (element.name > acc) {
//     return (result = acc);
//   }
// }
// let longest = books.reduce(longestNamedBook, element.name);
// console.log(longest);
// 4
const names = [
  'Aanemarie',
  'Adervandes',
  'Akifusa',
  'Abegildo',
  'Adicellia',
  'Aladonata',
  'Abeladerco',
  'Adieidy',
  'Alarucha',
];

function containsA(acc, element) {
  if (element.includes('a')) {
    return acc;
  }
}
const temA = names.reduce(containsA, 0);
console.log(temA);
