// map change
mapboxgl.accessToken = 'pk.eyJ1IjoiYWxpeWF1dGUiLCJhIjoiY2p5ZXp1b3ZyMDBpMTNjcjdnZ3dnbzJpYyJ9.UiTAUN2b8ASlVnMr_nmn3Q';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/aliyaute/ckhp5zhh72hvs19p9di978qoj',
    zoom: 6.40,
    center: [-105.99, 34.41],
    maxZoom:15,
    minZoom:6,
    fitBounds: [[-109.048428, 31.332406], [-103.000468, 37.000482]]

});


map.on('load', function() {
    map.addLayer({
        'id': 'Positivity Rate Nov',
        'type': 'fill',
        'source': {
            'type': 'geojson',
            'data': 'data/ChangeOverTimeOne.geojson'
        },
        'layout': {
            // make layer visible by default
            'visibility': 'visible',
            },
            'paint': {
                'fill-color': [
                    'case', 
                    ['==',['get', 'percent_category'], 1], '#67000d',
                    ['==',['get', 'percent_category'], 2], '#a50f15',
                    ['==',['get', 'percent_category'], 3], '#fb6a4a',
                    ['==',['get', 'percent_category'], 4], '#fc9272', 
                    ['==',['get', 'percent_category'], 5], '#fcbba1', 


                    '#d3d3d3',
                ],
                "fill-outline-color": "#ffffff"
        }
    }, 'landuse'); // Here's where we tell Mapbox where to slot this new layer
    map.addLayer({
        'id': 'August',
        'type': 'fill',
        'source': {
            'type': 'geojson',
            'data': 'data/NM_Data..geojson'
        },
        'layout': {
            // make layer visible by default
            'visibility': 'visible',
            },
            'paint': {
                'fill-color': [
                    'case', 
                    ['==',['get', 'Percent_Category'], 1], '#a50f15',
                    ['==',['get', 'Percent_Category'], 2], '#fdae6b',
                    ['==',['get', 'Percent_Category'], 3], '#fcbba1',
                    ['==',['get', 'Percent_Category'], 4], '#cb181d', 
                    ['==',['get', 'Percent_Category'], 5], '#fdd0a2', 

                    '#d3d3d3',
                ],
                "fill-outline-color": "#ffffff"
        }
    }, 'landuse'); // Here's where we tell Mapbox where to slot this new layer

});

