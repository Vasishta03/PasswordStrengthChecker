const passwordInput = document.getElementById('passwordInput');
const strengthDisplay = document.getElementById('strengthDisplay');

passwordInput.addEventListener('input', () => {
    const password = passwordInput.value;
    let strength = 0;

    // Check password length
    if (password.length >= 8) {
        strength += 2;
    }

    // Check for uppercase letters
    if (password.match(/^[a-z]/) && password.match(/[A-Z]/)) {
        strength += 2;
    }

    // Check for numbers
    if (password.match(/\d/)) {
        strength += 2;
    }

    // Check for special characters
    if (password.match(/[^a-zA-Z0-9]/)) {
        strength += 2;
    }

    // Check for mixed case
    if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) {
        strength += 1;
    }

    // Display the strength rating with color-coded feedback
    if (strength <= 3) {
        strengthDisplay.textContent = `Password Strength: ${strength}/10 (Weak)`;
        strengthDisplay.classList.add('weak');
    } else if (strength <= 6) {
        strengthDisplay.textContent = `Password Strength: ${strength}/10 (Medium)`;
        strengthDisplay.classList.add('medium');
    } else {
        strengthDisplay.textContent = `Password Strength: ${strength}/10 (Strong)`;
        strengthDisplay.classList.add('strong');
    }

    // Remove previous color classes
    strengthDisplay.classList.remove('weak', 'medium', 'strong');
});
