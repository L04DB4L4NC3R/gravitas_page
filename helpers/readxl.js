var fs = require('fs'); 
var parse = require('csv-parse');

module.exports = (filename)=>{
    return new Promise((resolve,reject)=>{
                var csvData=[];
            fs.createReadStream(filename)
            .pipe(parse({delimiter: ':'}))
            .on('data', (csvrow)=>{
                //console.log(csvrow[0].split(",")[1]);
                //do something with csvrow
                csvData.push(csvrow[0].split(",")[1]);        
            })
            .on('end',()=> {
            //do something wiht csvData
            //console.log(csvData[0]);
            resolve(csvData);
        }).on("error",(err)=>reject(err))
    })
}