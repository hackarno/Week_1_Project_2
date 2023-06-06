import "./styles.css";


  const klikkaus = document.getElementById("my-button");
  const lisaa = document.getElementById("add-data");

  klikkaus.addEventListener("click", function () {
    console.log("hello world");
    document.getElementById("otsikko").innerHTML = "My notebook";
  });

  lisaa.addEventListener("click", function () {
    var ul = document.getElementById("lista");
    var li = document.createElement("li");
    const teksti = document.getElementById("tekstikentta").value;
    li.appendChild(document.createTextNode(teksti));
    ul.appendChild(li);
  });
