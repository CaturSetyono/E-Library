

function addReference(figcaption) {
  const figure = figcaption.parentNode;
  const judul = figure.querySelector(".title").textContent;
  const link = figure.querySelector(".link").href;
  const table = document.getElementById("myTable");
  const newRow = table.insertRow(-1);
  const cell1 = newRow.insertCell(0);
  cell1.innerHTML = '<a href="' + link + '">' + judul + "</a>";
}