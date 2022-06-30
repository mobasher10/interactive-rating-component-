'use strict';
const card = document.querySelector('.card');
const radioLabel = document.querySelectorAll('.radio__label');
const containerThanks = document.querySelector('.container__thanks ');
const btn = document.querySelector('.btn');
const selectedElement = document.querySelector('.selected__element');

let current;
radioLabel.forEach(label => {
  label.addEventListener('click', function (e) {
    current = e.target.innerText;
    console.log(current);
    if (current === '') {
      return;
    }
  });
});

btn.addEventListener('click', function () {
  if (current === undefined) {
    alert(`Error! you didn't select the rating number`);
    return;
  } else {
    card.style.visibility = 'hidden';
    containerThanks.style.visibility = 'visible';
    selectedElement.textContent = `You selected ${current} out of 5`;
  }

  // if (!current) {
  //   selectedElement.textContent = `Error! you didn't select the rating number`;
  // }
});
