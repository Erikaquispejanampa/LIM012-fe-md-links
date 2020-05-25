
const api = require("../src/api");

let file_linksNoValidate = [
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

let file_linksValidate =[
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

let directory_linksNoValidate = [
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
    },
    {
      text: 'facebook',
      href: 'https://www.facebook.com/',
      file: 'E:\\Laboratoria\\Proyectos\\LIM012-fe-md-links\\MDs\\prueba2.md'
    },
    {
      text: 'netflix',
      href: 'https://www.netflix.com/',
      file: 'E:\\Laboratoria\\Proyectos\\LIM012-fe-md-links\\MDs\\prueba2.md'
    },
    {
      text: 'facebook',
      href: 'https://www.facebook.com/',
      file: 'E:\\Laboratoria\\Proyectos\\LIM012-fe-md-links\\MDs\\prueba3.md'
    },
    {
      text: 'netflix',
      href: 'https://www.netflix.com/',
      file: 'E:\\Laboratoria\\Proyectos\\LIM012-fe-md-links\\MDs\\prueba3.md'
    }
  ];

let directory_linksValidate =
  [
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
    },
    {
      text: 'facebook',
      href: 'https://www.facebook.com/',
      file: 'E:\\Laboratoria\\Proyectos\\LIM012-fe-md-links\\MDs\\prueba2.md',
      status: 200,
      statusText: 'OK'
    },
    {
      text: 'netflix',
      href: 'https://www.netflix.com/',
      file: 'E:\\Laboratoria\\Proyectos\\LIM012-fe-md-links\\MDs\\prueba2.md',
      status: 200,
      statusText: 'OK'
    },
    {
      text: 'facebook',
      href: 'https://www.facebook.com/',
      file: 'E:\\Laboratoria\\Proyectos\\LIM012-fe-md-links\\MDs\\prueba3.md',
      status: 200,
      statusText: 'OK'
    },
    {
      text: 'netflix',
      href: 'https://www.netflix.com/',
      file: 'E:\\Laboratoria\\Proyectos\\LIM012-fe-md-links\\MDs\\prueba3.md',
      status: 200,
      statusText: 'OK'
    }
  ];

describe('Probar si es objeto Funcion', () => {
      it('funcion stats', () => {
        expect(typeof api.stats).toBe('function');
     });
    
      it('funcion statsValidate', () => {
        expect(typeof api.statsValidate).toBe('function');
      });

      it('funcion mdLinks', () => {
        expect(typeof api.mdLinks).toBe('function');
      });
  });


  describe('Probar valores', () => {

    it('Validar ruta de archivo y validate en false', () => {
      api.mdLinks('./MDs/prueba1.md',  {validate: false} ).then((links) => expect(links).toEqual(file_linksNoValidate));
    });

    it('Validar ruta de archivo y validate en true', () => {
        api.mdLinks('./MDs/prueba1.md',  {validate: true} ).then((links) => expect(links).toEqual(file_linksValidate));
    });

    it('Validar directorio de archivo y validate en false', () => {
        api.mdLinks('./MDs/',  {validate: false} ).then((links) => expect(links).toEqual(directory_linksNoValidate));
    });
  
    it('Validar directorio de archivo y validate en true', () => {
          api.mdLinks('./MDs/',  {validate: true} ).then((links) => expect(links).toEqual(directory_linksValidate));
    });

    it('Validar stats en directorio', () => {
        expect(api.stats(directory_linksValidate)).toEqual({ Total: 7, Unique: 6 });
    });
    
    it('Validar stats en archivo', () => {
        expect(api.stats(file_linksValidate)).toEqual({ Total: 3, Unique: 2 });
    });
})
