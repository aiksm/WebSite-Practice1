$(function(){
    $(".nav-Button").click(function(){
        $(".nav-Button div").toggleClass('nav-active');
        $(".header-Body").toggleClass('header-Body-open');
        $(".nav-Open").toggleClass('nav-Open-active');
        $(".common-Menu li").toggleClass('pc-effect-active');
    });
});

const spinner = document.querySelector('#loading');
const main = document.querySelector('#main');

window.addEventListener('load', stopLoading);
setTimeout('stopLoading()', 200000);

function stopLoading() {
  spinner.style.display = 'none';
  main.style.opacity = 1;
}

