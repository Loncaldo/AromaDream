const form = document.getElementById("registerForm");
const profileInfo = document.getElementById("profileInfo");

showProfile();

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const user = {

        username: document.getElementById("username").value,

        email: document.getElementById("email").value,

        password: document.getElementById("password").value
    };

    localStorage.setItem(
        "user",
        JSON.stringify(user)
    );

    showProfile();
});

function showProfile() {

    const user = JSON.parse(
        localStorage.getItem("user")
    );

    if (!user) {
        form.style.display = "block";
        return;
    }

    form.style.display = "none";

    profileInfo.innerHTML = `
        <div class="user-card">
            <h2>${user.username}</h2>
            <p>Email: ${user.email}</p>

            <button id="logoutBtn">
                Удалить профиль
            </button>
        </div>
    `;

    document
        .getElementById("logoutBtn")
        .addEventListener("click", () => {

            localStorage.removeItem("user");
            location.reload();

        });
}