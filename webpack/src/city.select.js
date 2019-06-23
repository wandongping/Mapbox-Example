import mapboxgl from 'mapbox-gl';
import CitySelectControl from 'cityselector-control';

import 'mapbox-gl/dist/mapbox-gl.css';
import './style.css';
import 'cityselector-control/src/style.css'

import token from './access.token.js';
mapboxgl.accessToken = token;

const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v9',
  center: [-68.13734351262877, 45.137451890638886],
  zoom: 5
});

map.addControl(new CitySelectControl({
  theme: 'dark'
}), 'top-right');

map.on('load', function () {
  console.log('map loaded');
});