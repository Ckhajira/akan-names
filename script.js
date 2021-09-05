function getName() {
    let year = document.getElementById("year-entry").value;
    let month = Number(document.getElementById("month-entry").value);
    let day = Number(document.getElementById("day-entry").value);

    let genders = document.getElementsByName("gender");
    let maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Kwaku", "Yaw", "Kofi", "Kwame"];
    let femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

    function findGender() {
        let gender;
        for (gender in genders) {
            if (gender.checked) {
                return gender.value;
            }
        }
    }
    let extractedGender = findGender();

    function validMonth() {
        if (month <= 0 || month > 12) {
            return false;
        } else
            return true;
    }

    let monthChecker = validMonth();

    let dayOfWeekNumber = Math.floor((((Number(year.slice(0, 2)) / 4) - 2 * Number(year.slice(0, 2)) - 1) +
        ((5 * Number(year.slice(2, 4)) / 4)) + ((26 * (month + 1) / 10)) + day) % 7);


    if (extractedGender == "male" && monthChecker) {
        switch (dayofWeekNumber) {
            case 0:
                document.getElementById('output-results').textContent("You were born on Sunday. Your Akan name is" + maleNames[0]);
                return false;
                break;

            case 1:
                document.getElementById('output-results').textContent("You were born on Sunday. Your Akan name is" + maleNames[0]);
                return false;
                break;

            case 2:
                document.getElementById('output-results').textContent("You were born on Monday. Your Akan name is" + maleNames[1]);
                return false;
                break;

            case 3:
                document.getElementById('output-results').textContent("You were born on Tuesday. Your Akan name is" + maleNames[2]);
                return false;
                break;

            case 4:
                document.getElementById('output-results').textContent("You were born on Wednesday. Your Akan name is" + maleNames[3]);
                return false;
                break;

            case 5:
                document.getElementById('output-results').textContent("You were born on Thursday. Your Akan name is" + maleNames[4]);
                return false;
                break;

            case 6:
                document.getElementById('output-results').textContent("You were born on Friday. Your Akan name is" + maleNames[5]);
                return false;
                break;

            case 7:
                document.getElementById('output-results').textContent("You were born on Saturday. Your Akan name is" + maleNames[6]);
                return false;
                break;

        }
    }
}