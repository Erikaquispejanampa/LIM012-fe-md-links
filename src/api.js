//FARES ESTUVO AQUÍ
const methodPath = require('../util/method-path.js');
const methodFile = require('../util/method-file.js');
const methodMarked = require('../util/method-marked.js');
const methodApi = require('../util/method-api.js');

function mdLinks(path, options) {
    
    return new Promise((resolve, reject) => {

        let type = '';
        let list_path = [];
        let list_links = [];

        if(!methodPath.isAbsolute(path)){
            path =  methodPath.changeToAbsolute(path);
        }
      
        try{
            type =  methodFile.typeFile(path);
        }
        catch(e){
            reject(e.message);
        }
        
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
        
        // console.log(list_links);

        //Verificar si es "True" el parametro opcionts, si es validar el estado de cada link
        if(options.validate){
            
            methodApi.validate(list_links)
                .then( status_link => {
                    //se resuelve devolviendo el estado de cada link
                    resolve(status_link);
                })
                .catch( (e) => reject(e) );
            
        }
        else{ // Si el validate es falso, devolver los links obtenidos
            resolve(list_links);
        }

    })
}

function stats (links){
    let total = 0;
    let unique = 0;

    for (const link of links) {
        total++;
        if(link.status === 200)
            unique++;
    }

    return {
        Total: total,
        Unique: unique
    };
}

function statsValidate(links){
    let total = 0;
    let unique = 0;
    let broken = 0;

    for (const link of links) {
        total++;
        if(link.status === 200)
            unique++;
        else
            broken++;
    }

    return {
        Total: total,
        Unique: unique,
        Broken: broken
    };
}

// function add(a,b){
//     return a+b
// }

const api = {
    mdLinks,
    statsValidate,
    stats
  };


// module.exports=add
module.exports = api;
