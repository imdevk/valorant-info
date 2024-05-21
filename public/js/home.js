document.addEventListener('mousemove', function (e) {
    // console.log("abc");
    const background = document.getElementById('background');
    const halfWidth = window.innerWidth / 2;
    const halfHeight = window.innerHeight / 2;
    const maxSkew = 0.5;

    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const skewX = ((mouseX - halfWidth) / halfWidth) * maxSkew;
    const skewY = ((mouseY - halfHeight) / halfHeight) * maxSkew;

    background.style.transform = `skew(${skewY}deg, ${-skewX}deg)`;
});

document.addEventListener("DOMContentLoaded", function () {
    hideLoadingScreen();

    const cards = document.querySelectorAll('.bundle-card, .map-card');
    let activeCard = null;

    cards.forEach(card => {
        card.addEventListener('click', function () {
            if (activeCard && activeCard !== card) {
                activeCard.classList.remove('clicked');
                activeCard.querySelector('.bundle-image, .splash-image').remove();
            }

            if (!card.classList.contains('clicked')) {
                const imgSrc = card.getAttribute('data-image');
                const imgElement = document.createElement('img');
                imgElement.src = imgSrc;
                imgElement.alt = card.querySelector('.bundle-name, .map-title').textContent;
                imgElement.classList.add(card.classList.contains('bundle-card') ? 'bundle-image' : 'splash-image', 'absolute', 'inset-0', 'w-full', 'h-full', 'object-cover');

                card.appendChild(imgElement);
                card.classList.add('clicked');
                activeCard = card;
            }
        });

        card.addEventListener('mouseleave', function () {
            if (card.classList.contains('clicked')) {
                card.classList.remove('clicked');
                card.querySelector('.bundle-image, .splash-image').remove();
                activeCard = null;
            }
        });
    });
});

function hideLoadingScreen() {
    var loadingOverlay = document.getElementById("loading-screen");
    if (loadingOverlay) {
        loadingOverlay.style.display = "none";
    }
}
