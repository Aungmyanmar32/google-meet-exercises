const usersDiv = document.querySelector(".usersDiv");

const allUsers = [
  {
    id: 1,
    name: "Aung Aung",
    image:
      "https://raw.githubusercontent.com/Aungmyanmar32/google-meet-exercises/main/img0.jpg",
  },
  {
    id: 2,
    name: "Su Su",
    image:
      "https://raw.githubusercontent.com/Aungmyanmar32/google-meet-exercises/main/img1.jpg",
  },
  {
    id: 3,
    name: "Bo Bo",
    image:
      "https://raw.githubusercontent.com/Aungmyanmar32/google-meet-exercises/main/img2.jpg",
  },
  {
    id: 4,
    name: "Jack",
    image:
      "https://raw.githubusercontent.com/Aungmyanmar32/google-meet-exercises/main/img3.jpg",
  },
  {
    id: 5,
    name: "Hla Hla",
    image:
      "https://raw.githubusercontent.com/Aungmyanmar32/google-meet-exercises/main/img4.jpg",
  },
  {
    id: 6,
    name: "Ko Ko",
    image:
      "https://raw.githubusercontent.com/Aungmyanmar32/google-meet-exercises/main/img5.jpg",
  },
  {
    id: 7,
    name: "John",
    image:
      "https://raw.githubusercontent.com/Aungmyanmar32/google-meet-exercises/main/img6.jpg",
  },
  {
    id: 8,
    name: "Mary",
    image:
      "https://raw.githubusercontent.com/Aungmyanmar32/google-meet-exercises/main/img7.jpg",
  },
  {
    id: 9,
    name: "Kyaw Kyaw",
    image:
      "https://raw.githubusercontent.com/Aungmyanmar32/google-meet-exercises/main/img8.jpg",
  },
  {
    id: 10,
    name: "Ma Ma",
    image:
      "https://raw.githubusercontent.com/Aungmyanmar32/google-meet-exercises/main/img9.jpg",
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
  img.src = allUsers[i].image;

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
