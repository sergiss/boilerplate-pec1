document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".nav-link").forEach(e=>{window.location.href.includes(e.getAttribute("href"))&&e.classList.add("selected")})}),(()=>{let e=document.querySelector(".carousel");if(!e)return;let t=e.querySelectorAll(".carousel-item");t.length&&(document.getElementById("prevButton")?.addEventListener("click",()=>{let l=t[0].clientWidth,n=e.scrollWidth-e.clientWidth;0===e.scrollLeft?e.scrollLeft=n:e.scrollLeft-=l}),document.getElementById("nextButton")?.addEventListener("click",()=>{let l=t[0].clientWidth,n=e.scrollWidth-e.clientWidth;e.scrollLeft>=n?e.scrollLeft=0:e.scrollLeft+=l}))})(),(()=>{let e=document.getElementById("scrollButton");if(!e)return;let t=t=>{e.classList.toggle("is-visible",t)};window.addEventListener("scroll",()=>{t(document.body.scrollTop>20||document.documentElement.scrollTop>20)}),e.addEventListener("click",()=>{let e=window.location.href.split("#")[0];window.history.pushState({},document.title,e),window.scrollTo({top:0})})})(),(()=>{let e=document.getElementById("currentYear");e&&(e.textContent=new Date().getFullYear())})();