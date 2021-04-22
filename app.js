setInterval(() => {
    
    let d = new Date();
    hTime = d.getHours();
    mTime = d.getMinutes();
    sTime = d.getSeconds();

    hrotation = 30*hTime + mTime/2;
    mrotation = 6*mTime;
    srotation = 6*sTime;

    hour.style.transform = `rotate(${hrotation}deg)`
    min.style.transform =  `rotate(${mrotation}deg)`
    sec.style.transform =  `rotate(${srotation}deg)`
}, 1000);