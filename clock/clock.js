setInterval(()=>{
    // console.log("hello shashank")
    let d=new Date();
    h=d.getHours();
    m=d.getMinutes();
    s=d.getSeconds();

    Hrot=30*h+m/2;
    Mrot=6*m;
    Srot=6*s;

    hour.style.transform=`rotate(${Hrot}deg)`
    minute.style.transform=`rotate(${Mrot}deg)`
    second.style.transform=`rotate(${Srot}deg)`
},1000);
