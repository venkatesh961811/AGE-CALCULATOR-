function calculateAge() {
    let dobInput = document.getElementById("dob").value;
    if (dobInput === "") {
        document.getElementById("result").innerText = "Please enter your date of birth.";
        return;
    }

    let dob = new Date(dobInput);
    let today = new Date();

    let age = today.getFullYear() - dob.getFullYear();
    let monthDiff = today.getMonth() - dob.getMonth();
    let dayDiff = today.getDate() - dob.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }

    document.getElementById("result").innerText = `Your age is ${age} years old.`;
}