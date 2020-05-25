const file = require("../util/method-file");

let contentFile = 'prueba de contenido';

let DirectoryFiles = [
  'E:\\Laboratoria\\Proyectos\\LIM012-fe-md-links\\MDs\\contenido.md',
  'E:\\Laboratoria\\Proyectos\\LIM012-fe-md-links\\MDs\\prueba1.md',  
  'E:\\Laboratoria\\Proyectos\\LIM012-fe-md-links\\MDs\\prueba2.md',  
  'E:\\Laboratoria\\Proyectos\\LIM012-fe-md-links\\MDs\\prueba3.md',
  'E:\\Laboratoria\\Proyectos\\LIM012-fe-md-links\\MDs\\prueba4.txt'
];



describe('Probar si es objeto Funcion', () => {
    it('funcion typeFile', () => {
      expect(typeof file.typeFile).toBe('function');
    });
  
    it('funcion readFile', () => {
      expect(typeof file.readFile).toBe('function');
    });

    it('funcion getFileDirectory', () => {
        expect(typeof file.getFileDirectory).toBe('function');
      });
  
  });


describe('Probar valores', () => {

    it('Validar Tipo archivo --> File', () => {
        expect(file.typeFile('E:\\Laboratoria\\Proyectos\\LIM012-fe-md-links\\MDs\\prueba1.md')).toBe('file');
    });
    
    it('Validar Tipo archivo --> Directory', () => {
      expect(file.typeFile('E:\\Laboratoria\\Proyectos\\LIM012-fe-md-links\\MDs\\')).toBe('directory');
    });
    
    it('Validar contenido de archivo', () => {
      expect(file.readFile('E:\\Laboratoria\\Proyectos\\LIM012-fe-md-links\\MDs\\contenido.md')).toBe(contentFile);
    });

    it('Validar archivos del directorio', () => {
      expect(file.getFileDirectory('E:\\Laboratoria\\Proyectos\\LIM012-fe-md-links\\MDs\\').length).toBe(DirectoryFiles.length);
    });

})


