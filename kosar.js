class Kosar {
  constructor() {
    this.kosarElem = $("#kosaram");
    this.osszarElem = $("#osszar");
    this.kosarTomb = [];

    //kiolvasás localstorage-ból
    this.kosarTomb = JSON.parse(localStorage.getItem("kosartomb"));
    this.megjelenit();

    this.kosarElem.on("click", ".torol", (event) => {
      let id = $(event.target).attr("data-id");
      console.log(id);
      this.kosarTomb.splice(id, 1);
      localStorage.setItem("kosartomb", JSON.stringify(this.kosarTomb));
      this.megjelenit();
    });
  }
  setKosar(adat) {
    this.kosarTomb.push(adat);
    //localstorage
    localStorage.setItem("kosartomb", JSON.stringify(this.kosarTomb));
    this.megjelenit();
  }

  megjelenit() {
    let osszeg = 0;
    let txt = "<table>";
    this.kosarTomb.forEach((element, index) => {
      txt += "<tr>";
      for (const key in element) {
        if (key !== "id") {
          txt += "<td>" + element[key] + "</td>";
        }
      }
      txt +=
        "<td><button class='torol' data-id='" +
        index +
        "'>X</button ></td></tr>";
      osszeg += Number(element.ar);
    });
    txt += "</table>";
    this.kosarElem.html(txt);
    this.osszarElem.html(osszeg + " Ft");
  }
}
