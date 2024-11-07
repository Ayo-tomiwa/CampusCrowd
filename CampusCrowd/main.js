let isDragging = false;

function startScroll(event) {
    isDragging = true;
    document.addEventListener("mousemove", scrollProgress);
    document.addEventListener("mouseup", stopScroll);
}

function scrollProgress(event) {
    if (!isDragging) return;

    const progressBar = event.target.closest(".progress-bar");
    const progressFill = progressBar.querySelector(".progress-fill");
    
    const rect = progressBar.getBoundingClientRect();
    const offsetX = event.clientX - rect.left;
    const percentage = Math.min(Math.max(offsetX / rect.width, 0), 1) * 100;

    progressFill.style.width = percentage + "%";
}

function stopScroll() {
    isDragging = false;
    document.removeEventListener("mousemove", scrollProgress);
    document.removeEventListener("mouseup", stopScroll);
}
