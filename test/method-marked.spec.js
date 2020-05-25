const marked = require("../util/method-marked");

let contenido = 
'- [git Erika ](https://github.com/Erikaquispejanampa/LIM012-fe-md-links)'+
'- [angular](https://angular.io/)'+
'- [error 404](https://github.com/Erikaquispejanampa/LIM012-fe-md-links/sadadsa)';

let links = [
  {
    text: 'git Erika ',
    href: 'https://github.com/Erikaquispejanampa/LIM012-fe-md-links',
    file: 'E:\\Laboratoria\\Proyectos\\LIM012-fe-md-links\\MDs\\prueba1.md'
  },
  {
    text: 'angular',
    href: 'https://angular.io/',
    file: 'E:\\Laboratoria\\Proyectos\\LIM012-fe-md-links\\MDs\\prueba1.md'
  },
  {
    text: 'error 404',
    href: 'https://github.com/Erikaquispejanampa/LIM012-fe-md-links/sadadsa',
    file: 'E:\\Laboratoria\\Proyectos\\LIM012-fe-md-links\\MDs\\prueba1.md'
  }
];

describe('Probar si es objeto Funcion', () => {
    it('funcion getLinksFile', () => {
      expect(typeof marked.getLinksFile).toBe('function');
    });

  });

describe('Probar valores', () => {

    it('Obtener links de archivo .MD', () => {
        expect(marked.getLinksFile('E:\\Laboratoria\\Proyectos\\LIM012-fe-md-links\\MDs\\prueba1.md',contenido)).toEqual(links);
    });
  
    
  })



  