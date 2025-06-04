
// Hamburger menu management
document.getElementById("menu-toggle").addEventListener("click", function () {
  let navMenu = document.getElementById("nav-menu");
  navMenu.style.display = (navMenu.style.display === "flex") ? "none" : "flex";
});

// Show current year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Show last modified date in footer
document.getElementById("last-modified").textContent = document.lastModified;


const temples = [

  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  // Add more temple objects here...
  {
    templeName: "Rome Italy",
    location: "Rome, Italy",
    dedicated: "2019, March, 12",
    area: 41010,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-3544.jpg"
  },

  {
    templeName: "Bern switzerland",
    location: "Bern, Switzerland",
    dedicated: "1955, september, 11",
    area: 35546,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/bern-switzerland-temple/bern-switzerland-temple-3077.jpg"
  }
];

// Gestione del menu hamburger
document.getElementById("menu-toggle").addEventListener("click", function () {
  let navMenu = document.getElementById("nav-menu");
  navMenu.style.display = (navMenu.style.display === "flex") ? "none" : "flex";
});

// Mostra l'anno corrente nel footer
document.getElementById("year").textContent = new Date().getFullYear();

// Mostra la data dell'ultima modifica nel footer
document.getElementById("last-modified").textContent = document.lastModified;


const gallery = document.querySelector(".gallery");

// function filterTemples(criteria) {
//     gallery.innerHTML = "";
//     let filteredTemples = temples.filter(temple => {
//         if (criteria === "Old") return parseInt(temple.dedicated.split(",")[0]) < 1900;
//         if (criteria === "New") return parseInt(temple.dedicated.split(",")[0]) > 2000;
//         if (criteria === "Large") return temple.area > 90000;
//         if (criteria === "Small") return temple.area < 10000;
//         return true; // Default case for "Home"
//     });

//     filteredTemples.forEach(temple => {
//         const figure = document.createElement("figure");
//         const image = document.createElement("img");
//         image.src = temple.imageUrl;
//         image.alt = temple.templeName;
//         image.style.width = "100%";
//     });

temples.forEach(temple => {
  const figure = document.createElement("figure");

  const image = document.createElement("img");
  image.src = temple.imageUrl;
  image.alt = temple.templeName;
  image.style.display = "block";
  image.style.width = "100%";

  //  figure.style.position = "relative";


  const figcaption = document.createElement("figcaption");

  const info = document.createElement("p");
  info.innerHTML = `<span>Location:</span> ${temple.location}<br> <span>Dedicated:</span> ${temple.dedicated}<br> <span>Area:</span> ${temple.area} mq`;
  //  info.style.position = "absolute";
  info.style.color = "black";
  info.style.padding = "5px";
  info.style.width = "100%";
  info.style.textAlign = "center";
  info.style.fontSize = "small";


  image.src = temple.imageUrl;
  image.alt = temple.templeName;
  figcaption.textContent = temple.templeName
  figcaption.style.fontSize = "1.5rem"

  figure.appendChild(figcaption);
  figure.appendChild(info);
  figure.appendChild(image);

  gallery.appendChild(figure);
});

// document.getElementById("nav-menu").addEventListener("click", function(event) {
//     if (event.target.tagName === "BUTTON") {
//         filterTemples(event.target.dataset.filter);
//     }
// });
// }

