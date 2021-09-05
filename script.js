function getName() {
    let year = document.getElementById("year-entry").value;
    let month = Number(document.getElementById("month-entry").value);
    let day = Number(document.getElementById("day-entry").value);

    let genders = document.getElementsByName("gender");

    let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Kwaku", "Yaw", "Kofi", "Kwame"];
    let femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

    function findGender() {

        for (let gender of genders) {
            if (gender.checked) {
                return gender.value;
            }
        }
    }
    let extractedGender = findGender();

    console.log(extractedGender);

    function validMonth() {
        if (month < 1 || month > 12) {
            return false;
        } else {
            return true;
        }
    }

    function validDay() {
        if (day < 1 || day > 31) {
            return false;
        } else {
            return true;
        }
    }



    let monthChecker = validMonth();
    let dayChecker = validDay();


    let dayOfWeekNumber = Math.floor((((Number(year.slice(0, 2)) / 4) - 2 * Number(year.slice(0, 2)) - 1) +
        ((5 * Number(year.slice(2, 4)) / 4)) + ((26 * (month + 1) / 10)) + day) % 7);

    let index;
    if (dayOfWeekNumber == 0) {
        index = 6;
    } else {
        index = dayOfWeekNumber - 1;
    }

    if (extractedGender == "male" && monthChecker && dayChecker) {
        document.getElementById('output-results').textContent = "You were born on a " + daysOfWeek[index] + " , your Akan name is " + maleNames[index];
        return false;
    } else if (extractedGender == "female" && monthChecker) {
        document.getElementById('output-results').textContent = "You were born on a " + daysOfWeek[index] + ", your Akan name is" + femaleNames[index];
        return false;
    } else {
        alert("Please enter valid month and date");
    }



}