const ul = document.querySelector("ul");
const form2 = document.addfrm;
const add = form2.add;
const form1 = document.form1;
const search = form1.search;
form2.addEventListener("submit", (e) => {
  e.preventDefault();
  if (add.value.length > 0) {
    ul.innerHTML +=
      '<li class="list-group-item d-flex justify-content-between align-items-center"><span>' +
      add.value +
      '</span><i class="far fa-trash-alt delete"></i></li>';
    add.value = "";
  }
});

ul.addEventListener("click", (e) => {
  let i = e.target;
  if (i.nodeName == "I") {
    let li = i.parentElement;
    li.remove();
  }
});

form1.addEventListener("submit", (e) => {
  e.preventDefault();
});

search.addEventListener("keyup", () => {
  let all = ul.querySelectorAll("li");
  all.forEach((x) => {
    x.classList.add("filtered");
  });
  all.forEach((x) => {
    let str = search.value.toLowerCase();
    let s = x.innerText.toLowerCase();
    let res = s.indexOf(str);
    if (res != -1) x.classList.remove("filtered");
  });
});
