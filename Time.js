function updateClock() {
    const now = new Date();

    const timeStr = now.toLocaleTimeString('ru-RU', {
        hour12: false
    });

    const dateStr = now.toLocaleDateString('ru-RU');

    const clockDiv = document.getElementById('clock');

    if (clockDiv) {
        clockDiv.innerHTML = `${dateStr} | ${timeStr}`;
    }
}

updateClock();
setInterval(updateClock, 1000);

let visits = localStorage.getItem("siteVisits");

visits = visits ? Number(visits) + 1 : 1;

localStorage.setItem("siteVisits", visits);

const counterDiv = document.getElementById("counter");

if (counterDiv) {
    counterDiv.innerHTML = `Посещений: ${visits}`;
}