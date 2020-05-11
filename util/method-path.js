const path = require('path');

function isAbsolute(inputUrl){
    return path.isAbsolute(inputUrl);
}

function changeToAbsolute(inputUrl){
  return path.resolve(inputUrl);
}

const functionsPath = {
    isAbsolute,
    changeToAbsolute
  };

module.exports = functionsPath;