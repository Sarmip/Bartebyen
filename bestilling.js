function visPris() {
    var pakke = document.getElementById("pakketilbud");
    var pakkePris = pakke.options[pakke.selectedIndex].value;
    var deltakere = document.getElementById("deltakere").value;
    var pris = Number(pakkePris) * Number(deltakere);
    document.getElementById("pris").value = pris + " NOK";
    /*if (deltakere == 0) {
      document.getElementById("pris").value = "Velg antall deltakere"
    }*/
}

function bekreftelse() {
    event.preventDefault(); // Gjør at siden ikke refresher når man submitter
    var bekreftelse = document.getElementById("bekreftelse");
    bekreftelse.style.display = "block";
}

function visMail() {
    var mail = document.getElementById("epost").value;
    brukermail.innerHTML = "på " + mail;
}

//if (typeof(Storage) !== "undefined") {
  // Store
  //localStorage.setItem("selectedPakketilbud", x.value);
  // Retrieve
  // document.getElementById("result").innerHTML = localStorage.getItem("selectedPakketilbud");
  // console.log(localStorage.getItem("selectedPakketilbud"));
  document.getElementById("pakketilbud").value = localStorage.getItem("selectedPakketilbud");
  document.getElementById("deltakere").value = 1;
//} else {
  // document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
  //console.log("Sorry, your browser does not support Web Storage...")
