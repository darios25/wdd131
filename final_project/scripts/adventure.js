
// Show current year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Show last modified date in footer
document.getElementById("last-modified").textContent = document.lastModified;


const cities = [

  {
    location: "Palermo",
    imageUrl: "images/alto cattedrale.jpg" ,
    data:"Visit the roofs of the most beautiful historical buildings to see the beauty of Palermo from above.",
  },

  {
    location:"Catania",
    imageUrl: "images/escursione etna.jpg",
    data: "We will take you to the top of the highest active volcano on the Eurasian plate, height: 3,403 m."
  },

  {
    location:"Noto",
    imageUrl: "images/infiorata noto.jpg",
    data: "Every year the third Sunday of May is dedicated to the infiorata event of the city of Noto. With balconies that have been defined by many as the most beautiful in the world, today the infiorata of Noto is considered among the most beautiful events of the entire Island."
  },

  {
    location: "Mercati",
    imageUrl: "images/mercato-ballaro.jpg",
    data: "Ballarò is a well-known historical market in Palermo, together with others called Vucciria, Il Capo, Lattarini and the Flea Market."
  },

  {
    location: "Street food",
    imageUrl: "images/streetfood.jpg",
    data: "Try the goodness of Sicilian cuisine, one of the most famous and good cuisines in the world!, including delicious typical island desserts such as cannoli and cassate, fresh fish dishes, traditional arancini and ancient recipes handed down for more than a thousand years!.."
  },

  {
    location: "Mare e Sole",
    imageUrl: "images/san-vito-lo-capo.jpg",
    data: "Come and relax by immersing yourself in nature in one of the most beautiful and clean seas in the world, with its beaches kissed by the sun that make them golden."
  },

  {
    location: "Scuba diving",
    imageUrl: "images/immersione0.jpg",
    data: "For scuba diving lovers, Sicily with its sea offers a rich variety of marine vegetation and a rich quantity of clear, clean and safe seabeds to give you unforgettable emotions."
  },

]


// Mostra l'anno corrente nel footer
document.getElementById("year").textContent = new Date().getFullYear();

// Mostra la data dell'ultima modifica nel footer
document.getElementById("last-modified").textContent = document.lastModified;


const trips = document.querySelector("#trips-details");


cities.forEach(city => {
  const figure = document.createElement("figure");

  const image = document.createElement("img");
  image.src = city.imageUrl;
  image.alt = city.location;
  image.loading = "lazy"
  image.style.display = "block";
  image.style.width = "100%";

  //  figure.style.position = "relative";


  const figcaption = document.createElement("figcaption");

  const info = document.createElement("p");
  info.innerHTML = ` ${city.data} `;
  //  info.style.position = "absolute";
  info.style.color = "black";
  info.style.padding = "5px";
  info.style.width = "100%";
  info.style.textAlign = "center";
  info.style.fontSize = "small";


  image.src = city.imageUrl;
  image.alt = city.location;
  figcaption.textContent = city.location
  figcaption.style.fontSize = "1.5rem"

  figure.appendChild(figcaption);
  figure.appendChild(info);
  figure.appendChild(image);

  trips.appendChild(figure);
});