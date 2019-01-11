

var mapConfig = {
    'layers': [{
        'type': 'cartodb',
        'options': {
            'cartocss_version': '2.1.1',
            'cartocss':
             `#layer 
                {
                    marker-width: 6;
                    marker-fill: #4d58ee;
                    marker-allow-overlap: true;
                }`,
            'sql': `SELECT
                        cartodb_id,
                        the_geom_webmercator,
                        nom_arret, 
                        ligne,
                        direction
            
                    FROM tpg_arrets`
        }
    }]
};

var cartoDBSource = new ol.source.CartoDB({
    account: 'audreyhuguenin',
    config: mapConfig
});


