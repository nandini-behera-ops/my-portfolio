const menuIcon=document.getElementById("menu-icon");
const navbar=document.getElementById("navbar");
menuIcon.addEventListener("click",()=>{
  navbar.classList.toggle("active");
});
const observer=new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.style.animationPlayState='running';      
    }else{
      entry.target.style.animationPlayState='paused';        
    }
  });
},{
  threshold:0.2
});
document.querySelectorAll('.animate').forEach(el=>{
  el.style.animationPlayState='paused';
  observer.observe(el);
});