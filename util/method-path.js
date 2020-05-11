
const path = require('path');
const fs = require('fs');

function isAbsolute(inputUrl){
    return path.isAbsolute(inputUrl);
}

function changeToAbsolute(inputUrl){
  return path.resolve(inputUrl);
}

function typePath(inputUrl){

  return new Promise((resolve, reject) => {
    fs.stat(inputUrl, (error, stats) => {

        if (error)
          return reject(error.message);

        if (stats.isFile()) {
            return resolve('file');
        }
        else{
            return resolve('directory');
        }
    });
  });
}


const functionsPath = {
    isAbsolute,
    changeToAbsolute,
    typePath
  };



module.exports = functionsPath;