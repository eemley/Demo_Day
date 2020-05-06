// Function to determine marker size based on population
function markerSize1(ranking) {
  return ranking * 10000;
}
function markerSize2(tourists) {
  return tourists / 40;
}

// An array containing all of the information needed to create city and state markers
var locations = [
  {
    coordinates: [22.3027, 114.1772],
    country: {
      name: "China",
      ranking: 1
    },
    city: {
      name: "Hong Kong",
      tourists: 29262000
    }
  },
  {
    coordinates: [13.7367, 100.5231],
    country: {
      name: "Thailand",
      ranking: 2
    },
    city: {
      name: "Bangkok",
      tourists: 24177000
    }
  },
  {
    coordinates: [51.5098, -0.1180],
    country: {
      name: "United Kingdom",
      ranking: 3
    },
    city: {
      name: "London",
      tourists: 19233000
    }
  },
  {
    coordinates: [22.2109, 113.5529],
    country: {
      name: "China",
      ranking: 4
    },
    city: {
      name: "Macau",
      tourists: 18931
    }
  },
  {
    coordinates: [1.2902, 103.8519],
    country: {
      name: "Singapore",
      ranking: 5
    },
    city: {
      name: "Singapore",
      tourists: 18551000
    }
  },
  {
    coordinates: [48.8647, 2.3490],
    country: {
      name: "France",
      ranking: 6
    },
    city: {
      name: "Paris",
      tourists: 17560000
    }
  },
  {
    coordinates: [25.2769, 55.2962],
    country: {
      name: "United Arab Emirates",
      ranking: 7
    },
    city: {
      name: "Dubai",
      tourists: 15920000
    }
  },
  {
    coordinates: [40.7306, -73.9352],
    country: {
      name: "United States of America",
      ranking: 8
    },
    city: {
      name: "New York City",
      tourists: 13600000
    }
  },
  {
    coordinates: [3.1528, 101.7036],
    country: {
      name: "Malaysia",
      ranking: 9
    },
    city: {
      name: "Kuala Lumpur",
      tourists: 13434000
    }
  },
  {
    coordinates: [41.0151, 28.9795],
    country: {
      name: "Turkey",
      ranking: 10
    },
    city: {
      name: "Istanbul",
      tourists: 13433000
    }
  },
  {
    coordinates: [28.6100, 77.2300],
    country: {
      name: "India",
      ranking: 11
    },
    city: {
      name: "Delhi",
      tourists: 12645000
    }
  },
  {
    coordinates: [36.8848, 30.7040],
    country: {
      name: "Turkey",
      ranking: 12
    },
    city: {
      name: "Antalya",
      tourists: 12438000
    }
  },
  {
    coordinates: [22.5428, 114.0629],
    country: {
      name: "China",
      ranking: 13
    },
    city: {
      name: "Shenzhen",
      tourists: 12202000
    }
  },
  {
    coordinates: [19.0760, 72.8774],
    country: {
      name: "India",
      ranking: 14
    },
    city: {
      name: "Mumbai",
      tourists: 10590000
    }
  },
  {
    coordinates: [7.8789, 98.3983],
    country: {
      name: "Thailand",
      ranking: 15
    },
    city: {
      name: "Phuket",
      tourists: 10550000
    }
  },
  {
    coordinates: [41.9027, 12.4963],
    country: {
      name: "Italy",
      ranking: 16
    },
    city: {
      name: "Rome",
      tourists: 10065000
    }
  },
  {
    coordinates: [735.6528, 139.8394],
    country: {
      name: "Japan",
      ranking: 17
    },
    city: {
      name: "Tokyo",
      tourists: 9985000
    }
  },
  {
    coordinates: [12.9276, 100.8770],
    country: {
      name: "Thailand",
      ranking: 18
    },
    city: {
      name: "Pattaya",
      tourists: 9606000
    }
  },
  {
    coordinates: [25.1054, 121.5973],
    country: {
      name: "Taiwan",
      ranking: 19
    },
    city: {
      name: "Taipei",
      tourists:9597000
    }
  },
  {
    coordinates: [21.4225, 39.8261],
    country: {
      name: "Saudi Arabia",
      ranking: 20
    },
    city: {
      name: "Mecca",
      tourists: 9565000
    }
  },
  {
    coordinates: [23.1289, 113.2532],
    country: {
      name: "China",
      ranking: 21
    },
    city: {
      name: "Guangzho",
      tourists: 9004000
    }
  },
  {
    coordinates: [50.0736, 14.4185],
    country: {
      name: "Czech Republic",
      ranking: 22
    },
    city: {
      name: "Prague",
      tourists: 8949000
    }
  },
  {
    coordinates: [24.4709, 39.6122],
    country: {
      name: "Saudi Arabia",
      ranking: 23
    },
    city: {
      name: "Medina",
      tourists: 8547000
    }
  },
  {
    coordinates: [37.5326, 127.0246],
    country: {
      name: "South Korea",
      ranking: 24
    },
    city: {
      name: "Seoul",
      tourists: 8431000
    }
  },
  {
    coordinates: [52.3779, 4.8970],
    country: {
      name: "Netherlands",
      ranking: 25
    },
    city: {
      name: "Amsterdam",
      tourists: 8354000
    }
  },
  {
    coordinates: [27.1766, 78.0080],
    country: {
      name: "India",
      ranking: 26
    },
    city: {
      name: "Agra",
      tourists: 8138000
    }
  },
  {
    coordinates: [25.7616, -80.1917],
    country: {
      name: "United States of America",
      ranking: 27
    },
    city: {
      name: "Miami",
      tourists: 8121000
    }
  },
  {
    coordinates: [34.6695, 135.4970],
    country: {
      name: "Japan",
      ranking: 28
    },
    city: {
      name: "Osaka",
      tourists: 7861000
    }
  },
  {
    coordinates: [34.0522, -118.2436],
    country: {
      name: "United States of America",
      ranking: 29
    },
    city: {
      name: "Los Angeles",
      tourists: 7500000
    }
  },
  {
    coordinates: [31.2243, 121.4691],
    country: {
      name: "China",
      ranking: 30
    },
    city: {
      name: "Shanghai",
      tourists: 7483000
    }
  },
  {
    coordinates: [31.2243, 121.4691],
    country: {
      name: "Vietnam",
      ranking: 31
    },
    city: {
      name: "Ho Chi Minh City",
      tourists: 72000000
    }
  },
  {
    coordinates: [-8.6500, 115.2166],
    country: {
      name: "Indonesia",
      ranking: 32
    },
    city: {
      name: "Denpasar",
      tourists: 7185000
    }
  },
  {
    coordinates: [41.3902, 2.15400],
    country: {
      name: "Spain",
      ranking: 33
    },
    city: {
      name: "Barcelona",
      tourists: 6714000
    }
  },
  {
    coordinates: [36.1146, -115.1728],
    country: {
      name: "Nevada",
      ranking: 34
    },
    city: {
      name: "Las Vegas",
      tourists: 76591000
    }
  },
  {
    coordinates: [45.4646, 9.1885],
    country: {
      name: "Italy",
      ranking: 35
    },
    city: {
      name: "Milan",
      tourists: 6481000
    }
  },
  {
    coordinates: [13.0674, 80.2376],
    country: {
      name: "India",
      ranking: 36
    },
    city: {
      name: "Chennai",
      tourists: 6422000
    }
  },
  {
    coordinates: [48.2100, 16.3634],
    country: {
      name: "Austria",
      ranking: 37
    },
    city: {
      name: "Vienna",
      tourists: 6410000
    }
  },
  {
    coordinates: [1.9344, 103.3587],
    country: {
      name: "Malaysia",
      ranking: 38
    },
    city: {
      name: "Johor Bahru",
      tourists: 6396000
    }
  },
  {
    coordinates: [26.9220, 75.7788],
    country: {
      name: "India",
      ranking: 39
    },
    city: {
      name: "Jaipur",
      tourists: 6383000
    }
  },
  {
    coordinates: [20.4004, -89.1348],
    country: {
      name: "Mexico",
      ranking: 40
    },
    city: {
      name: "Cancun",
      tourists: 6041000
    }
  },
  {
    coordinates: [52.5200, 13.4049],
    country: {
      name: "Germany",
      ranking: 41
    },
    city: {
      name: "Berlin",
      tourists: 5959000
    }
  },
  {
    coordinates: [30.0333, 31.2333],
    country: {
      name: "Egypt",
      ranking: 42
    },
    city: {
      name: "Cairo",
      tourists: 5754000
    }
  },
  {
    coordinates: [37.9838, 23.7275],
    country: {
      name: "Greece",
      ranking: 43
    },
    city: {
      name: "Athens",
      tourists: 5728000
    }
  },
  {
    coordinates: [28.5383, -81.3792],
    country: {
      name: "United States of America",
      ranking: 44
    },
    city: {
      name: "Orlando",
      tourists: 5553000
    }
  },
  {
    coordinates: [55.7512, 37.6184],
    country: {
      name: "Russia",
      ranking: 45
    },
    city: {
      name: "Moscow",
      tourists: 5150000
    }
  },
  {
    coordinates: [45.4387, 12.3271],
    country: {
      name: "Italy",
      ranking: 46
    },
    city: {
      name: "Venice",
      tourists: 5502000
    }
  },
  {
    coordinates: [20.9599, 107.0425],
    country: {
      name: "Vietnam",
      ranking: 47
    },
    city: {
      name: "Ha Long",
      tourists: 5295000
    }
  },
  {
    coordinates: [24.7742, 46.7385],
    country: {
      name: "Saudi Arabia",
      ranking: 48
    },
    city: {
      name: "Riyadh",
      tourists: 5267000
    }
  },
  {
    coordinates: [53.3501, -6.2661],
    country: {
      name: "Ireland",
      ranking: 49
    },
    city: {
      name: "Dublin",
      tourists: 5213000
    }
  },

];

