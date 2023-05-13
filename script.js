const namediv = document.getElementById("name");

async function loadNames() {
  const response = await fetch(
    "https://polite-conkies-75f54b.netlify.app/.netlify/functions/api/lingo"
  );
  const lingo = await response.json();
  namediv.textContent = lingo.name;
}

namediv.addEventListener("click", async () => {
  const response = await fetch(
    "https://polite-conkies-75f54b.netlify.app/.netlify/functions/api/hobbit"
  );
  const hobbit = await response.json();
  namediv.textContent = hobbit.name;
});

const locationdiv = document.getElementById("location");
locationdiv.addEventListener("click", () => {
  console.log("dings");
  document.body.innerHTML = '<div id="map"></div>';
  loadLocation();
});

const loadLocation = () => {
  const L = window.L;
  const map = L.map("map").setView([45.508888, -73.561668], 7);

  L.tileLayer(
    "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
  ).addTo(map);
  const coords = [65.476721, -173.511416];
  map.flyTo(coords, 18);
  const control = document.getElementsByClassName("leaflet-control-zoom");
  control[0].style.visibility = "hidden";
};

loadNames();
