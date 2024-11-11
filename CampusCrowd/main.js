let isDragging = false;
let progressBar;
let progressFill;

function startScroll(event) {
    isDragging = true;
    progressBar = event.target.closest(".progress-bar");
    progressFill = progressBar.querySelector(".progress-fill");

    // Initial update on mousedown to set the progress at the click point
    updateProgress(event);

    document.addEventListener("mousemove", scrollProgress);
    document.addEventListener("mouseup", stopScroll);
}

function scrollProgress(event) {
    if (isDragging) {
        updateProgress(event);
    }
}

function stopScroll() {
    isDragging = false;
    document.removeEventListener("mousemove", scrollProgress);
    document.removeEventListener("mouseup", stopScroll);
}

function updateProgress(event) {
    // Calculate the fill level as a percentage based on cursor position
    const rect = progressBar.getBoundingClientRect();
    const offsetX = event.pageX - rect.left; // Use pageX for more consistent results
    let percentage = offsetX / rect.width;

    // Constrain percentage to 0-1 range
    percentage = Math.max(0, Math.min(percentage, 1));

    // Set the width of the progress fill
    progressFill.style.width = percentage * 300 + "%"; // Adjust for 300% width in CSS
}

// Attach the mousedown event to start the scroll on click
document.querySelectorAll(".progress-bar").forEach(bar => {
    bar.addEventListener("mousedown", startScroll);
});