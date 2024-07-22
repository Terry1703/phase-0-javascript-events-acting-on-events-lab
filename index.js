// Assuming DODGER is already defined or obtained from the DOM
const DODGER = document.getElementById('dodger');

function moveDodgerLeft() {
    // Step 1: Accessing the DODGER element
    const currentLeft = parseInt(DODGER.style.left) || 0; // Parse current left position or default to 0

    // Step 2: Defining movement logic
    const newLeft = Math.max(0, currentLeft - 10); // Move left by 10 pixels, ensuring it doesn't go less than 0

    // Step 3: Applying the new left position
    DODGER.style.left = `${newLeft}px`;
}

// Example: Triggering moveDodgerLeft() on a key press (e.g., left arrow)
document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowLeft') {
        moveDodgerLeft();
    }
});

function moveDodgerRight() {
    // Step 1: Select the dodger element
    const dodger = document.getElementById('dodger');

    // Step 2: Get the current position of the dodger
    const currentPosition = parseInt(dodger.style.left) || 0;

    // Step 3: Calculate the new position (move 1 pixel to the right)
    const newPosition = currentPosition + 1;

    // Step 4: Update the dodger's position
    dodger.style.left = `${newPosition}px`;

    // Optional: Limit the dodger's movement within the container
    // Example: if (newPosition > containerWidth - dodgerWidth) dodger.style.left = `${containerWidth - dodgerWidth}px`;
}

// Example usage:
// Call moveDodgerRight() when a specific event occurs (e.g., key press)
document.addEventListener('keydown', function(event) {
    if (event.key === "ArrowRight") {
        moveDodgerRight();
    }
});

