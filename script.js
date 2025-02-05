function handleYes() {
    document.getElementById('main-container').classList.add('hidden');
    document.getElementById('success-container').classList.remove('hidden');
}

function handleNo() {
    document.getElementById('main-container').classList.add('hidden');
    const errorContainer = document.getElementById('error-container');
    errorContainer.classList.remove('hidden');
    
    // Reset after 10 seconds
    setTimeout(() => {
        window.location.reload();
    }, 10000);
}

function moveButton() {
    const noBtn = document.querySelector('.no-btn');
    noBtn.style.transform = `translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px)`;
    noBtn.style.transition = 'transform 0.3s';
}
