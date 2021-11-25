$(function () {
  const termekek = [];
  let fajlnev = "termekek.json";
  getAjax(fajlnev, termekek, kiir);

  $(window).on("modositas", (event) => {
    console.log("modositas");
    console.log(event.detail);
  });

  $(window).on("torles", (event) => {
    console.log("torles");
    console.log(event.detail);
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
      let termek = new TermekAdmin(ujElem, tombelem);
    });
    sablonElem.remove();
  }
});
