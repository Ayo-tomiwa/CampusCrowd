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



document.addEventListener("DOMContentLoaded", function(){
    const testimonials = document.querySelectorAll(".testimonial-content");
    const dots = document.querySelectorAll(".pagination-dot")
    let currentIndex = 0;
    const intervalTime = 5000; // 5 seconds

    // Function to update active testimonial and dot
    function updateTestimonial(index){
        testimonials.forEach((testimonial, i) =>{
            testimonial.classList.toggle("active", i == index);
        });
        dots.forEach((dot, i) => {
            dot.classList.toggle("active", i === index);
        });
        currentIndex = index  
    }

      // Auto-cycle testimonials
      function autoCycle(){
        currentIndex = (currentIndex + 1) % testimonials.length;
        updateTestimonial(currentIndex);
      }
      let cycleInterval = setInterval(autoCycle, intervalTime);
    
      // Click event for pagination dots
      dots.forEach((dot) =>{
        dot.addEventListener("click", (event) =>{
            clearInterval(cycleInterval); // Stop auto-cycling on manual click
            const index = parseInt(event.target.getAttribute("data-index"));
            updateTestimonial(index);
            cycleInterval  = setInterval(autoCycle, intervalTime); // Restart auto-cycling
        });
      });
       
});