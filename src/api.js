const methodPath = require('../util/method-path.js');

function mdLinks(path, options) {
    
    if(!methodPath.isAbsolute(path))
        return methodPath.changeToAbsolute(path);
           
    
}



// function add(a,b){
//     return a+b
// }


// module.exports=add
module.exports = mdLinks;
