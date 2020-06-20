const drawLine = (str)=> {
    let tab = "\t";
    for(let i = 0; i < str.length; i++){
        if(i > 0){
            console.log(tab + str[i]);
            tab += "\t";
        }else{
            console.log(str[i]);
        }
    }
}
drawLine("DUMBWAYS");