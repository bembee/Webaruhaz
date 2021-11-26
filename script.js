$(function () {
  const kosar = new Kosar();

  let apiVegpont = "http://localhost:3000/termekek";
  const ajaxHiv = new ajaxHivas();
  ajaxHiv.getAjax(apiVegpont, termekLista);

  function termekLista(termekek) {
    const szuloElem = $(".termekek");
    const sablonElem = $(".sablon .termek");
    szuloElem.empty();
    sablonElem.show();
    termekek.forEach(function (elem) {
      let node = sablonElem.clone().appendTo(szuloElem);
      const obj = new TermekVasarlo(node, elem);
    });
    sablonElem.hide();
  }

  $("#kereses").on("keyup", function () {
    adat = $("#kereses").val();
    ajaxHiv.getAjax(
      "http://localhost:3000/termekek" + "?q=" + adat,
      termekLista
    );
  });
    $(window).on("termekKosarba", (event) => {
    kosar.setKosar(event.detail);
  });
});
