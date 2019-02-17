import mapboxgl from 'mapbox-gl';

import 'mapbox-gl/dist/mapbox-gl.css';
import './style.css';

import token from './access.token.js';

mapboxgl.accessToken = token;

const map = new mapboxgl.Map({
  container: 'map', // container id
  style: 'mapbox://styles/mapbox/dark-v9', //stylesheet location
  center: [-118.25867926698169, 34.05024098046857], // starting position
  zoom: 15.02779132247058, // starting zoom
  bearing: 93.6,
  pitch: 60
});

map.addControl(new mapboxgl.NavigationControl());
map.addControl(new mapboxgl.GeolocateControl());

map.on('load', function () {
  // Insert the layer beneath any symbol layer.
  var layers = map.getStyle().layers;

  var labelLayerId;
  for (var i = 0; i < layers.length; i++) {
    if (layers[i].type === 'symbol' && layers[i].layout['text-field']) {
      labelLayerId = layers[i].id;
      break;
    }
  }

  map.addLayer({
    'id': '3d-buildings',
    'source': 'composite',
    'source-layer': 'building',
    'filter': ['==', 'extrude', 'true'],
    'type': 'fill-extrusion',
    'minzoom': 15,
    'paint': {
      'fill-extrusion-color': {
        'stops': [
          [0, "#1e6698"],
          [50, "#24abc9"],
          [100, "#FBDD00"],
          [200, "#F88600"],
          [300, "#e45626"]
        ],
        'property': 'height'
      },

      // use an 'interpolate' expression to add a smooth transition effect to the
      // buildings as the user zooms in
      'fill-extrusion-height': {
        'stops': [
          [0, 0],
          [1000, 1000]
        ],
        'property': 'height'
      },
      'fill-extrusion-base': {
        'stops': [
          [0, 0],
          [1000, 1000]
        ],
        'property': 'min_height'
      },
      'fill-extrusion-opacity': .6
    }
  }, labelLayerId);
});