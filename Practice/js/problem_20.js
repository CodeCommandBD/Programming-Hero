function checkPasswordStrength(password) {
  let hasUpperCase = false;
  let hasLowerCase = false;
  let hasDigit = false;

  if (password.length >= 8) {
    for (let char of password) {
      if (char >= "A" && char <= "Z") {
        hasUpperCase = true;
      } else if (char >= "a" && char <= "z") {
        hasLowerCase = true;
      } else if (char >= "0" && char <= "9") {
        hasDigit = true;
      }
    }

    if (hasUpperCase  && hasLowerCase  && hasDigit) {
      return "Strong";
    }
  } 

  return "Weak"
}

console.log(checkPasswordStrength("Password123"));
console.log(checkPasswordStrength("short"));

// English:
// Given a password string, return "Strong" if:

// Length is at least 8.
// Contains at least one uppercase letter.
// Contains at least one lowercase letter.
// Contains at least one digit.

// Otherwise, return "Weak".
