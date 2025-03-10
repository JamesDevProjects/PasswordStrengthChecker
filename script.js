// Password Strength Checker with Data Breach Detection

// List of common weak passwords (small sample)
const commonPasswords = [
    "123456", "password", "12345678", "qwerty", "abc123", "111111", "letmein"
];

// Function to check if the password has been compromised in a data breach
async function isPasswordBreached(password) {
    const hash = await sha1(password); // Hash the password
    const prefix = hash.substring(0, 5); // First 5 characters for the API request
    const suffix = hash.substring(5).toUpperCase(); // Remaining hash for local check

    // Query Have I Been Pwned API
    const response = await fetch(`https://api.pwnedpasswords.com/range/${prefix}`);
    const data = await response.text();

    // Check if the suffix appears in the API response
    return data.includes(suffix);
}

// Function to check password strength
async function checkPasswordStrength(password) {
    if (!password) {
        return "Please enter a password";
    }

    // Check if password is in the common password list
    if (commonPasswords.includes(password.toLowerCase())) {
        return "Weak (Common password)";
    }

    // Check if the password has been breached
    if (await isPasswordBreached(password)) {
        return "Weak (Compromised in data breach)";
    }

    let strengthPoints = 0;

    // Check length
    if (password.length >= 8) strengthPoints++;
    if (password.length >= 12) strengthPoints++;

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

// Function to generate SHA-1 hash of a password
async function sha1(str) {
    const buffer = new TextEncoder().encode(str);
    const hashBuffer = await crypto.subtle.digest("SHA-1", buffer);
    return Array.from(new Uint8Array(hashBuffer)).map(b => b.toString(16).padStart(2, "0")).join("");
}

// Example usage
(async () => {
    console.log(await checkPasswordStrength("password")); // Weak (Common password)
    console.log(await checkPasswordStrength("Pa$$w0rd123")); // Check if compromised
    console.log(await checkPasswordStrength("123456")); // Weak (Common password)
})();
