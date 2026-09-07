let $ = document

const openedEye = $.querySelector("#eyeOpen")
const closedEye = $.querySelector("#eyeClose")
const togglePassword = $.querySelector("#toggle-password")
const password = $.querySelector("#password")

// Password
togglePassword.addEventListener("click", () => {
    if (password.type === "password") {
        password.type = "text";
        openedEye.classList.remove("hidden");
        closedEye.classList.add("hidden");
    } else {
        password.type = "password";
        openedEye.classList.add("hidden");
        closedEye.classList.remove("hidden");
    }
})