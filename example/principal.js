/****************************************************************/
// UTILIZANDO EXPORTS E IMPORTS
//import { sumar,restar,multiplicar} from './export_import.js';

// sumar(1,2);

//import * as metodos from './export_import.js';
// metodos.sumar(1,2);

/****************************************************************/


/****************************************************************/
// UTILIZANDO REQUIRE

let metodos = require('./exports_require.js');
metodos.sumar(1,2);