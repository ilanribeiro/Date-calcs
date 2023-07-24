// run `node index.js` in the terminal

// console.log(`Hello Node.js`, process);

const actualDate = new Date();
console.log('actual date:', actualDate);

const initialDate = new Date(['2023-07-07', '22:00:00']);
console.log('initial date:', initialDate);

const finalDate = new Date(['2023-08-26', '22:00:00']);
console.log('final date:', finalDate);

let result = finalDate - initialDate;
console.log('Periodo total fora: ', Math.floor(result / (1000 * 60 * 60 * 24)));

result = actualDate - initialDate;
console.log(
  'Dias passados até o momento: ',
  Math.floor(result / (1000 * 60 * 60 * 24))
);

result = finalDate - actualDate;
console.log(
  'Dias restantes até o retorno: ',
  Math.floor(result / (1000 * 60 * 60 * 24)) + 1
);
