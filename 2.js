const isPassword = (pass)=> {
    let minCharacter = 8;
    let spesial = /[!@#$%^&*(),.?":{}|<>]/g;
    let upper = /[A-Z]/;
    let lower = /[a-z]/;
    let number = /[0-9]/;

    if(pass.match(spesial) && pass.match(upper) && pass.match(lower) && pass.length >= 8 && pass.match(number)){
        console.log(true);
    }else{
        console.log(false);
    }
    
}
isPassword("1qaz2wsX!");
isPassword("1qaz2wsx!");