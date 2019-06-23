const countdown = document.querySelector('.countdown');

const launchdate = new Date('July 1, 2019 13:00:00').getTime();

console.log(launchdate);

const interval = setInterval(() => {
    // get today date and time (mms)
    const now = new Date().getTime();

    // distanace from now to the launch
    const distance = launchdate - now;

    // time calculation
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((distance % (1000 * 60 * 60 )) / (1000 * 60));
    const secs = Math.floor((distance % (1000 * 60 )) / 1000 );

    // display result
    countdown.innerHTML = `
        <div>${days} <span>Days</span></div>
        <div>${hours} <span>Hours</span></div>
        <div>${mins} <span>Mins</span></div>
        <div>${secs} <span>Secs</span></div>
    `;

    if (distance < 0) {
        clearInterval(interval);
        countdown.style.color = '#16d6e2';
        countdown.innerHTML = "Launched"
    }
    
},2000)