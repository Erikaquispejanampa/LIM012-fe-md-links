const file = require("../util/method-file");


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


// describe('Probar valores', () => {

//     it('debe retornar validando validate--> ruta', () => {
//         expect(validate.validate('ruta')).toBe('validando validate--> ruta');
//     });
    
//     it('debe retornar validando stats --> ruta', () => {
//         expect(stats.stats('ruta')).toBe('validando stats --> ruta');
//     });
    
//   })



  