
const path = require('path');

function isAbsolute(inputUrl){
    return path.isAbsolute(inputUrl);
}

function changeToAbsolute(inputUrl){
  return path.resolve(inputUrl);
}

function extName(inputUrl){
  return path.extname(inputUrl);
}

const functionsPath = {
    isAbsolute,
    changeToAbsolute,
    extName
  };



module.exports = functionsPath;