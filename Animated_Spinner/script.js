let para = document.querySelector(".para");
let spinner = document.querySelector(".spinner");
para.style.display="none";

setTimeout(()=>{
  para.style.display = "block";
  spinner.style.display = "none";
},5000);