var size = 0;
var placement = 'point';

var style_MunicpiosSP_1 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("");
    var labelFont = "13.0px \'Arial\', sans-serif";
    var labelFill = "#5a5a5a";
    var bufferColor = "#fafafa";
    var bufferWidth = 6.0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if (feature.get("NM_MUN") !== null && resolution > 0 && resolution < 350) {
        labelText = String(feature.get("NM_MUN"));
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(109,109,109,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.3299999999999998}),fill: new ol.style.Fill({color: 'rgba(146,146,146,0.34901960784313724)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
