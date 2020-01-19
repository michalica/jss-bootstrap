const fs = require('fs');
var cssToJSS = require('./cssToJSS');
const css = require('css')


function generate(source, target) {
    fs.readFile(source, function(err, data)
    {
        if(err)
            console.log(err)
        else
        {
            // console.log(data.toString('utf-8'))
            const jssStyles = cssToJSS({ code: data.toString('utf-8') });

            //     console.log(  css.parse(` .ml-xl-auto,
            // .mx-xl-auto {
            //   margin-left: auto !important;
            // }`).stylesheet.rules)


            fs.writeFile(target, JSON.stringify(jssStyles), function(erro) {
                if(erro) {
                    console.log("error : "+erro);
                }
                else {
                    console.log("success");
                }
            });
        }
    });

}

generate(process.env.REACT_APP_SOURCE_GRID_FILE, process.env.REACT_APP_TARGET_GRID_FILE);
generate(process.env.REACT_APP_SOURCE_CORE_FILE, process.env.REACT_APP_TARGET_CORE_FILE);
