let confettiInterval;

function playSound() {
    const clickSound = document.getElementById('clickSound');
    clickSound.currentTime = 0;
    clickSound.play();
}

function handleYes() {
    // Clear existing interval if any
    if (confettiInterval) clearInterval(confettiInterval);
    
    // Initial confetti
    triggerConfetti();
    
    // Repeat confetti every 2.5 seconds
    confettiInterval = setInterval(triggerConfetti, 2500);
    
    // Show success screen
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
    
    // Trigger effects
    document.body.classList.add('shake', 'red-blink');
    const noBtn = document.querySelector('.no-btn');
    noBtn.style.transform = `translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px)`;

    // Show error screen
    document.getElementById('main-container').classList.add('hidden');
    const errorContainer = document.getElementById('error-container');
    errorContainer.classList.remove('hidden');

    // Set timeout for auto-return
    setTimeout(() => {
        handleReturn();
    }, 3000);
}

function handleReturn() {
    window.location.reload();
}

function moveButton() {
    const noBtn = document.querySelector('.no-btn');
    noBtn.style.transform = `translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px)`;
    document.body.classList.add('shake', 'red-blink');
    setTimeout(() => {
        document.body.classList.remove('shake', 'red-blink');
    }, 500);
}