// Define arrays to hold created city and state markers
var cityMarkers = [];
var countryMarkers = [];

// Loop through locations and create city and state markers
for (var i = 0; i < locations.length; i++) {
  cityMarkers.push(
    L.circle(locations[i].coordinates, {
      stroke: false,
      fillOpacity: 0.75,
      color: "white",
      fillColor: "white",
      radius: markerSize2(locations[i].city.tourists)
    }).bindPopup("<h1> City: " + locations[i].city.name + "</h1> <hr> <h3> Tourists: " + locations[i].city.tourists + "</h3>")
  );

  countryMarkers.push(
    L.circle(locations[i].coordinates, {
      stroke: false,
      fillOpacity: 0.75,
      color: "purple",
      fillColor: "purple",
      radius: markerSize1(locations[i].country.ranking)
    }).bindPopup("<h1> Country: " + locations[i].country.name + "</h1> <hr> <h3> Ranking: " + locations[i].country.ranking + "</h3>")
  );
}

var streetmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: API_KEY
});

var darkmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.dark",
  accessToken: API_KEY
});

// Create two separate layer groups: one for cities and one for states
var countries = L.layerGroup(countryMarkers);
var cities = L.layerGroup(cityMarkers);

// Create a baseMaps object
var baseMaps = {
  "Street Map": streetmap,
  "Dark Map": darkmap
};

// Create an overlay object
var overlayMaps = {
  "Country Ranking": countries,
  "City Tourists": cities
};

// Define a map object
var myMap = L.map("map", {
  center: [37.09, -95.71],
  zoom: 2,
  layers: [streetmap, countries, cities]
});

// Pass our map layers into our layer control
// Add the layer control to the map
L.control.layers(baseMaps, overlayMaps, {
  collapsed: false
}).addTo(myMap);


