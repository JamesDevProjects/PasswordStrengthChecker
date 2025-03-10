// Password Strength Checker

// List of common weak passwords (this is just a small sample for demonstration)
const commonPasswords = [
    "123456", "password", "12345678", "qwerty", "abc123", "111111", "letmein"
];

// Function to check password strength
function checkPasswordStrength(password) {
    if (!password) {
        return "Please enter a password";
    }

    // Check if password is in the common passwords list
    if (commonPasswords.includes(password.toLowerCase())) {
        return "Weak (Common password)";
    }

    let strengthPoints = 0;

    // Check length - Short passwords are weak
    if (password.length >= 8) strengthPoints++;
    if (password.length >= 12) strengthPoints++; // Extra point for stronger length

    // Check for uppercase letters
    if (/[A-Z]/.test(password)) strengthPoints++;

    // Check for lowercase letters
    if (/[a-z]/.test(password)) strengthPoints++;

    // Check for numbers
    if (/[0-9]/.test(password)) strengthPoints++;

    // Check for special characters
    if (/[\W_]/.test(password)) strengthPoints++;

    // Determine strength based on points
    if (strengthPoints <= 2) {
        return "Weak";
    } else if (strengthPoints <= 4) {
        return "Medium";
    } else {
        return "Strong";
    }
}

// Example usage
console.log(checkPasswordStrength("password"));  // Weak (Common password)
console.log(checkPasswordStrength("Pa$$w0rd123"));  // Strong
console.log(checkPasswordStrength("123456"));  // Weak (Common password)
console.log(checkPasswordStrength("Abc123"));  // Weak
console.log(checkPasswordStrength("SecurePass1!"));  // Strong
