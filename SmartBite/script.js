function validateLogin() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const role = document.getElementById("role").value;
    const error = document.getElementById("error-msg");

    if (username === "" || password === "" || role === "") {
        error.innerText = "All fields are required!";
        return false;
    }

    // Demo credentials
    if (username === "admin" && password === "admin123" && role === "admin") {
        sessionStorage.setItem("smartbite-auth", "true");
        sessionStorage.setItem("smartbite-role", "admin");
        window.location.href = "STAFF.html";
        return false;
    }

    error.innerText = "Invalid username or password!";
    return false;
}

function continueAsCustomer() {
    sessionStorage.removeItem("smartbite-auth");
    sessionStorage.setItem("smartbite-role", "customer");
    window.location.href = "MENU.html";
}
