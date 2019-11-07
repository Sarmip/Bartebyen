
console.log("Hei funker jeg")

let header = document.createElement("header")
let div = document.createElement("div")
div.setAttribute("class", "nav")



let forside = document.createElement("a")
forside.setAttribute("href", "forside.html")   //source: https://www.w3schools.com/jsref/met_element_setattribute.asp
let img = document.createElement("img")

// forside.setAttribute("title", "hjem")


img.setAttribute("id", "logo")
img.setAttribute("src","img/logo.gif")
img.setAttribute("alt", "logo")

forside.appendChild(img) //legget til bildet i link elemente

let mobile_menu = document.createElement("div")
mobile_menu.setAttribute("id", "mobile_menu")

let ul = document.createElement("ul")
let li1 = document.createElement("li")
let li2 = document.createElement("li")
let li3 = document.createElement("li")
let li4 = document.createElement("li")
let li5 = document.createElement("li")

ul.appendChild(li1)
ul.appendChild(li2)
ul.appendChild(li3)
ul.appendChild(li4)
ul.appendChild(li5)

mobile_menu.appendChild(ul)



let pakketilbud = document.createElement("a")
pakketilbud.href = "pakketilbud.html"
let pt = document.createTextNode("Pakketilbud")
pakketilbud.appendChild(pt)
li1.appendChild(pakketilbud)
let bestilling = document.createElement("a")
bestilling.href = "bestilling.html"
bestilling.setAttribute("onclick","localStorage.clear()")
let b = document.createTextNode("Bestilling")
bestilling.appendChild(b)
li2.appendChild(bestilling)
let tips = document.createElement("a")
tips.href = "tips.html"
let t = document.createTextNode("Tips")
tips.appendChild(t)
li3.appendChild(tips)
let kontakt = document.createElement("a")
kontakt.href = "om.html"
let k = document.createTextNode("Om oss")
kontakt.appendChild(k)
li4.appendChild(kontakt)
let galleri = document.createElement("a")
galleri.href = "galleri.html"
let g = document.createTextNode("Galleri")
galleri.appendChild(g)
li5.appendChild(galleri)

let hamburger=document.createElement("a")
hamburger.setAttribute("href","javascript:void(0);")
hamburger.setAttribute("class","icon")
hamburger.setAttribute("onclick","myFunction()")
let i =document.createElement("i")
i.setAttribute("class","fa fa-bars")
hamburger.appendChild(i)


div.appendChild(forside)
div.appendChild(mobile_menu)
div.appendChild(hamburger)
header.appendChild(div)
document.body.prepend(header)

function myFunction() {
    let x = document.getElementById("mobile_menu");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
} /*hentet fra W3 school*/
