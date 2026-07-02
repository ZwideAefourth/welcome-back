document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const user = document.getElementById("username").value.trim();
    const pass = document.getElementById("password").value.trim();
    if (
        user === "admin" && pass === "1234") {
        //Redirect to another page//
        window.location.href = "dashboard.html";
    } else {
        alert("invalid username or password!");
    }

});