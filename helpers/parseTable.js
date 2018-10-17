const tabletojson = require("tabletojson");


module.exports = (data)=>{
    return tabletojson.convert(data);
}