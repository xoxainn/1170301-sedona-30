//Анимация формы
var button = document.querySelector(".hotel-search__button");
var form = document.querySelector(".hotel-search-form");
button.addEventListener('click',function(){
  form.classList.toggle("visually-hidden");
  form.classList.toggle("open-form");
} );
// Работа формы
var moreAdults = document.querySelector(".more-adults");
var lessAdults = document.querySelector(".less-adults");
var moreKids = document.querySelector(".more-kids");
var lessKids = document.querySelector(".less-kids");
var amountAdults = document.querySelector(".adults-amount");
var amountKids = document.querySelector(".kids-amount");
var lessButtonAdults = document.querySelector(".less-button__adults");


moreAdults.addEventListener('click',function(evt){
  evt.preventDefault();
  amountAdults.value++;

});


lessAdults.addEventListener('click',function(evt){
  evt.preventDefault();
  amountAdults.value--;
});

/*if (amountAdults.value>0){
  lessButtonAdults.classList.add("inactive");
} else {
  lessButtonAdults.classList.remove("inactive");
};*/

moreKids.addEventListener('click',function(evt){
  evt.preventDefault();
  amountKids.value++;

});

lessKids.addEventListener('click',function(evt){
  evt.preventDefault();
  amountKids.value--;

});
