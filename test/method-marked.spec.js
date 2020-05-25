const marked = require("../util/method-marked");


describe('Probar si es objeto Funcion', () => {
    it('funcion getLinksFile', () => {
      expect(typeof marked.getLinksFile).toBe('function');
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



  