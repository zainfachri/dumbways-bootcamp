let rafaelaSpeed = 10*60*60; //Rafaela sudah berjalan 1 jam sebelum Nana
let nanaSpeed = 0;
let detik = 0;
let jam = 15; //Start dimulai pukul 15:00

    do{
        if(rafaelaSpeed != nanaSpeed){
            rafaelaSpeed += 10;
            nanaSpeed += 13;
            detik++;
        }else{
            break;
        }
        console.log(`${detik} Detik, Rafaela = ${rafaelaSpeed}m , Nana = ${nanaSpeed}m`);
    }
    while(rafaelaSpeed != nanaSpeed)

    const timeConvert = (menit)=> {
        let num = menit/60;
        let hours = (num / 60);
        let rhours = Math.floor(hours);
        let minutes = (hours - rhours) * 60;
        let rminutes = Math.round(minutes);
        console.log(`\nPada pukul ${rhours+jam}:${rminutes} Mereka bertemu.`);
        }
     timeConvert(detik);