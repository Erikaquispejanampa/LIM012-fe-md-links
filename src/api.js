const methodPath = require('../util/method-path.js');
const methodFile = require('../util/method-file.js');
const methodMarked = require('../util/method-marked.js');

function mdLinks(path, options) {
    
    let type = '';
    let list_path = [];
    let list_links = [];

    if(!methodPath.isAbsolute(path)){
        path =  methodPath.changeToAbsolute(path);
    }
    
    type =  methodFile.typeFile(path);


    if(type === 'file'){

        // console.log(methodPath.extName(path));
        if(methodPath.extName(path)=== '.md'){
            let content = methodFile.readFile(path);
            // console.log(content);
            list_links = methodMarked.getLinksFile(path, content);
        }        
    }
    else {  //directorio
        list_path = methodFile.getFileDirectory(path);
        
        for(let travel_path of list_path){

            if(methodPath.extName(travel_path)=== '.md'){
                // console.log(travel_path);
                let content = methodFile.readFile(travel_path);
                let links =  methodMarked.getLinksFile(travel_path, content);
    
                links.forEach(links => {
                    list_links.push(links)
                });
                    
                // console.log(travel_path);
                // console.log(content);
            }
            
        }

    }
    
    console.log(list_links);

    return path;
}



// function add(a,b){
//     return a+b
// }


// module.exports=add
module.exports = mdLinks;
