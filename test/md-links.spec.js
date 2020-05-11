const validate = require("../src/validate");
const stats = require("../src/stats");


describe('Probar valores', () => {

    it('debe retornar validando validate--> ruta', () => {
        expect(validate.validate('ruta')).toBe('validando validate--> ruta');
    });
    
    it('debe retornar validando stats --> ruta', () => {
        expect(stats.stats('ruta')).toBe('validando stats --> ruta');
    });
    
  })


describe('Testear Objeto Funcion', () => {
    it('funcion stats', () => {
      expect(typeof stats.stats).toBe('function');
    });
  
    it('funcion validate', () => {
      expect(typeof validate.validate).toBe('function');
    });
  
  });
  