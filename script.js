document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('yesBtn').addEventListener('click', handleYes);
    document.getElementById('noBtn').addEventListener('click', handleNo);
    document.getElementById('noBtn').addEventListener('mouseover', moveButton);
});

let confettiInterval;

function playSound() {
    const clickSound = document.getElementById('clickSound');
    try {
        clickSound.currentTime = 0;
        clickSound.play();
    } catch (e) {
        console.log('Sound playback error:', e);
    }
}

function handleYes() {
    playSound();
    if (confettiInterval) clearInterval(confettiInterval);
    triggerConfetti();
    confettiInterval = setInterval(triggerConfetti, 2500);
    document.getElementById('main-container').classList.add('hidden');
    document.getElementById('success-container').classList.remove('hidden');
}

function triggerConfetti() {
    const count = 200;
    const defaults = { origin: { y: 0.7 }, spread: 100, startVelocity: 45 };

    function fire(particleRatio, opts) {
        confetti(Object.assign({}, defaults, opts, {
            particleCount: Math.floor(count * particleRatio)
        }));
    }

    fire(0.25, { angle: 60, spread: 55 });
    fire(0.2, { angle: 120, spread: 55 });
    fire(0.35, { angle: 90, spread: 100, startVelocity: 35 });
    fire(0.1, { spread: 120, startVelocity: 45, decay: 0.91 });
    fire(0.1, { angle: 180, spread: 55 });
    fire(0.1, { angle: 0, spread: 55 });
}

function handleNo() {
    playSound();
    const noBtn = document.getElementById('noBtn');
    document.body.classList.add('shake', 'red-blink');
    noBtn.style.transform = `translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px)`;
    
    document.getElementById('main-container').classList.add('hidden');
    document.getElementById('error-container').classList.remove('hidden');

    setTimeout(() => {
        handleReturn();
    }, 3000);
}

function handleReturn() {
    window.location.reload();
}

function moveButton() {
    const noBtn = document.getElementById('noBtn');
    const body = document.body;
    
    noBtn.style.transform = `translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px)`;
    body.classList.add('shake', 'red-blink');
    
    if (window.shakeTimeout) clearTimeout(window.shakeTimeout);
    
    window.shakeTimeout = setTimeout(() => {
        body.classList.remove('shake', 'red-blink');
    }, 500);
}
