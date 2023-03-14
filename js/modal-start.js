// function detectLeavePage() {
//   $(document).one("mouseleave", function (e) {
//     if (e.clientY < 10) {
//       setTimeout(function () {
//         $("[data-remodal-id=modal-form-leave]").remodal().open();
//       }, 200);
//       console.log(e.clientY);
//     }
//   });
// }

// window.addEventListener("load", function () {
//   detectLeavePage();
// });

const modalsOver4 = document.querySelector(".modal-final__overlay");
const final = document.querySelector(".modal-final__content");
const modalFinal = document.querySelector(".modal-final");

function detectLeavePage() {
  let digit = 0;
  document.addEventListener("mouseleave", (e) => {
    if (e.clientY < 10) {
      setTimeout(function () {
        modalFinal.classList.add("modal-final-visible");
        final.classList.add("modal-final__content-visible");
        modalsOver4.classList.add("modal-final__overlay-visible");
        digit = digit + 1;
        console.log(digit);
        if (digit > 1) {
          modalFinal.classList.remove("modal-final-visible");
          final.classList.remove("modal-final__content-visible");
          modalsOver4.classList.remove("modal-final__overlay-visible");
        }
      }, 1000);
    }
  });
}

window.addEventListener("load", function () {
  detectLeavePage();
});

modalsOver4.addEventListener("click", (e) => {
  if (e.target == modalsOver4) {
    modalFinal.classList.remove("modal-final-visible");
    final.classList.remove("modal-final__content-visible");
    modalsOver4.classList.remove("modal-final__overlay-visible");
  }
});
