$(function () {
  const termekek = [];
  let fajlnev = "termekek.json";
  const kosar = new Kosar();
  getAjax(fajlnev, termekek, kiir);

  $(window).on("kosarba", (event) => {
  kosar.setKosar(event.detail);
    
  });

  function getAjax(fajlnev, tomb, myCallback) {
    $.ajax({
      url: fajlnev,
      success: function (result) {
        result.termek.forEach((element) => {
          tomb.push(element);
        });
        myCallback(tomb);
      },
    });
  }

  function kiir(tomb) {
    const szuloElem = $(".termekek");
    const sablonElem = $(".termek");
    tomb.forEach(function (tombelem) {
      let ujElem = sablonElem.clone().appendTo(szuloElem);
      let termek = new TermekVasarlo(ujElem, tombelem);
    });
    sablonElem.remove();
  }
});
