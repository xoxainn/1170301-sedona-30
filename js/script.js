var button = document.querySelector(".hotel-search__button");
var form = document.querySelector(".hotel-search-form");
button.addEventListener('click',function(){
  form.classList.toggle("visually-hidden");
  form.classList.toggle("open-form");
} );