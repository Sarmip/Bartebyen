
function footerFunk() {
  let footer = document.createElement("footer")
  footer.setAttribute("id", "footer")

  let img = document.createElement("img")
  img.setAttribute("id", "logofooter")
  img.setAttribute("src", "img/logo.gif")
  img.setAttribute("alt", "logo")

  let div1 = document.createElement("div")
  div1.setAttribute("class", "kontakt")
  div1.innerHTML = "Kontakt: <br> +47 123 45 678 <br>kontakt@bartebyen.no"

  let div2 = document.createElement("div")
  div2.setAttribute("class", "adresse")
  div2.innerHTML = "Adresse: <br> Bartebyen AS <br> Bartebyen 1 <br> 7013 Trondheim"

  /*div1.appendChild(tekst1)
  div2.appendChild(tekst2)*/
  footer.appendChild(img)
  footer.appendChild(div1)
  footer.appendChild(div2)
  document.body.appendChild(footer)
  console.log("blabla")
}

footerFunk();
