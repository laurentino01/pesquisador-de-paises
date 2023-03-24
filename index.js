document
  .getElementById("card")
  .style.setProperty("display", "none", "important");

function searchConuntry() {
  document
    .getElementById("card")
    .style.setProperty("display", "block", "important");
  const countryName = document.getElementById("searchBar").value;
  const url = ` https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
  fetch(url)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      let flag = document.getElementById("flag");
      let nome = document.getElementById("nome");
      let capital = document.getElementById("capital");
      let cont = document.getElementById("cont");
      let pop = document.getElementById("pop");

      flag.src = data[0].flags.svg;
      nome.innerHTML = countryName;
      capital.innerHTML = data[0].capital[0];
      cont.innerHTML = data[0].continents[0];
      pop.innerHTML = data[0].population;

      console.log(data[0]);
    });
}
