
document.addEventListener("DOMContentLoaded", function () {
  const photo=document.getElementById("profilePhoto");
  if(photo){
    photo.addEventListener("click", function(){
      window.location.assign("pages/personal-info.html");
    });
    photo.addEventListener("keydown", function(e){
      if(e.key==="Enter" || e.key===" ") window.location.assign("pages/personal-info.html");
    });
    photo.setAttribute("tabindex","0");
    photo.setAttribute("role","link");
  }
  document.querySelectorAll("[data-confirm]").forEach(function(btn){
    btn.addEventListener("click",function(){
      if(window.confirm(btn.dataset.confirm)) window.alert("Action completed.");
    });
  });
  document.querySelectorAll("[data-alert]").forEach(function(btn){
    btn.addEventListener("click",function(){window.alert(btn.dataset.alert);});
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const photo=document.getElementById("click");
  if(photo){
    photo.addEventListener("click", function(){
      window.location.assign("pages/personal-info.html");
    });
    photo.addEventListener("keydown", function(e){
      if(e.key==="Enter" || e.key===" ") window.location.assign("pages/personal-info.html");
    });
    photo.setAttribute("tabindex","0");
    photo.setAttribute("role","link");
  }
  document.querySelectorAll("[data-confirm]").forEach(function(btn){
    btn.addEventListener("click",function(){
      if(window.confirm(btn.dataset.confirm)) window.alert("Action completed.");
    });
  });
  document.querySelectorAll("[data-alert]").forEach(function(btn){
    btn.addEventListener("click",function(){window.alert(btn.dataset.alert);});
  });
});