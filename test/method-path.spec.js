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


describe('Probar valores', () => {

  it('Validar si extensión de archivo md', () => {
    expect(path.extName('E:\\Laboratoria\\Proyectos\\LIM012-fe-md-links\\MDs\\prueba1.md')).toBe('.md');
  });
    
  it('Validar ruta es absoluta --> true', () => {
    expect(path.isAbsolute('E:\\Laboratoria\\Proyectos\\LIM012-fe-md-links\\MDs\\prueba1.md')).toBe(true);
  });

  it('Validar ruta es absoluta --> false', () => {
    expect(path.isAbsolute('./MDs/prueba1.md')).toBe(false);
  });

  it('Validar cambio de ruta --> relativa a absoluta ', () => {
    expect(path.changeToAbsolute('./MDs/prueba1.md')).toBe('E:\\Laboratoria\\Proyectos\\LIM012-fe-md-links\\MDs\\prueba1.md');
  });

})



  