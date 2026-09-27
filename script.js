function viewResult() {

    const name =
        document.getElementById("name").value.trim();

    const regno =
        document.getElementById("regno").value.trim();

    const errorDiv =
        document.getElementById("errorMessage");

    errorDiv.innerHTML = "";

    // Student Name Validation
    if (name === "") {
        errorDiv.innerHTML =
            "Student Name is required";
        return;
    }

    // Register Number Validation
    if (regno === "") {
        errorDiv.innerHTML =
            "Register Number is required";
        return;
    }

    localStorage.setItem("studentName", name);
    localStorage.setItem("regno", regno);

    window.location.href = "result.html";
}

// Show Student Not Found message
window.onload = function () {

    const error =
        localStorage.getItem("errorMessage");

    if (error) {

        document.getElementById("errorMessage")
            .innerHTML = error;

        localStorage.removeItem("errorMessage");
    }
};