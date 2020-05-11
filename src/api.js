const methodPath = require('../util/method-path.js');
const methodFile = require('../util/method-file.js');

function mdLinks(path, options) {
    
    let type = '';
    let list_path = [];

    if(!methodPath.isAbsolute(path)){
        path =  methodPath.changeToAbsolute(path);
    }
    
    type =  methodFile.typeFile(path);
    console.log('type:', type);

    if(type === 'file'){
        methodFile.getLinksFile(path);
    }
    else {  //directorio
        list_path = methodFile.getFileDirectory(path);
        
        for(let travel_path of list_path){
            methodFile.getLinksFile(travel_path);
            console.log(travel_path);
        }

    }
    
    return path;
}



// function add(a,b){
//     return a+b
// }


// module.exports=add
module.exports = mdLinks;
