const path = require('path');


function isAbsolute(ruta){
    return path.isAbsolute(ruta);
}


const FunctionsPath = {
    isAbsolute
  };

module.exports = FunctionsPath;