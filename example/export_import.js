// console.log("evaluating example.js");

const sumar = ( num1, num2)=> {
    console.log( 'Suma:' + (num1 + num2));
  }
  
  const restar = ( num1, num2)=> {
    console.log( 'resta:' + (num1 - num2));
  }
  
  const multiplicar = ( num1, num2)=> {
    console.log( 'multiplicar:' + (num1 * num2));
  }
  
  export {
    sumar,
    restar,
    multiplicar
  };
  
  // sumar(4,5);
  // restar(12,5);
  // multiplicar(4,5);