import "./byeie"; // loučíme se s IE

window.addEventListener("message", function (a) {
  if (void 0 !== a.data["cro-embed-height"])
    for (var e in a.data["cro-embed-height"])
      if ("cro_fotbal_tipovacka" == e) {
        var d = document.querySelector("#cro_fotbal_tipovacka");
        d && (d.style.height = a.data["cro-embed-height"][e] + "px");
      }
});

/*
// snadné načtení souboru pro každého!
fetch("https://blabla.cz/blabla.json")
  .then(response => response.json()) // nebo .text(), když to není json
  .then(data => {
    // tady jde provést s daty cokoliv
  });
*/
