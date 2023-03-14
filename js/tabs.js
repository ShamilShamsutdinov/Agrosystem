let tabsBtn = document.querySelectorAll(".tabs__nav-btn");
let tabsItem = document.querySelectorAll(".tabs__item");

tabsBtn.forEach((elem) => {
  elem.addEventListener("click", (e) => {
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach((btn) => {
      btn.classList.remove("tabs__nav-btn-active");
    });
    e.currentTarget.classList.add("tabs__nav-btn-active");

    tabsItem.forEach((el) => {
      el.classList.remove("tabs__item-active");
    });
    document
      .querySelector(`[data-target='${path}']`)
      .classList.add("tabs__item-active");
  });
});

let tabsBtn1 = document.querySelectorAll(".tabs__nav-btn-1");
let tabsItem1 = document.querySelectorAll(".tabs__item-1");

tabsBtn1.forEach((elem) => {
  elem.addEventListener("click", (e) => {
    const path = e.currentTarget.dataset.path;

    tabsBtn1.forEach((btn) => {
      btn.classList.remove("tabs__nav-btn-active-1");
    });
    e.currentTarget.classList.add("tabs__nav-btn-active-1");

    tabsItem1.forEach((el) => {
      el.classList.remove("tabs__item-active-1");
    });
    document
      .querySelector(`[data-target='${path}']`)
      .classList.add("tabs__item-active-1");
  });
});

let tabsBtn2 = document.querySelectorAll(".tabs__nav-btn-mobile");
let tabsItem2 = document.querySelectorAll(".tabs__item-mobile");

tabsBtn2.forEach((elem) => {
  elem.addEventListener("click", (e) => {
    const path = e.currentTarget.dataset.path;

    tabsBtn2.forEach((btn) => {
      btn.classList.remove("tabs__nav-btn-active-mobile");
    });
    e.currentTarget.classList.add("tabs__nav-btn-active-mobile");

    tabsItem2.forEach((el) => {
      el.classList.remove("tabs__item-active-mobile");
    });
    document
      .querySelector(`[data-target='${path}']`)
      .classList.add("tabs__item-active-mobile");
  });
});

new WOW().init();
