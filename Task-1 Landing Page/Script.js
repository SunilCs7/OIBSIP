const emailBtn = document.querySelector("[data-email]");
const senderEmail = document.querySelector("[data-email-sender]");

emailBtn.onclick = () =>
  window.open(`mailto:s0431668@gmail.com?from=${senderEmail}`);

const allIcons = document.querySelector(".animated-icon");
const html = document.querySelector(".html");
const css = document.querySelector(".css");
const js = document.querySelector(".js");
const react = document.querySelector(".react");

// Animations
onload = () => {
  allIcons.style.animation = "popout 1s ease";
  setTimeout(() => (css.style.transform = "scale(1)"), 1900);
  setTimeout(() => (js.style.transform = "scale(1)"), 2920);
  setTimeout(() => (react.style.transform = "scale(1)"), 3920);
  setTimeout(() => (html.style.transform = "scale(1)"), 900);
  setTimeout(() => (css.style.animation = "popout 1s ease"), 920);
  setTimeout(() => (js.style.animation = "popout 1s ease"), 2900);
  setTimeout(() => (react.style.animation = "popout 1s ease"), 3900);
  setTimeout(
    () => react.setAttribute("src", "https://i.imgur.com/byd4aND.png"),
    4000
  );
  setTimeout(() => (react.style.animation = "spin 6s infinite linear"), 4500);
};

const contactEmail = document.querySelector("[data-email-contact]");
const contactSubject = document.querySelector("[data-subject-contact]");
const contactBody = document.querySelector("[data-body-contact]");
const sendMessage = document.querySelector("[data-send-btn]");

sendMessage.onclick = async (event) => {
  event.preventDefault();

  await Email.send({
    Host: "smtp.gmail.com",
    Username: "s0431668@gmail.com",
    Password: "yzxisbyivtabrqdz",
    To: "s0431668@gmail.com",
    From: contactEmail.value,
    Subject: contactSubject.value,
    Body: contactBody.value,
  });
  alert("Email sent!");
};
