document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".nav-link").forEach(e=>{window.location.href.includes(e.getAttribute("href"))&&e.classList.add("selected")})}),(()=>{let e=document.querySelector(".carousel");if(!e)return;let t=e.querySelector(".carousel-item");if(!t)return;let n=t.clientWidth;document.getElementById("prevButton")?.addEventListener("click",()=>{e.scrollLeft-=n}),document.getElementById("nextButton")?.addEventListener("click",()=>{e.scrollLeft+=n})})(),(()=>{let e=document.getElementById("scrollButton");if(!e)return;let t=t=>{e.classList.toggle("is-visible",t)};window.addEventListener("scroll",()=>{t(document.body.scrollTop>20||document.documentElement.scrollTop>20)}),e.addEventListener("click",()=>{let e=window.location.href.split("#")[0];window.history.pushState({},document.title,e),window.scrollTo({top:0})})})(),(()=>{let e=document.getElementById("currentYear");e&&(e.textContent=new Date().getFullYear())})();