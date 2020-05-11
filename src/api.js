const FunctionsPath = require('../util/path.js');

function mdLinks(path, options) {
    
    return FunctionsPath.isAbsolute(path);

}



// function add(a,b){
//     return a+b
// }


// module.exports=add
module.exports = mdLinks;
