const htmlProgress='70%';
const jsProgress='70%';
const cssProgress='50%';
const sqlProgress='60%';
const javaProgress='60%';
const phpProgress='70%';
document.addEventListener('DOMContentLoaded',async function  () {
  navSlide();
  fillProgressBars();
});
function getProgressBars() {
  const js=document.getElementById('JS'),html=document.getElementById('HTML'),css=document.getElementById('CSS');
  const php=document.getElementById('php'),java=document.getElementById('java'),sql=document.getElementById('sql');
  return{js,html,php,java,css,sql}
}
function fillProgressBars() {
  const {js,html,php,java,css,sql}=getProgressBars();
  js.innerText=jsProgress;
  js.style.width=jsProgress;
  html.innerText=htmlProgress;
  html.style.width=htmlProgress;
  css.innerText=cssProgress;
  css.style.width=cssProgress;
  sql.innerText=sqlProgress;
  sql.style.width=sqlProgress;
  java.innerText=javaProgress;
  java.style.width=javaProgress;
  php.innerText=phpProgress;
  php.style.width=phpProgress;
}
function navSlide() {
  const burger=document.querySelector('.burger');
  const nav=document.querySelector('.nav-links');
  const navLinks=document.querySelectorAll('.nav-links li');
  burger.addEventListener('click',function () {
    nav.classList.toggle('nav-active');
    //animacion de los links
    navLinks.forEach((link,index)=>{
      if(link.style.animation)
        link.style.animation='';
      else
        link.style.animation=`navLinkFade 0.5s ease forwards ${index/7 +0.5}s`;
    });
    //burger animation
    burger.classList.toggle('toggle');
  });

}
navSlide();
fillProgressBars();

