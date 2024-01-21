function calculateAge() {
    let day = parseInt(document.getElementById("day").value);
    let month = document.getElementById("month").value; 
    let year = parseInt(document.getElementById("year").value);


    // It checks if the day month and year is valid
    if (isNaN(day) || isNaN(year) || (isNaN(parseInt(month)) && !(month in monthNamesDict))) {
        showError("Please enter valid day, month, and year.");
        return;
    }

    if (isNaN(parseInt(month))) {
        month = monthNamesDict[month.charAt(0).toUpperCase() + month.slice(1)];
    } else {
        month--;
    }

    const birthDate = new Date(year, month, day);
    const currentDate = new Date();
    let years = currentDate.getFullYear() - birthDate.getFullYear();


    // It checks if the date is in the future.
    if (birthDate > currentDate) {
        showError("Invalid date! Date is in the future.");
        return;
    }

    // Same for months and days.
    if (day > daysInMonth(month + 1, year)) {
        showError(`Invalid day for ${monthNames[month]}`);
        return;
    }

    // It checks if the user has more than one hundred years.
    if (years > 100) {
        showError("It seems a little difficult that you have more than one hundred years. :(");
        return;
    }

    let months = currentDate.getMonth() - birthDate.getMonth();
    let days = currentDate.getDate() - birthDate.getDate();

    if (days < 0) {
        months--;
        days += daysInMonth(month + 1, year);
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    document.getElementById("aDay").innerHTML = days;
    document.getElementById("aMonth").innerHTML = months;
    document.getElementById("aYear").innerHTML = years;

    document.getElementById("result").innerHTML = "";
    clearErrors();
}

// Show the error message and add the red border to the user
function showError(message) {
    document.getElementById("result").innerText = message;
    let inputs = document.querySelectorAll(".input");
    inputs.forEach(input => {
        input.classList.add("wrong");
    });
}

// Clear the errors if the values are good
function clearErrors() {
    let inputs = document.querySelectorAll(".input");
    inputs.forEach(input => {
        input.classList.remove("wrong");
    });
}

function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const monthNamesDict = {};
monthNames.forEach((name, index) => {
    monthNamesDict[name] = index;
});