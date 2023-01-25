const usersDiv = document.querySelector(".usersDiv");

const allUsers = [
  {
    id: 1,
    name: "Aung Aung",
  },
  {
    id: 2,
    name: "Su Su",
  },
  {
    id: 3,
    name: "Bo Bo",
  },
  {
    id: 4,
    name: "Jack",
  },
  {
    id: 5,
    name: "Hla Hla",
  },
  {
    id: 6,
    name: "Ko Ko",
  },
  {
    id: 7,
    name: "John",
  },
  {
    id: 8,
    name: "Mary",
  },
  {
    id: 9,
    name: "Kyaw Kyaw",
  },
  {
    id: 10,
    name: "Ma Ma",
  },
];

for (let i = 0; i < 10; i++) {
  const hoverDiv = document.createElement("div");
  hoverDiv.classList.add("hoverDiv");
  hoverDiv.innerHTML = `
  <i class="fa-solid fa-location-dot"></i>
   <i class="fa-solid fa-microphone-slash"></i>
   <i class="fa-solid fa-user-slash"></i>
  `;

  const micDiv = document.createElement("div");
  micDiv.classList.add("micDiv", "micOff");

  const img = document.createElement("img");
  img.src = `/images/img${i}.jpg`;

  const userDiv = document.createElement("div");
  userDiv.textContent = allUsers[i].name;

  if (i === 3) {
    userDiv.classList.add("active");
    userDiv.classList.add("userDiv");
    micDiv.innerHTML = '<i class="fa-solid fa-microphone"></i>';
  } else {
    micDiv.innerHTML = '<i class="fa-solid fa-microphone-slash"></i>';
    userDiv.classList.add("userDiv");
  }

  userDiv.append(img, micDiv, hoverDiv);
  //   userDiv.innerHTML = `
  //<img src="/images/img${i}.jpg" />
  //   <div class="micDiv"><i class="fa-solid fa-microphone-slash"></i></div>
  //   <div class="hoverDiv">
  //     <i class="fa-solid fa-location-dot"></i>
  //     <i class="fa-solid fa-microphone-slash"></i>
  //     <i class="fa-solid fa-user-slash"></i>
  //   </div>

  //   `;

  usersDiv.append(userDiv);
}

window.addEventListener("DOMContentLoaded", () => {
  const micDiv = document.querySelectorAll(".micDiv");
  for (let i = 0; i < micDiv.length; i++) {
    micDiv[i].addEventListener("click", (e) => {
      let micSetting = e.target.parentElement;

      if (micSetting.classList.contains("micOff")) {
        micSetting.classList.remove("micOff");
        micSetting.classList.add("micOn");
        micSetting.innerHTML = micDiv.innerHTML =
          '<i class="fa-solid fa-microphone"></i>';
      } else if (micSetting.classList.contains("micOn")) {
        micSetting.classList.remove("micOn");
        micSetting.classList.add("micOff");
        micSetting.innerHTML = micDiv.innerHTML =
          '<i class="fa-solid fa-microphone-slash"></i>';
      }
    });
  }
});
