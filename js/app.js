
//button scrolls to top

var scrollTop=document.querySelector('#btn');
scrollTop.addEventListener('click', function() {

  document.documentElement.scrollTop = 0; 
} );
//display scroll button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollTop.style.display = "block";
  } else {
    scrollTop.style.display = "none";
  }
}
//dark mode
var myCheck= document.querySelector('input[type="checkbox"]');
var myBody=document.querySelector('body');
var head_2= document.querySelector('h2');
var head_3= document.querySelector('h3');
myCheck.addEventListener('change', () => {
  if(myCheck.checked) {
    myBody.style.background = '#130101';
head_2.style.color="white";
   head_3.style.color='white';

   
  } else {
    myBody.style.background= 'white';
  }
});
