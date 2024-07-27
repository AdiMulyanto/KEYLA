function showMessage() {
    const message = document.getElementById('message');
    message.classList.toggle('hidden');
    if (!message.classList.contains('hidden')) {
        message.style.animation = 'fadeIn 1s ease-in-out';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const background = document.querySelector('.background');
    for (let i = 0; i < 50; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.animationDuration = `${Math.random() * 5 + 3}s`;
        heart.style.animationDelay = `${Math.random() * 5}s`; // Adjust the delay for staggered animation start
        background.appendChild(heart);
    }

    const noButton = document.getElementById('noButton');
    noButton.addEventListener('mouseover', moveButton);

    function moveButton() {
        const container = document.querySelector('.container');
        const containerRect = container.getBoundingClientRect();
        const buttonRect = noButton.getBoundingClientRect();

        let newTop, newLeft;

        do {
            newTop = Math.random() * (containerRect.height - buttonRect.height);
            newLeft = Math.random() * (containerRect.width - buttonRect.width);
        } while (newTop < 0 || newLeft < 0);

        noButton.style.position = 'absolute';
        noButton.style.top = `${newTop}px`;
        noButton.style.left = `${newLeft}px`;
    }
});
