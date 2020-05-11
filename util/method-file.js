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

function readFile(inputUrl){
    return fs.readFileSync(inputUrl, 'utf8');
}

function getFileDirectory(inputUrl){
    let files = fs.readdirSync(inputUrl);
    let pathFiles = [];
    for(let file of files ){
      pathFiles.push(`${inputUrl}\\${file}`)
    }
  
    return pathFiles;

}

const methodFile = {
    typeFile,
    getFileDirectory,
    readFile
  };

  module.exports = methodFile;