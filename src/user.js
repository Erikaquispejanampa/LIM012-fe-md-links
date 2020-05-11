const mdLinks = require('./api.js')

// console.log(add(3,4));


mdLinks('E:\\Laboratoria\\Proyectos\\LIM012-fe-md-links\\MDs\\prueba1.md', {validate:true})
.then( (resp) => {
    console.log(resp);
} );

// console.log(
//     mdLinks('E:\\Laboratoria\\Proyectos\\LIM012-fe-md-links\\MDs\\prueba1.md', {validate:false})
// );

// console.log(
//     mdLinks('.\\MDs\\', true)
// );