function redirectToYesPage() {
    window.location.href = "yes-page.html";
}

function moveNoButton() {
    const noButton = document.getElementById("noButton");
    const newPositionTop = Math.random() * window.innerHeight;
    const newPositionLeft = Math.random() * window.innerWidth;

    noButton.style.position = "absolute";
    noButton.style.top = newPositionTop + "px";
    noButton.style.left = newPositionLeft + "px";
}
