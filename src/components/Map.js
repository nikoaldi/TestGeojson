import React from "react";
import '../App.css';
import {
    MapContainer,
    TileLayer,
    GeoJSON,
    Polygon,
    Marker,
    Popup,
    Polyline,
    LayersControl
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import PolyLine from "./MultiPolyline";
import {Icon} from 'leaflet';
import Socket from "./Socket";

const center = [-6.949639442878905 , 107.61965170455426];

const position = [-6.949612491503703, 107.61957049369812]





const fillBlueOptions = { fillColor: 'blue' }
const limeOptions = { color: '#fff' }

function Map() {


const geo = [
    {
    "type": "FeatureCollection",
    "features": [ 
        {
          "type": "Feature",
          "geometry": {
            "type": "Polygon",
            "coordinates": [
                [

                  [
                    107.50681993565149,
                    -6.9716382481493895
                    ],
                    [
                      107.44690297320216,
                    -6.9495016066355015
                    ],
                    [
                      107.424249571296,
                    -6.957761603885863 
                    ],
                    [
                      107.50675495879028,
                      -6.971303300398233
                    ]
                ]
              ]
          },
          "properties": {
          "opacity": 1,
          "color": null
          }
        },         
    ]
    },
    {
      "type": "FeatureCollection",
      "features": [ 
          {
            "type": "Feature",
            "geometry": {
              "type": "Polygon",
              "coordinates": [
                  [
  
                    [
                      107.52518696726327,
                      -6.87828491089931 
                      ],
                      [
                        107.65218331128267,
                        -6.733132121890643
                      ],
                      [
                        107.76064505374248,
                        -6.793788152368392 
                      ],
                      [
                        107.59005807272182,
                        -6.93755996633081
                      ]
                  ]
                ]
            },
            "properties": {
            "opacity": 1,
            "color": null
            }
          },         
      ]
      }
]
              
  const polyline = [
    [-6.906149666018778, 107.57814410432405],
    [-6.9073429035013785, 107.63292120233434],
    [-6.951831462236273, 107.60561851084958],
  ]

  
  const getColor = (value) => {
    // Define your color mapping logic here based on the 'value' property
    // For example, you can use a simple if-else statement or a switch case to assign colors
    if (value < 0.5) return "green";
    if (value < 1) return "yellow";
    return "red";
  };
  
  const styleGeoJSON = (feature) => {
    // Get the value from the properties and use it to determine the color
    const value = feature.properties.opacity;

    return {
      fillColor: '#00ff33',
      weight: 1,
      opacity: value,
      color: '#00ff33',
      fillOpacity: value,
    };
  };

  const onEachFeature = (feature, layer) => {
    // Bind a popup to each feature displaying its properties
    if (feature.properties) {
      layer.bindPopup(
        `<strong>Name:</strong> ${feature.properties.name}<br /><strong>Value:</strong> ${feature.properties.value}`
      );
    }
  };

  return (
    
    <MapContainer
        center={center}
        zoom = {12}
        style = {{width: '100', height: '100vh'}}
    >
        <TileLayer
        url = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors  &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp    ||  &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp   <b>Track Information :</b> Own Unit : <img src="./iconOnUnit.png" alt="Own Unit Image" width="20" height="20" > , Radar : <img src="./iconRadar.png" alt="Radar Image" width="18" height="18" > , AIS : <img src="./iconAis.png" alt="AIS Image" width="18" height="18" > , ADSB : <img src="./iconAdsb.png" alt="ADSB Image" width="18" height="18" >'
        />
        <Socket />
        {/* <GeoJSON data={geo} />  //TEST MULTI GEOJSON */}
        {/* <PolyLine /> */}
    </MapContainer>
    
  );
}
export default Map;
