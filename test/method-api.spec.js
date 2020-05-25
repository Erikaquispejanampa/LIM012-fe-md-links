const api = require("../util/method-api");

let links_req = [
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

let links_res = [
  {
    text: 'git Erika ',
    href: 'https://github.com/Erikaquispejanampa/LIM012-fe-md-links',
    file: 'E:\\Laboratoria\\Proyectos\\LIM012-fe-md-links\\MDs\\prueba1.md',
    status: 200,
    statusText: 'OK'
  },
  {
    text: 'angular',
    href: 'https://angular.io/',
    file: 'E:\\Laboratoria\\Proyectos\\LIM012-fe-md-links\\MDs\\prueba1.md',
    status: 200,
    statusText: 'OK'
  },
  {
    text: 'error 404',
    href: 'https://github.com/Erikaquispejanampa/LIM012-fe-md-links/sadadsa',
    file: 'E:\\Laboratoria\\Proyectos\\LIM012-fe-md-links\\MDs\\prueba1.md',
    status: 404,
    statusText: 'Not Found'
  }
];

describe('Probar si es objeto Funcion', () => {
    it('funcion validate', () => {
      expect(typeof api.validate).toBe('function');
    });
    
  });

describe('Probar valores', () => {

    it('debe retornar links validados', () => {

      api.validate(links_req).then((links) => expect(links).toEqual(links_res));

    });
            
})

