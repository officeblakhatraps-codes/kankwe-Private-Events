/* =========================================================
   KANKWE PRIVATE EVENTS
   JavaScript
   The code is kept simple so the CTO can understand and edit it.
   ========================================================= */

// ---------- 1. MOBILE MENU ----------
const menuButton = document.getElementById("menuButton");
const mainNav = document.getElementById("mainNav");

menuButton.addEventListener("click", () => {
  mainNav.classList.toggle("open");
});

document.querySelectorAll(".main-nav a").forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
  });
});

// ---------- 2. WHATSAPP NUMBER ----------
const whatsappNumber = "27633502712";

// ---------- 3. WELLNESS PACKAGE DATA ----------
// Edit package names, prices and features here.
const wellnessPackages = [
  {
    number: "Package 1",
    title: "Wellness Ritual",
    price: "R950",
    features: [
      "Welcome drink",
      "60-minute full-body Swedish massage with hot stones",
      "Foot spa therapy",
      "Spa attire",
      "Table setup",
      "Light lunch"
    ]
  },
  {
    number: "Package 2",
    title: "Wellness Ritual",
    price: "R700",
    features: [
      "Welcome drink",
      "Full-body Swedish massage with hot stones",
      "Spa attire",
      "Table setup",
      "Light lunch"
    ]
  },
  {
    number: "Package 3",
    title: "Wellness Ritual",
    price: "R500",
    features: [
      "Welcome drink",
      "Foot spa therapy",
      "Spa attire",
      "Table setup",
      "Light lunch"
    ]
  },
  {
    number: "Package 4",
    title: "Wellness Ritual",
    price: "R500",
    features: [
      "Welcome drink",
      "Half-body Swedish massage",
      "Spa attire",
      "Table setup",
      "Light lunch"
    ]
  },
  {
    number: "Package 5",
    title: "Garden Picnic",
    price: "R2,300 for 2 people",
    features: [
      "Garden picnic setup",
      "Welcome drink",
      "Half-body massage",
      "Platter for 2",
      "Cheese board"
    ]
  },
  {
    number: "Package 6",
    title: "Birthday Escape",
    price: "R2,400 for 2 people",
    features: [
      "Bedroom birthday setup",
      "Welcome drink",
      "Bedroom setup",
      "Jacuzzi",
      "Platter for 2",
      "Photography service"
    ]
  },
  {
    number: "Package 7",
    title: "Birthday Picnic",
    price: "R2,300 for 2 people",
    features: [
      "Birthday picnic setup",
      "Welcome drink",
      "Half-body massage",
      "Picnic setup",
      "Platter for 2",
      "Cheese board"
    ]
  },
  {
    number: "Package 8",
    title: "Garden Celebration",
    price: "R3,100 for 2 people",
    features: [
      "Garden birthday picnic setup",
      "Welcome drink",
      "60-minute full-body Swedish massage with hot stones",
      "Foot massage",
      "Picnic setup",
      "Platter for 2",
      "Cheese board"
    ]
  }
];

// ---------- 4. BUILD WELLNESS CARDS ----------
const wellnessGrid = document.getElementById("wellnessGrid");

wellnessPackages.forEach((item, index) => {
  const card = document.createElement("article");
  card.className = "wellness-card";

  card.innerHTML = `
    <div class="number">${item.number}</div>
    <h3>${item.title}</h3>
    <div class="price">${item.price}</div>
    ${index >= 4 ? "<p class=\"number\">For two</p>" : ""}
    <ul>
      ${item.features.map((feature) => `<li>${feature}</li>`).join("")}
    </ul>
    <a href="${createWhatsAppLink(`Hello Kankwe, I would like to enquire about Spa ${item.number}.`)}">Enquire about Spa ${item.number}</a>
  `;

  wellnessGrid.appendChild(card);
});

// ---------- 5. WHATSAPP LINK HELPER ----------
function createWhatsAppLink(message) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

// ---------- 6. BOOKING FORM ----------
const bookingForm = document.getElementById("bookingForm");

bookingForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("fullName").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const email = document.getElementById("email").value.trim();
  const date = document.getElementById("date").value;
  const guests = document.getElementById("guests").value;
  const service = document.getElementById("service").value;
  const room = document.getElementById("room").value;
  const message = document.getElementById("message").value.trim();

  const whatsappMessage = `Hello Kankwe, I would like to make an enquiry.

Full Name: ${name}
Phone Number: ${phone}
Email: ${email || "Not provided"}
Preferred Date: ${date || "Not provided"}
Number of Guests: ${guests || "Not provided"}
Service / Package: ${service || "Not selected"}
Preferred Room: ${room || "Not selected"}
Message: ${message || "No additional message"}

Please let me know about availability and the next steps.`;

  window.open(createWhatsAppLink(whatsappMessage), "_blank");
});
