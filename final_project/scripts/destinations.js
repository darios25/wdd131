
// Hamburger menu management
// document.getElementById("menu-toggle").addEventListener("click", function () {
//   let navMenu = document.getElementById("nav-menu");
//   navMenu.style.display = (navMenu.style.display === "flex") ? "none" : "flex";
// });

// Show current year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Show last modified date in footer
document.getElementById("last-modified").textContent = document.lastModified;


const cities = [

  {
    location: "Palermo",
    imageUrl:"images/palermo-sicilia.jpg",
    data:"Palermo is the capital of Sicily. The 12th-century Palermo Cathedral houses royal tombs, while the imposing neoclassical Teatro Massimo is famous for its opera performances. Also in the center are the Palazzo dei Normanni, a 9th-century royal palace, and the Cappella Palatina, with Byzantine mosaics. Busy markets include the central street market Ballarò and Vucciria, near the port.",
  },

  {
    location:"Catania",
    imageUrl: "images/Catania_-_Piazza_Duomo_03.jpg",
    data: "Catania is an ancient port city on the eastern coast of Sicily. It is located at the foot of Mount Etna, an active volcano with trails leading to its summit. The city's large central square, Piazza del Duomo, is characterized by the picturesque Elephant Fountain statue and the richly decorated Cathedral. In the southwestern corner of the square, La Pescheria, the weekday fish market, is a noisy spectacle surrounded by seafood restaurants."
  },

  {
    location:"Cefalu'",
    imageUrl: "images/View_of_Cefalu.jpg",
    data: "Cefalù is a coastal town in northern Sicily. It is known for its Norman cathedral, a 12th-century fortress-like structure with elaborate Byzantine mosaics and tall twin towers. Nearby, the Mandralisca Museum offers archaeological exhibits and an art gallery with a portrait of Antonello da Messina. The beaches of Mazzaforno and Settefrati lie to the west."
  },

  {
    location: "Noto",
    imageUrl: "images/citta-barocca-noto-5-560x557.jpg",
    data: "It is the first Sicilian municipality in terms of territorial extension, the fourth at a national level. Episcopal seat, defined as the capital of the Baroque, in 2002 its historical centre was declared a World Heritage Site by UNESCO, together with the other late Baroque cities of the Val di Noto."
  },

  {
    location: "Taormina",
    imageUrl: "images/taormina-sicilia.jpg",
    data: "Taormina is a hilltop town on the eastern coast of Sicily. It is located near Mount Etna, an active volcano with trails to the summit. The town is known for the Teatro Antico di Taormina, an ancient Greco-Roman theater that is still in operation today. Near the theater, cliffs that slope down to the sea form coves with sandy beaches. A narrow strip of sand connects to the tiny Isola Bella, which is a nature reserve."
  },

  {
    location: "Sciacca",
    imageUrl: "images/sciacca.jpeg",
    data: "Sciacca is an Italian municipality of 38,442 inhabitants of the free municipal consortium of Agrigento in Sicily. It is the most populous municipality in the province after the capital. A maritime, tourist and spa city, rich in monuments and churches. It is known for its historic carnival and for ceramics."
  },

]



    // Gestione del menu hamburger
// document.getElementById("menu-toggle").addEventListener("click", function () {
//   let navMenu = document.getElementById("nav-menu");
//   navMenu.style.display = (navMenu.style.display === "flex") ? "none" : "flex";
// });

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
  // info.style.textAlign = "center";
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