document.getElementById('agreeTerms').addEventListener('change', function () {
    const continueButton = document.getElementById('continueButton');
    continueButton.disabled = !this.checked;
});

// Handle "Continue" Button Click
function proceedToApp() {
    const agreeCheckbox = document.getElementById('agreeTerms');
    const termsError = document.getElementById('termsError');

    // Check if user agrees to the terms
    if (agreeCheckbox.checked) {
        // Redirect to the main app page (replace 'dashboard.html' with the actual page)
        window.location.href = 'dashboard.html'; // Replace with your actual app page
    } else {
        termsError.textContent = 'You must agree to the terms and conditions to proceed.';
    }
}