function ShowOld() {

  gallery.textContent = ""
  temples.forEach(temple => {
    const figure = document.createElement("figure");
    let dateBuild = temple.dedicated
    const dateSplit = dateBuild.split(",")
    const year = dateSplit[0]


    if (parseInt(year) < 1900) {
      const image = document.createElement("img");
      image.src = temple.imageUrl;
      image.alt = temple.templeName;
      image.style.display = "block";
      image.style.width = "100%";

      //  figure.style.position = "relative";


      const figcaption = document.createElement("figcaption");

      const info = document.createElement("p");
      info.innerHTML = `<span>Location:</span> ${temple.location}<br> <span>Dedicated:</span> ${temple.dedicated}<br> <span>Area:</span> ${temple.area} mq`;
      //  info.style.position = "absolute";
      info.style.color = "black";
      info.style.padding = "5px";
      info.style.width = "100%";
      info.style.textAlign = "center";
      info.style.fontSize = "small";


      image.src = temple.imageUrl;
      image.alt = temple.templeName;
      figcaption.textContent = temple.templeName
      figcaption.style.fontSize = "1.5rem"

      figure.appendChild(figcaption);
      figure.appendChild(info);
      figure.appendChild(image);

      gallery.appendChild(figure);
    }
  })
}
function ShowNew() {

  gallery.textContent = ""
  temples.forEach(temple => {
    const figure = document.createElement("figure");
    let dateBuild = temple.dedicated
    const dateSplit = dateBuild.split(",")
    const year = dateSplit[0]


    if (parseInt(year) > 2000) {
      const image = document.createElement("img");
      image.src = temple.imageUrl;
      image.alt = temple.templeName;
      image.style.display = "block";
      image.style.width = "100%";

      //  figure.style.position = "relative";


      const figcaption = document.createElement("figcaption");

      const info = document.createElement("p");
      info.innerHTML = `<span>Location:</span> ${temple.location}<br> <span>Dedicated:</span> ${temple.dedicated}<br> <span>Area:</span> ${temple.area} mq`;
      //  info.style.position = "absolute";
      info.style.color = "black";
      info.style.padding = "5px";
      info.style.width = "100%";
      info.style.textAlign = "center";
      info.style.fontSize = "small";


      image.src = temple.imageUrl;
      image.alt = temple.templeName;
      figcaption.textContent = temple.templeName
      figcaption.style.fontSize = "1.5rem"

      figure.appendChild(figcaption);
      figure.appendChild(info);
      figure.appendChild(image);

      gallery.appendChild(figure);
    }
  })
}
function ShowLarge() {

  gallery.textContent = ""
  temples.forEach(temple => {
    const figure = document.createElement("figure");
    let areaBuild = String(temple.area);
    const areaSplit = areaBuild.split(",") ? areaBuild.split(",") : [areaBuild]; 


    const area = areaSplit[0]


    if (parseInt(area) > 90000) {
      const image = document.createElement("img");
      image.src = temple.imageUrl;
      image.alt = temple.templeName;
      image.style.display = "block";
      image.style.width = "100%";

      //  figure.style.position = "relative";


      const figcaption = document.createElement("figcaption");

      const info = document.createElement("p");
      info.innerHTML = `<span>Location:</span> ${temple.location}<br> <span>Dedicated:</span> ${temple.dedicated}<br> <span>Area:</span> ${temple.area} mq`;
      //  info.style.position = "absolute";
      info.style.color = "black";
      info.style.padding = "5px";
      info.style.width = "100%";
      info.style.textAlign = "center";
      info.style.fontSize = "small";


      image.src = temple.imageUrl;
      image.alt = temple.templeName;
      figcaption.textContent = temple.templeName
      figcaption.style.fontSize = "1.5rem"

      figure.appendChild(figcaption);
      figure.appendChild(info);
      figure.appendChild(image);

      gallery.appendChild(figure);
    }
  })
}
function ShowSmall() {

  gallery.textContent = ""
  temples.forEach(temple => {
    const figure = document.createElement("figure");
    let areaBuild = String(temple.area);
    const areaSplit = areaBuild.split(",") ? areaBuild.split(",") : [areaBuild]; // Gestisci il caso senza virgole


    const area = areaSplit[0]


    if (parseInt(area) < 10000) {
      const image = document.createElement("img");
      image.src = temple.imageUrl;
      image.alt = temple.templeName;
      image.style.display = "block";
      image.style.width = "100%";

      //  figure.style.position = "relative";


      const figcaption = document.createElement("figcaption");

      const info = document.createElement("p");
      info.innerHTML = `<span>Location:</span> ${temple.location}<br> <span>Dedicated:</span> ${temple.dedicated}<br> <span>Area:</span> ${temple.area} mq`;
      //  info.style.position = "absolute";
      info.style.color = "black";
      info.style.padding = "5px";
      info.style.width = "100%";
      info.style.textAlign = "center";
      info.style.fontSize = "small";


      image.src = temple.imageUrl;
      image.alt = temple.templeName;
      figcaption.textContent = temple.templeName
      figcaption.style.fontSize = "1.5rem"

      figure.appendChild(figcaption);
      figure.appendChild(info);
      figure.appendChild(image);

      gallery.appendChild(figure);
    }
  })
}
function ShowHome(){
  temples.forEach(temple => {
  const figure = document.createElement("figure");

  const image = document.createElement("img");
  image.src = temple.imageUrl;
  image.alt = temple.templeName;
  image.style.display = "block";
  image.style.width = "100%";

  //  figure.style.position = "relative";


  const figcaption = document.createElement("figcaption");

  const info = document.createElement("p");
  info.innerHTML = `<span>Location:</span> ${temple.location}<br> <span>Dedicated:</span> ${temple.dedicated}<br> <span>Area:</span> ${temple.area} mq`;
  //  info.style.position = "absolute";
  info.style.color = "black";
  info.style.padding = "5px";
  info.style.width = "100%";
  info.style.textAlign = "center";
  info.style.fontSize = "small";


  image.src = temple.imageUrl;
  image.alt = temple.templeName;
  figcaption.textContent = temple.templeName
  figcaption.style.fontSize = "1.5rem"

  figure.appendChild(figcaption);
  figure.appendChild(info);
  figure.appendChild(image);

  gallery.appendChild(figure);
});

}

