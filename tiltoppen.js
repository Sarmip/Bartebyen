/*lager til toppen html koden*/
let toppbtn = document.createElement("button")
toppbtn.setAttribute("id", "tiltoppen")
toppbtn.setAttribute("title", "Til toppen")
toppbtn.setAttribute("onclick", "toppenFunksjon()")
toppbtn.innerHTML = "^"

document.body.appendChild(toppbtn)



/* BRUKT w3 School: (legg inn link) for å lage dette */

/* Lager en funksjon som gjør slik at knappen skal dukke opp når brukeren scroller 20px nedover siden. */
window.onscroll = function() {displaybtn()};

function displaybtn() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
    toppbtn.style.display = "block";
  } else {
    toppbtn.style.display = "none";
  }
}

/* Lager en funksjon som gjør at når brukeren trykker på knappen blir siden scrollet opp til toppen igjen. */

function toppenFunksjon(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
