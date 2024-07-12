mapboxgl.accessToken =
  "pk.eyJ1IjoiZGlhbmF2aWxlIiwiYSI6ImNqaWZ0bm1ycDEwZmczcXFsYTBpOXVtMTgifQ.aLCSo3xuIkz9e4RGzbFIpg"

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHighAccuracy: true
})

function successLocation(position) {
  setupMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation() {
  setupMap([-2.24, 53.48])
}

function setupMap(center) {
  const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: center,
    zoom: 15
  })

  const nav = new mapboxgl.NavigationControl()
  map.addControl(nav)

  var directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken
  })

  map.addControl(directions, "top-left")
}

function performSearch(query) {
    // Perform the search (integrate with your existing search functionality)
    console.log(`Searching for: ${query}`);
    
    // Save search query to local storage
    saveSearchQuery(query);
  }
  
  function saveSearchQuery(query) {
    let searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
    searchHistory.push(query);
    localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
  }
  
  document.getElementById('searchButton').addEventListener('click', () => {
    const query = document.getElementById('searchInput').value;
    performSearch(query);
  });
  