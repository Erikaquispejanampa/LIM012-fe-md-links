const fs = require('fs');

function typeFile(inputUrl){

    let type = '';
  
    if (fs.statSync(inputUrl).isFile())
    {
      type = 'file';
    }
    else{
      type = 'directory';
    }
    return type;
}

function getFileDirectory(inputUrl){
    let files = fs.readdirSync(inputUrl);
    let pathFiles = [];
    for(let file of files ){
      pathFiles.push(`${inputUrl}\\${file}`)
    }
  
    return pathFiles;

}

function getLinksFile(inputUrl){

}

const functionsFile = {
    typeFile,
    getFileDirectory,
    getLinksFile
  };

  module.exports = functionsFile;