
let validate = require('./validate');
let stats = require('./stats');

// node src/index.js ./src/documemntos --validate
// let a = process.argv[0];
// let b = process.argv[1];
let ruta = process.argv[2];
let opcion = process.argv[3];

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(opcion);

if (opcion === '--validate'){
    console.log(validate.validate(ruta));
}
if (opcion == '--stats'){
    console.log(stats.stats(ruta));
}