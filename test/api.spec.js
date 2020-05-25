
const api = require("../src/api");

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