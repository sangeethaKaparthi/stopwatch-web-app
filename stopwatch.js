let startTime = 0;
let elapsedTime = 0;
let timerInterval;
let running = false;
const display = document.getElementById('display');
const startStopBtn = document.getElementById('startStopBtn');
const resetBtn = document.getElementById('resetBtn');
const lapBtn = document.getElementById('lapBtn');
const laps = document.getElementById('laps');

function formatTime(time) {
    const date = new Date(time);
    return date.toISOString().slice(11, 19);
}

function startStopwatch() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(() => {
        elapsedTime = Date.now() - startTime;
        display.textContent = formatTime(elapsedTime);
    }, 1000);
}

function stopStopwatch() {
    clearInterval(timerInterval);
}

startStopBtn.addEventListener('click', () => {
    if (!running) {
        startStopwatch();
        startStopBtn.textContent = 'Pause';
    } else {
        stopStopwatch();
        startStopBtn.textContent = 'Start';
    }
    running = !running;
});

resetBtn.addEventListener('click', () => {
    stopStopwatch();
    elapsedTime = 0;
    display.textContent = '00:00:00';
    startStopBtn.textContent = 'Start';
    running = false;
    laps.innerHTML = '';
});

lapBtn.addEventListener('click', () => {
    if (running) {
        const lapTime = formatTime(elapsedTime);
        const lapItem = document.createElement('li');
        lapItem.textContent = lapTime;
        laps.appendChild(lapItem);
    }
});
