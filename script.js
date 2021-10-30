const menuBtnCon = document.querySelector(".menu-btn-con");
const menuList = document.querySelector("header section");
const rewardStands = document.querySelectorAll(".reward-stands");
const rewardList = document.querySelectorAll("input[type=checkbox]");
const inputSection = document.querySelectorAll('.reward-stands aside');
const backBtn = document.querySelector('#back');
const modal = document.querySelector('#modal');
const exitModal = document.querySelector('#exit-btn');
const continueBtn = document.querySelectorAll('.continue-btn');
const thanks = document.querySelector('#thanks');
const gotIt = document.querySelector('#got-it');
const bookmark = document.querySelector('#bookmark');
const bookmarkSpan = document.querySelector('#bookmark span')

menu = false;
menuBtnCon.addEventListener("click", function () {
  if (!menu) {
    menuBtnCon.classList.add("open");
    menuList.classList.add("visible");
    setTimeout(function () {
      menuList.classList.add("visuallyhidden");
    }, 20);
    menu = true;
  } else {
    menuBtnCon.classList.remove("open");
    menuList.classList.remove("visuallyhidden");
    addEventListener(
      "transitionend",
      function () {
        menuList.classList.remove("visible");
        menu = false;
      },
      {
        capture: false,
        once: true,
        passive: false,
      }
    );
  }
});
back = false;
backBtn.addEventListener("click", function () {
  if (!back) {
    modal.classList.add("visible");
    setTimeout(function () {
      modal.classList.add("visuallyhidden");
    }, 20);
 back = true;
  }
});
   exitModal.addEventListener('click', function () {
       if(back == true) {
    modal.classList.remove("visuallyhidden");
    setTimeout(function () { 
        modal.classList.remove("visible");
        back = false;
      }, 50);
    }
});

rewardList[0].addEventListener("click", function () {
  i = [1, 2, 3];
  for (i = 1; i < 3; i++) {
    rewardList[i].checked = false;
    rewardStands[i].classList.remove("active");
  }
  if (!rewardStands[0].classList.contains("active")) {
    rewardStands[0].classList.add("active");

  } else {
    rewardStands[0].classList.remove("active");
  }
});
rewardList[1].addEventListener("click", function () {
  for (i = 0; i <= 3; i++) {
      if (i !== 1) {
    rewardList[i].checked = false;
    rewardStands[i].classList.remove("active");
      }
  }
  if (!rewardStands[1].classList.contains("active")) {
    rewardStands[1].classList.add("active");
    colored = true;
  } else {
    rewardStands[1].classList.remove("active");
  }
});

rewardList[2].addEventListener("click", function () {
    for (i = 0; i <= 3; i++) {
        if (i !== 2) {
      rewardList[i].checked = false;
      rewardStands[i].classList.remove("active");
        }
    }
  if (!rewardStands[2].classList.contains("active")) {
    rewardStands[2].classList.add("active");
    colored = true;
  } else {
    rewardStands[2].classList.remove("active");
  }
});
rewardList[3].addEventListener("click", function () {
    for (i = 0; i <= 3; i++) {
        if (i !== 3) {
      rewardList[i].checked = false;
      rewardStands[i].classList.remove("active");
        }
    }
  if (!rewardStands[3].classList.contains("active")) {
    rewardStands[3].classList.add("active");
    colored = true;
  } else {
    rewardStands[3].classList.remove("active");
  }
});

let thanksCheck = false;
for (i=0; i < continueBtn.length; i++) {
continueBtn[i].addEventListener('click', function() {
    if(!thanksCheck) {
      thanks.classList.add("visible");
      setTimeout(function () {
      thanks.classList.add("visuallyhidden");
      }, 20);
   thanksCheck = true;

   modal.classList.remove("visuallyhidden");
   setTimeout(function () { 
       modal.classList.remove("visible");
       back = false;
     }, 20);


    }
});}
gotIt.addEventListener('click', function () {
  if(thanksCheck == true) {
    thanks.classList.remove("visuallyhidden");
    setTimeout(function () { 
        thanks.classList.remove("visible");
        thanksCheck = false;
      }, 20);
    }
})
colored = false;
bookmark.addEventListener('click', function() {
  bookmarkSpan.classList.toggle('ed');
  if (!colored){
  bookmark.style.color = 'hsl(176, 50%, 47%)';
  colored = true;
  }else{
    bookmark.style.color = 'hsl(0, 0%, 48%)';
    colored = false;
  }
   
})