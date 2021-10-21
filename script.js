$(function () {
  const termekek = [];
  let fajlnev = "termekek.json";
  adatbetolt(fajlnev, termekek);

  function adatbetolt(fajlnev, tomb) {
    $.ajax({
      url: fajlnev,
      success: function (result) {
        result.forEach((element) => {
          tomb.push(element);
        });
        megjelenit(tomb);
      },
    });
  }

  function megjelenit(tomb) {
    let txt = "";
    tomb.forEach((element) => {
      txt += "<div id=termek>";
      for (const key in element) {
        if (key == "nev") {
          txt += "<h3>" + element[key] + "</h3>";
        }
        if (key == "kep") {
          txt += '<img src="' + element[key] + '"></img>';
        }
        if (key == "leiras") {
          txt += "<p>" + element[key] + "</p>";
        }
        if (key == "ar") {
          txt += "<span>" + element[key] + " Ft</span>";
        }
      }
      txt += "</div>";
    });
    console.log(txt);
    $("#termekek").append(txt);
  }
});
