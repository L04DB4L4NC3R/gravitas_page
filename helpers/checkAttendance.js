module.exports = (big,small)=>{

    let inn = 0,arr=[];

    for(let i of small){

        inn = big.indexOf(i.toUpperCase());

        if(inn > -1)
            arr.push(inn);
    }
    return arr;

}
