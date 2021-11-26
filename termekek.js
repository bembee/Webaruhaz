class Termek {
  constructor(elem, adat) {
    this.elem = elem;
    this.adat = adat;
    this.cimElem = this.elem.children(".termeknev");
    this.leirasElem = this.elem.children(".leiras");
    this.arElem = this.elem.children(".ar");
  }

  setAdat(ertek) {
    this.adat = ertek;
    this.cimElem.text(ertek.nev);
    this.kepElem.attr("src", ertek.kep);
    this.leirasElem.text(ertek.leiras);
    this.arElem.text(ertek.ar + " Ft");
  }
  kattintasTrigger(esemenyneve) {

    let esemeny = new CustomEvent(esemenyneve, {

        detail: this.adat, //ezzel adatokat tudok átadni
    });
    window.dispatchEvent(esemeny); // A főablakhoz adom az eseményt,
    //Az eseményt majd a script.js-ben el tudom kapni.
}
}

class TermekVasarlo extends Termek {
  constructor(elem, adat) {
    super(elem, adat);
    this.kepElem = this.elem.children(".kep");
    this.kosarbaElem = this.elem.children(".kosarba");
    this.setAdat(this.adat);
    this.kosarbaElem.on("click", () => {
      this.kattintasTrigger("termekKosarba");
    });
  }
}

class TermekAdmin extends Termek {
  constructor(elem, adat) {
    super(elem, adat);
    this.kepElem = this.elem.children(".kep").children("img");
    this.setAdat(this.adat);
    this.torlesElem = this.elem.children("td").children(".torol");
    this.modositElem = this.elem.children("td").children(".modosit");
    this.meglevoModositElem = $("#ment");
    this.torlesElem.on("click", () => {
      this.kattintasTrigger("torles");
    });
    this.modositElem.on("click", () => {
      this.kattintasTrigger("modositas");
    });
  }
}
