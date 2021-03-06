class ajaxHivas {
    constructor() {}
    getAjax(fajlnev, myCallback) {
      const termekek = [];
      $.ajax({
        url: fajlnev,
        type: "GET",
        success: function (result) {
          result.forEach((element) => {
            termekek.push(element);
          });
  
          myCallback(termekek);
        },
      });
    }
  
    postAjax(fajlnev, adat) {
      const termekek = [];
      $.ajax({
        url: fajlnev,
        type: "POST",
        data: adat,
        success: function (result) {},
      });
    }
    putAjax(fajlnev, id, adat) {
      const termekek = [];
      $.ajax({
        url: fajlnev + "/" + id,
        type: "PUT",
        data: adat,
        success: function (result) {},
      });
    }
    deleteAjax(fajlnev, id) {
      const termekek = [];
      $.ajax({
        url: fajlnev + "/" + id,
        type: "DELETE",
        success: function (result) {},
      });
    }
  }
  