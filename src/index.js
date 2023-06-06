import "./styles.css";

if (document.readyState !== "loading") {
  initializeCode();
} else {
  document.addEventListener("DOMContentLoaded", function () {
    initializeCode();
  });
}

function initializeCode() {
  const klikkaus = document.getElementById("my-button");
  const lisaa = document.getElementById("add-data");

  klikkaus.addEventListener("click", function () {
    console.log("hello world");
    document.getElementById("my-button").innerHTML = "My notebook";
  });

  lisaa.addEventListener("click", function () {
    var ul = document.getElementById("lista");
    var li = document.createElement("li");
    const teksti = document.getElementById("tekstikentta").value;
    li.appendChild(document.createTextNode(teksti));
    ul.appendChild(li);
  });
}
