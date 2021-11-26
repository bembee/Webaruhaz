$(function () {
  let apiVegpont = "http://localhost:3000/termekek";
  const ajaxHiv = new ajaxHivas();
  ajaxHiv.getAjax(apiVegpont, kiir);
  let termekID = 0;

  function kiir(tomb) {
    const szuloElem = $(".termekek");
    const sablonElem = $(".termek");
    tomb.forEach(function (tombelem) {
      let ujElem = sablonElem.clone().appendTo(szuloElem);
      let termek = new TermekAdmin(ujElem, tombelem);
    });
    sablonElem.remove();
  }

  $(window).on("modositas", (event) => {
    termekID = event.detail.id;
    $("#termeknev").val(event.detail.nev);
    $("#leiras").val(event.detail.leiras);
    $("#ar").val(event.detail.ar);
  });

  $(window).on("torles", (event) => {
    var id = event.detail.id;
    ajaxHiv.deleteAjax(apiVegpont, id);
  });

  $("#ment").on("click", function () {
    let txt = {
      nev: $("#termeknev").val(),
      leiras: $("#leiras").val(),
      ar: $("#ar").val(),
      kep: $("#kep").val(),
    };
    console.log("teszt");
    ajaxHiv.putAjax(apiVegpont, termekID, txt);
  });

  $("#ujElem").on("click", function () {
    let txt = {
      nev: $("#termeknev").val(),
      leiras: $("#leiras").val(),
      ar: $("#ar").val(),
      kep: $("#kep").val(),
    };
    console.log("teszt");
    ajaxHiv.postAjax(apiVegpont, txt);
  });
});
