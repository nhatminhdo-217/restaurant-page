import "./styles.css";
import houseImg from "./5uvJN.png";
import menuImage from "./building-a-house-from-the-inside-out.jpg";

const image = document.createElement("img");
image.src = houseImg;

(function () {
  function loadInit() {
    const content = `
        <div id="intro">
          <div>
            <h1><p>Homepage of Minh's Restaurant</p></h1>
            <div>
              <p>This restaurant just made today!!! Great</p>
              <p>How about choose a delicious food and order it now !!!</p>
            </div>
          </div>
          <div id="intro_img">
          </div>
        </div>
        `;

    document.getElementById("content").innerHTML = content;

    const introImg = document.getElementById("intro_img");
    introImg.appendChild(image);
    clickBtn();
  }

  function clickBtn() {
    const homeBtn = document.getElementById("homeBtn");
    const menuBtn = document.getElementById("menuBtn");
    const aboutBtn = document.getElementById("aboutBtn");

    const btns = document.querySelectorAll(".nav-btn");

    btns.forEach (btn => {
        btn.addEventListener("click", function() {
            btns.forEach(button => button.classList.remove("enable"));

            this.classList.add("enable");
        })
    })
    
    homeBtn.addEventListener("click", function () {
      loadInit();
    });

    menuBtn.addEventListener("click", function () {
      loadMenu();
    });

    aboutBtn.addEventListener("click", function () {
      loadAbout();
    });
  }

  function loadMenu() {
    const content = `
        <div id="menu">
          <div>
            <h1><p>Minh's Restaurant Menu</p></h1>
            <div>
              <p>This restaurant just made today!!! Great</p>
              <p>How about choose a delicious food and order it now !!!</p>
            </div>
          </div>
          <div id="menu_section"></div>
        </div>
        `;

    document.getElementById("content").innerHTML = content;

    menu();

    clickBtn();
  }

  function menu() {
    const menuImg = document.createElement("img");
    menuImg.src = houseImg;

    const content = `
      <div class="menu-content">
        <div class="menu_img">
        </div>
        <div>
          <ul class="price">
            <li>Dish: Pho Dac Biet</li>
            <li>Price: 100,000 vnd</li>
          </ul>
        </div>
      </div>
    `;
    
    const menuContent = document.getElementById("menu_section");
    menuContent.innerHTML = "";

    for (let i = 0; i < 5; i++) {
      
      const wrapper = document.createElement("div");
      wrapper.classList.add("menu_block")
      wrapper.innerHTML = content;

      const menuImgContainer = wrapper.querySelector(".menu_img");
      const img = document.createElement("img");
      img.src = houseImg;
      menuImgContainer.appendChild(img);

      menuContent.appendChild(wrapper);
    }
  }

  function loadAbout() {
    const aboutImg = document.createElement("img");
    aboutImg.src = houseImg;
    const content = `
        <div id="about">
          <div>
            <h1><p>About</p></h1>
            <div>
              <p>Contact: 0121294854</p>
              <p>Hope you had wonderful meals</p>
            </div>
          </div>
          <div id="about_img">
          </div>
        </div>
        `;

    document.getElementById("content").innerHTML = content;

    const about = document.getElementById("about_img");
    about.appendChild(aboutImg);
    clickBtn();
  }

  loadInit();
})();
