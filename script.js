document.addEventListener("DOMContentLoaded", () => {
  const profileLink = document.getElementById("profile-link");
  const profileContainer = document.getElementById("profile-container");
  const closeProfile = document.getElementById("close-profile");
  const editButton = document.getElementById("edit-button");
  const formInputs = document.querySelectorAll("#profile-form input");
  const logoutButton = document.querySelector(".logout");

  profileLink.addEventListener("click", () => {
    profileContainer.classList.add("visible");
  });

  closeProfile.addEventListener("click", () => {
    profileContainer.classList.remove("visible");
  });

  editButton.addEventListener("click", () => {
    if (editButton.textContent === "Edit Profile") {
      formInputs.forEach((input) => (input.disabled = false));
      editButton.textContent = "Save Changes";
    } else {
      formInputs.forEach((input) => (input.disabled = true));
      editButton.textContent = "Edit Profile";
      alert("Profile updated!");
    }
  });

  logoutButton.addEventListener("click", () => {
    alert("Logged out!");
  });
});
