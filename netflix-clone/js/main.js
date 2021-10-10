var coll = document.getElementsByClassName("collapsible");

for (var i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight != 0) {
      content.style.maxHeight = null;
    } else {
      for (var j = 0; j < coll.length; ++j) {
        if (coll[j].nextElementSibling.style.maxHeight != 0) {
          coll[j].nextElementSibling.style.maxHeight = null;
          break;
        }
      }
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });

}

$(document).ready(function(){
  var typed = new Typed(".typing", {
    strings: ["Enter your Email"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  });
});
