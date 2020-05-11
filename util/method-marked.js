const md = require('marked');
const dom = require('jsdom');


function getLinksFile(inputUrl, content){
    const html = md(content);
    const jsDom = new dom.JSDOM(html);
    let elements =  jsDom.window.document.querySelectorAll('a');
    let links = [];

    elements.forEach(element => {
        links.push ({
            text: element.textContent,
            href: element.href,
            file: inputUrl
        });
        // console.log(element.textContent);
        // console.log(element.href);
    });
    
    return links;
}


const methodMarked = {
    getLinksFile
  };

  module.exports = methodMarked;