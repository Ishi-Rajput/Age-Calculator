function calculateAge() {
    const dobInput = document.getElementById('dob');
    const dob = new Date(dobInput.value);
    const today = new Date();
  
    const ageInMilliseconds = today - dob;
    const ageInSeconds = ageInMilliseconds / 1000;
    const ageInMinutes = ageInSeconds / 60;
    const ageInHours = ageInMinutes / 60;
    const ageInDays = ageInHours / 24;
    const ageInMonths = ageInDays / 30.44; // An average month length
    const ageInYears = ageInDays / 365.25; // Allowing for leap years
  
    const years = Math.floor(ageInYears);
    const months = Math.floor(ageInMonths % 12);
    const days = Math.floor(ageInDays % 24);
  
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `Your age is ${years} years, ${months} months, and ${days} days.`;
  }
  