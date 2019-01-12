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
    }],
};

var cartoDBSource = new ol.source.CartoDB({
    account: 'audreyhuguenin',
    config: mapConfig
});

var mapConfig2 = {
    'layers': [{
        'type': 'cartodb',
        'options': {
            'cartocss_version': '2.1.1',
            'cartocss':
                `#layer 
                {
                    marker-width: 20;
                    marker-file: url('https://image.flaticon.com/icons/svg/1329/1329633.svg'); //test
                    marker-allow-overlap: true;
                }`,
            'sql': `SELECT *
            
                    FROM vdg_wc_public`
        }
    }],
};

var cartoDBSource2 = new ol.source.CartoDB({
    account: 'audreyhuguenin',
    config: mapConfig2
});

var mapConfig3 = {
    'layers': [{
        'type': 'cartodb',
        'options': {
            'cartocss_version': '2.1.1',
            'cartocss':
                `#layer 
                {
                    line-color: #FF0000;line-width: 2;line-opacity: 0.7;
                }`,
            'sql': `SELECT *
            
                    FROM otc_cyclevasions`
        }
    }],
};

var cartoDBSource3 = new ol.source.CartoDB({
    account: 'audreyhuguenin',
    config: mapConfig3
});

var mapConfig4 = {
    'layers': [{
        'type': 'cartodb',
        'options': {
            'cartocss_version': '2.1.1',
            'cartocss':
                `#layer 
                {
                    marker-width: 6;
                    marker-fill: #008000;
                    marker-allow-overlap: true;                
                }`,
            'sql': `SELECT *
            
                    FROM instsport_ext`,
            'interactivity': 'cartodb_id'
        }
    }],
};

var cartoDBSource4 = new ol.source.CartoDB({
    account: 'audreyhuguenin',
    config: mapConfig4
});