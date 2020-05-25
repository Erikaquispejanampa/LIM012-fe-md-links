const api = require("../util/method-api");


describe('Probar si es objeto Funcion', () => {
    it('funcion validate', () => {
      expect(typeof api.validate).toBe('function');
    });
    
  });