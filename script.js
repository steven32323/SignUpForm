'use strict';

const password = document.querySelector('#password');
const confirmpw = document.querySelector('#confirmpw');
const btn = document.querySelector('.button');
const form = document.querySelector('.form');
const error = document.querySelector('.hidden');

password.addEventListener('click', function () {
  console.log('click1');
});
btn.addEventListener('click', function (e) {
  e.preventDefault();
  if (password.value === confirmpw.value) alert('Account Created!');
  if (password.value !== confirmpw.value) {
    password.classList.add('error');
    confirmpw.classList.add('error');
    error.style.opacity = 1;
  }
});
