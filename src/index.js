import "./styles.css";

const klikkaus = document.getElementById("my-button");
const lisaa = document.getElementById("add-data");

document.getElementById("otsikko").textContent = "Hello world";


klikkaus.addEventListener("click", function () {
  console.log("hello world");
  document.getElementById("otsikko").textContent = "My notebook";
});

lisaa.addEventListener("click", function () {
  var ul = document.getElementById("lista");
  var li = document.createElement("li");
  const teksti = document.getElementById("tekstikentta").value;
  li.appendChild(document.createTextNode(teksti));
  ul.appendChild(li);
});
