function instSportStyle(feature, resolution)
                 {   
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

function cyclevasionStyle(feature, resolution)

                   {   var iti = feature.get('itineraire');

                    var itLocal102 = new ol.style.Style({
                        stroke: new ol.style.Stroke({                            
                                color: '#dff442',//vert clair
                                width: 3
                            }),
                                       
                    });

                    var itLocal103 = new ol.style.Style({
                        stroke: new ol.style.Stroke({                            
                                color: '#f45b41',//rouge
                                width: 3
                            }),
                                       
                    });
                    var itLocal104 = new ol.style.Style({
                        stroke: new ol.style.Stroke({                            
                                color: '#f4d941',//jaune
                                width: 3
                            }),
                                       
                    });
                    var itRegion50 = new ol.style.Style({
                        stroke: new ol.style.Stroke({                            
                                color: '#00ce94',//turquoise
                                width: 4
                            }),
                                       
                    });
                    var itRegion46 = new ol.style.Style({
                        stroke: new ol.style.Stroke({                            
                                color: '#004ece',//bleu
                                width: 4
                            }),
                                       
                    });

                    var itNation = new ol.style.Style({
                        stroke: new ol.style.Stroke({                            
                                color: 'rgba(138, 63, 191, 0.5)',//violet
                                width: 5
                            }),
                                       
                    });

                    switch (iti) {
                        case "102":
                          return itLocal102
                         
                        case "103":
                        return itLocal103
                           
                        case "104":
                        return itLocal104
                          
                        case "50":
                        return itRegion50
                          
                        case "46":
                        return itRegion46
                                                  
                        default: 
                          return itNation
                      }
                    }

function loisirStyle(feature, resolution)

                   {   var type = feature.get('type_loisi');

                    var cheval = new ol.style.Style({
                        stroke: new ol.style.Stroke({                            
                                color: '#9b6331',//brun
                                width: 4
                            }),
                                       
                    });

                    var mobRed = new ol.style.Style({
                        stroke: new ol.style.Stroke({                            
                                color: '#fffb28',//jaune
                                width: 4
                            }),
                                       
                    });
                    var sentierTheme = new ol.style.Style({
                        stroke: new ol.style.Stroke({                            
                                color: '#61ff28',//vert
                                width: 4
                            }),
                                       
                    });
                    var Libellul = new ol.style.Style({
                        stroke: new ol.style.Stroke({                            
                                color: '#1fba9d',//turquoise
                                width: 4
                            }),
                                       
                    });
                    var flowerWalk = new ol.style.Style({
                        stroke: new ol.style.Stroke({                            
                                color: '#f796e4',//rose
                                width: 4
                            }),
                                       
                    });

                    var pecheMouche = new ol.style.Style({
                        stroke: new ol.style.Stroke({                            
                                color: '#1d1df9',//bleu
                                width: 4
                            }),
                                       
                    });

                    switch (type) {
                        case "sentiers à thèmes":
                          return sentierTheme
                         
                        case "mobilité réduite":
                        return mobRed
                           
                        case "Libellul'ID":
                        return Libellul
                          
                        case "flower walk":
                        return flowerWalk
                          
                        case "pêche à la mouche":
                        return pecheMouche
                                                  
                        default: 
                          return cheval
                      }
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
                        stroke: new ol.style.Stroke({
                                color: '#ff0000',
                                width: 4
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