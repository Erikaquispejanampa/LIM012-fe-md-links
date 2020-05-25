
let api = require('./api.js');

let path = process.argv[2];
let option1 = process.argv[3];
let option2 = process.argv[4];

// console.log(a);
// console.log(b);
// console.log(c);
//  console.log(option1);
//  console.log(option2);

if( option1 === undefined ||  option1 === '--validate' || option1 === '--stats' || option2 === '--stats' || option2 === '--validate'){
    
    if(option1 === undefined){
        
        api.mdLinks(path, {validate:false})
        .then( (resp) =>{
            console.log(resp);
        })
        .catch( e => console.log(e) );
        return;
    }

    api.mdLinks(path, { validate: true })
        .then( (resp) =>{

            if (option1 === '--validate' && option2 === undefined){
                console.log('1');
                console.log(resp);
            }else if (option1 === '--stats' && option2 === undefined){
                console.log('2');
                console.log( api.stats(resp));
            }
            else{
                console.log('3');
                console.log( api.statsValidate(resp));
            }


        })
        .catch( e => console.log(e) );



    // if (option.indexOf('--validate') !== -1){
    //     mdLinks(path, {validate:true}).then( (resp) =>{
    //         console.log(resp);
    //     })
    //     .catch( e => console.log(e) );
    // }

    // if (option.indexOf('--stats') !== -1){
    //     console.log('stats');
    // }
    
}
else{
    console.log('Ingrese una opción válida');
}


