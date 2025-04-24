
const img = document.getElementById("user-img");
const nameEl = document.getElementById("user-name");
const emailEl = document.getElementById("user-email");
const locationEl = document.getElementById("user-location");
const button = document.getElementById("generate-btn");

async function getRandomUser() {
  try {
    const response = await fetch("https://randomuser.me/api/");
    const data = await response.json();
    const user = data.results[0];

    img.src = user.picture.large;
    nameEl.textContent = `${user.name.first} ${user.name.last}`;
    emailEl.textContent = `📧 ${user.email}`;
    locationEl.textContent = `📍 ${user.location.city}, ${user.location.country}`;
  } catch (error) {
    console.error("Error fetching user:", error);
  }
}

button.addEventListener("click", getRandomUser);

// Load one user on page load
getRandomUser();
