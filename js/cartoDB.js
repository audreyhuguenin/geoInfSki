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
                    marker-width: 25;
                    marker-file: url('https://image.flaticon.com/icons/svg/1329/1329633.svg');
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
                `#layer {
                    line-width: 1.5;
                    line-color: ramp([itineraire], (#7F3C8D, #11A579, #3969AC, #F2B701, #E73F74, #80BA5A, #A5AA99), ("1", "102", "103", "104", "46", "50"), "=");
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
                    marker-width: 10;
                    marker-fill: #FF0000;
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

var mapConfig5 = {
    'layers': [{
        'type': 'cartodb',
        'options': {
            'cartocss_version': '2.1.1',
            'cartocss':
                `#layer 
                {
                    marker-width: 25;
                    marker-file: url('https://image.flaticon.com/icons/svg/196/196634.svg');
                    marker-allow-overlap: true;
                }`,
            'sql': `SELECT *
            
                    FROM equipementsplages`,
            'interactivity': 'cartodb_id'
        }
    }],
};

var cartoDBSource5 = new ol.source.CartoDB({
    account: 'audreyhuguenin',
    config: mapConfig5
});

//emissions No2
var mapConfig6 = {
    'layers': [{
        'type': 'cartodb',
        'options': {
            'cartocss_version': '2.1.1',
            'cartocss':
                `#layer {
                    polygon-fill: ramp([immission_], (#c0ff62, #f8ff36, #d6ebe7, #f2b701, #ff9225, #ff5d2b, #ff3c15, #c5005c, #9f0067, #e9f0e2), ("< 26", "26 - 28", "< 26 (estimé)", "28 - 30", "30 - 32", "32 - 34", "34 - 36", "36 - 38", "> 38"), "=");
                    polygon-opacity: 0.1;
                  }
                  #layer::outline {
                    line-width: 0;
                    line-color: #FFFFFF;
                    line-opacity: 0.5;
                  }`,
            'sql': `SELECT *
            
                    FROM spair_immissions_no2`,
            'interactivity': 'cartodb_id'
        }
    }],
};

var cartoDBSource6 = new ol.source.CartoDB({
    account: 'audreyhuguenin',
    config: mapConfig6
});

//zones loisirs
var mapConfig7 = {
    'layers': [{
        'type': 'cartodb',
        'options': {
            'cartocss_version': '2.1.1',
            'cartocss':
                `#layer {
                    line-width: 4;
                    line-color: ramp([type_loisi], (#7F3C8D, #11A579, #3969AC, #F2B701, #E73F74, #80BA5A, #E68310, #008695, #A5AA99),
                     ("parcours cavalier balisé", "sentiers à thèmes", "mobilité réduite", "parcours cavalier balisé (par temps sec)",
                      "Libellul'ID", "flower walk", "pêche à la mouche", "parcours cavalier balisé (à tracer?)"), "=");
                  }`,
            'sql': `SELECT *
            
                    FROM ffp_loisir_line`,
            'interactivity': 'cartodb_id'
        }
    }],
};

var cartoDBSource7 = new ol.source.CartoDB({
    account: 'audreyhuguenin',
    config: mapConfig7
});