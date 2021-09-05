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

}