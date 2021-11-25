class Termek {
  constructor(elem, adat) {
    this.elem = elem;
    this.adat = adat;
    this.cimElem = this.elem.children(".termeknev");
    this.leirasElem = this.elem.children(".leiras");
    this.arElem = this.elem.children(".ar");
  }

  setAdat(ertek) {
    console.log(ertek);
    this.cimElem.html(ertek.nev);
    this.kepElem.html("src", ertek.kep);
    this.leirasElem.html(ertek.leiras);
    this.arElem.html(ertek.ar);
  }
}

class TermekVasarlo extends Termek {
  constructor(elem, adat) {
    super(elem, adat);
    this.kepElem = this.elem.children(".kep");
    this.kosarbaElem = this.elem.children(".kosarba");
    this.setAdat(this.adat);
    this.kosarbaElem.on("click", () => {
      this.kattintasTrigger();
    });
  }
  kattintasTrigger() {
    let esemeny = new CustomEvent("kosarba", {
      detail: this.adat,
    });
    window.dispatchEvent(esemeny);
  }
}

class TermekAdmin extends Termek {
  constructor(elem, adat) {
    super(elem, adat);
    this.kepElem = this.elem.children(".kep").children("img");
    this.setAdat(this.adat);
    this.torlesElem = this.elem.children("td").children(".torol");
    this.modositElem = this.elem.children("td").children(".modosit");
    this.torlesElem.on("click", () => {
      this.torolTrigger();
    });
    this.modositElem.on("click", () => {
      this.modositTrigger();
    });
  }
  torolTrigger() {
    let esemeny = new CustomEvent("torles", {
      detail: this.adat,
    });
    window.dispatchEvent(esemeny);
  }
  modositTrigger() {
    let esemeny = new CustomEvent("modositas", {
      detail: this.adat,
    });
    window.dispatchEvent(esemeny);
  }
}
