const methodPath = require('../util/method-path.js');

function mdLinks(path, options) {
    
    if(!methodPath.isAbsolute(path))
        path =  methodPath.changeToAbsolute(path);

    methodPath.typePath(path).then( (type) =>{
        console.log('type: ' + type);
        
    });
    
    return path;
}



// function add(a,b){
//     return a+b
// }


// module.exports=add
module.exports = mdLinks;
