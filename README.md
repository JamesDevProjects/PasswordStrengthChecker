Password Strength Checker
This project is a simple password strength checker that evaluates passwords based on length, character diversity, and security best practices. It also integrates with the Have I Been Pwned API to detect whether a password has been compromised in a data breach.

How It Works
Strength Evaluation: Checks for uppercase and lowercase letters, numbers, special characters, and length.
Data Breach Detection: Uses SHA-1 hashing and the Have I Been Pwned API to verify if a password has been exposed in past breaches.
Real-Time Feedback: Displays password strength and warns users if their password has been found in a data breach.
How to Use
Open index.html in a browser.
Enter a password in the input field.
Click the "Check Strength" button to see the evaluation.
If the password has been compromised, a warning will appear.
Alternatively, you can run script.js in the browser console to test passwords manually.

Technologies Used
JavaScript (password evaluation and breach detection)
SHA-1 hashing (secure API querying)
HTML & CSS (simple UI)
License
This project is licensed under the MIT License. You are free to use, modify, and distribute it.
