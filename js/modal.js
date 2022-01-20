// section 3 modal windows
const choiModal = document.querySelector(".choi_modal");
const shopModal = document.querySelector(".shop_modal");
const westModal = document.querySelector(".west_modal");
const eastModal = document.querySelector(".east_modal");
const closeModalBtn = document.querySelectorAll(".close-modal");
const btnChoiEl = document.querySelector("#choimo");
const btnShopEl = document.querySelector("#shopmo");
const btnWestEl = document.querySelector("#westmo");
const btnEastEl = document.querySelector("#eastmo");

// open modal windows

btnChoiEl.addEventListener("click", function () {
  choiModal.classList.remove("modal_hidden");
});
btnShopEl.addEventListener("click", function () {
  shopModal.classList.remove("modal_hidden");
});
btnWestEl.addEventListener("click", function () {
  westModal.classList.remove("modal_hidden");
});
btnEastEl.addEventListener("click", function () {
  eastModal.classList.remove("modal_hidden");
});

// press the close button to close modal windows

for (let close of closeModalBtn) {
  choiModal.addEventListener("click", closeModal);
  shopModal.addEventListener("click", closeModal);
  eastModal.addEventListener("click", closeModal);
  westModal.addEventListener("click", closeModal);
}

function closeModal() {
  this.classList.add("modal_hidden");
}

// press esc to close the windows

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    choiModal.classList.add("modal_hidden");
    shopModal.classList.add("modal_hidden");
    westModal.classList.add("modal_hidden");
    eastModal.classList.add("modal_hidden");
  }
});

// const sub = document.querySelector("#subpage");
// sub.onclick = function () {
//   document.location.href = "artartists.html";
// };
