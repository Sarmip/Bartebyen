
let myObj = [
  {
    'overskrift': "Baristakurs",
    'kontekst': "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    'bildet': ["img/baristakurs.jpg", "Baristakurs"],
    'value': 670
  },
  {
    'overskrift': "Byvandring",
    'kontekst': "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    'bildet': ["img/byvandring.jpg", "Byvandring"],
    'value': 750

  },
  {
    'overskrift': "Fotosafari",
    'kontekst': "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    'bildet': ["img/fotosafari.jpg", "Fotosafari"],
    'value': 400
  },
  {
    'overskrift': "Hyttetur",
    'kontekst': "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    'bildet': ["img/hyttetur.jpg", "Hyttetur"],
    'value': 2300
  },
  {
    'overskrift': "Nidarosdomen",
    'kontekst': "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    'bildet': ["img/nidarosdomen.jpg", "Nidarosdomen"],
    'value': 300
  }

]

for (let x of myObj){
  console.log(x)
  let wrapper = document.createElement("div")
  wrapper.setAttribute("class", "pakketilbud")
  let img = document.createElement("img")
  img.setAttribute("class","imgpakketilbud")
  img.setAttribute("src",x.bildet[0])
  img.setAttribute("alt",x.bildet[1])
  let div = document.createElement("div")
  div.setAttribute("class", "contentpakke")
  let h2 = document.createElement("h2")
  h2.setAttribute("class", "headerpakke")
  let p = document.createElement("p")

  let link = document.createElement("a")
  link.setAttribute("href", "bestilling.html")
  let knapp = document.createElement("input")
  knapp.setAttribute("class", "bestill")
  knapp.setAttribute("type", "button")
  knapp.setAttribute("name", "bestill")
  knapp.setAttribute("value", "Bestill")
  knapp.setAttribute("onclick", `setLocalStorage(${x.value})`)

  link.appendChild(knapp)


  div.appendChild(h2)
  div.appendChild(p)
  div.appendChild(link)
  wrapper.appendChild(img)
  wrapper.appendChild(div)
  document.body.appendChild(wrapper)


  h2.innerHTML = x.overskrift
  p.innerHTML = x.kontekst

  function setLocalStorage(number){
    localStorage.setItem("selectedPakketilbud", number);
  }

  // Check browser support
  if (typeof(Storage) !== "undefined") {
    // Store
    localStorage.setItem("selectedPakketilbud", x.value);
    // Retrieve
    // document.getElementById("result").innerHTML = localStorage.getItem("selectedPakketilbud");
    console.log(localStorage.getItem("selectedPakketilbud"));
  }
}
