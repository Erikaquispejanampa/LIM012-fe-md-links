const path = require("../util/method-path");


describe('Probar si es objeto Funcion', () => {
    it('funcion extName', () => {
      expect(typeof path.extName).toBe('function');
    });

    it('funcion isAbsolute', () => {
        expect(typeof path.isAbsolute).toBe('function');
    });

    it('funcion changeToAbsolute', () => {
        expect(typeof path.changeToAbsolute).toBe('function');
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



  