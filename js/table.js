const btn = document.querySelectorAll(".plan__paragraph-btn");
let numTrade = document.querySelector(".plan__total-num.trade");
let numTradeHub = document.querySelector(".plan__total-num.tradehub");
let number1 = document.querySelector(".plan__num.num1");
let paragraph1 = document.querySelector(".plan__paragraph.par1");
let price1 = document.querySelectorAll(".plan__price.pr1");
let number2 = document.querySelector(".plan__num.num2");
let paragraph2 = document.querySelector(".plan__paragraph.par2");
let price2 = document.querySelectorAll(".plan__price.pr2");

let btnMobile = document.querySelectorAll(".plan__btn-table");
let numTradeMobile = document.querySelector(".plan__acc-total-trade");
let numTradehubMobile = document.querySelector(".plan__acc-total-tradehub");

console.log(numTradeMobile);
console.log(numTradehubMobile);

btn.forEach((el) => {
  el.addEventListener("click", (e) => {
    let btn1 = document.querySelector(".plan__paragraph-btn.btn1");
    let btn2 = document.querySelector(".plan__paragraph-btn.btn2");
    let number1 = document.querySelector(".plan__num.num1");

    let currentBtn = e.currentTarget;

    currentBtn.classList.toggle("active");

    // Если 1 кнопка не активна, а вторая активна
    if (
      !btn1.classList.contains("active") &&
      btn2.classList.contains("active")
    ) {
      numTrade.innerHTML = "1 272 000";
      numTradeHub.innerHTML = "1 472 000";
      // numTradeMobile.innerHTML = "1 272 000";
      // numTradehubMobile.innerHTML = "1 472 000";
      // console.log(numTradeMobile);
      // console.log(numTradehubMobile);
      // console.log("1 не активна, 2 активна");
    }

    // Если 1 кнопка активна, а вторая не активна
    if (
      btn1.classList.contains("active") &&
      !btn2.classList.contains("active")
    ) {
      numTrade.innerHTML = "622 000";
      numTradeHub.innerHTML = "1 057 500";
      // numTradeMobile.innerHTML = "1";
      // numTradehubMobile.innerHTML = "1 472";
      // console.log(numTradeMobile);
      // console.log(numTradehubMobile);
      // console.log("1 активна, 2 не активна");
    }

    //если обе кнопки не активны
    if (
      !btn1.classList.contains("active") &&
      !btn2.classList.contains("active")
    ) {
      numTrade.innerHTML = "472 000";
      numTradeHub.innerHTML = "657 500";
      // numTradeMobile.innerHTML = "472 000";
      // numTradehubMobile.innerHTML = "657 000";
      // console.log(numTradeMobile);
      // console.log(numTradehubMobile);
      // console.log("обе не активны");
    }

    //если обе кнопки активны
    if (
      btn1.classList.contains("active") &&
      btn2.classList.contains("active")
    ) {
      numTrade.innerHTML = "1 422 000";
      numTradeHub.innerHTML = "1 857 500";
      console.log("обе активны");
    }

    if (!btn1.classList.contains("active")) {
      number1.style.opacity = "0.2";
      paragraph1.style.opacity = "0.2";
      price1.forEach((pr) => {
        pr.style.opacity = "0.2";
      });
    }

    if (btn1.classList.contains("active")) {
      number1.style.opacity = "1";
      paragraph1.style.opacity = "1";
      price1.forEach((pr) => {
        pr.style.opacity = "1";
      });
    }

    if (!btn2.classList.contains("active")) {
      number2.style.opacity = "0.2";
      paragraph2.style.opacity = "0.2";
      price2.forEach((pr) => {
        pr.style.opacity = "0.2";
      });
    }

    if (btn2.classList.contains("active")) {
      number2.style.opacity = "1";
      paragraph2.style.opacity = "1";
      price2.forEach((pr) => {
        pr.style.opacity = "1";
      });
    }
  });
});

btnMobile.forEach((elem) => {
  elem.addEventListener("click", (e) => {
    let btnMobile1 = document.querySelector(".plan__btn-table.btn3");
    let btnMobile2 = document.querySelector(".plan__btn-table.btn4");

    let currentBtnMobile = e.currentTarget;

    currentBtnMobile.classList.toggle("active");

    if (
      btnMobile1.classList.contains("active") &&
      !btnMobile2.classList.contains("active")
    ) {
      numTradeMobile.innerHTML = "622 000";
      numTradehubMobile.innerHTML = "1 057 500";
    }

    if (
      !btnMobile1.classList.contains("active") &&
      btnMobile2.classList.contains("active")
    ) {
      numTradeMobile.innerHTML = "1 272 000";
      numTradehubMobile.innerHTML = "1 472 000";
    }

    if (
      !btnMobile1.classList.contains("active") &&
      !btnMobile2.classList.contains("active")
    ) {
      numTradeMobile.innerHTML = "472 000";
      numTradehubMobile.innerHTML = "657 500";
    }

    if (
      btnMobile1.classList.contains("active") &&
      btnMobile2.classList.contains("active")
    ) {
      numTradeMobile.innerHTML = "1 422 000";
      numTradehubMobile.innerHTML = "1 857 500";
    }
  });
});
