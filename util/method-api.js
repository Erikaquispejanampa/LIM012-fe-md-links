
const fetch = require('node-fetch'); //Este nodo tiene que leer una Url
//Voy a crear la función validate, recibe una entrada path(link)                   
function validate( links ){

    let new_list = links.map( (link) =>{
        return fetch(link.href)
            .then( (result) => {
               return {
                    ...link,
                    status: result.status,
                    statusText : result.statusText
                };
                
            })
            .catch( (e) => {
                return {
                    ...link,
                    status: '-1',
                    statusText : e.messages
                };
            });
    });

    return Promise.all(new_list);
}


const methodApi = {
    validate
  };

  module.exports = methodApi;