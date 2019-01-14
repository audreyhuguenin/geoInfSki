function instSportStyle(feature, resolution)
                 {   var color = feature.get('sport')
                    var instSport = new ol.style.Style({
                        image: new ol.style.Circle({
                            radius: 9,
                            stroke: new ol.style.Stroke({
                                color: 'white',
                                width: 2
                            }),
                            fill: new ol.style.Fill({
                                color: "#004455"
                            })             
                        })
                    });
return instSport;
                    }


function selectedStyle(feature, resolution)
                 {   
                    var selectStyleTPG = new ol.style.Style({
                        image: new ol.style.Circle({
                            radius: 11,
                            stroke: new ol.style.Stroke({
                                color: '#E97005',
                                width: 3
                            }),
                            fill: new ol.style.Fill({
                                color: "white"
                            })             
                        })
                    });

                    var selectStyleSport = new ol.style.Style({
                        image: new ol.style.Circle({
                            radius: 11,
                            stroke: new ol.style.Stroke({
                                color: '#004455',
                                width: 3
                            }),
                            fill: new ol.style.Fill({
                                color: "white"
                            })             
                        })
                    });

                    var selectStyleLoisir = new ol.style.Style({
                        image: new ol.style.Stroke({
                                color: '#FFFF00',
                                width: 3
                            }),
                                         
                        });

                    if(feature.values_.categorie1!=undefined)
                    {
                        return selectStyleSport;
                    }
                    else if(feature.values_.direction!=undefined)
                    {
                        return selectStyleTPG;
                    }
                    else{
                        return selectStyleLoisir;
                    }
             }