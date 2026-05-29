var size = 0;
var placement = 'point';
function categories_ProjetosdeAssentamentoSR08SP_6(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'Adjudicação':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(92,92,92,0.6)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.95}),fill: new ol.style.Fill({color: 'rgba(48,18,59,0.6)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Arrecadação':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(92,92,92,0.6)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.95}),fill: new ol.style.Fill({color: 'rgba(70,107,227,0.6)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Cessão':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(92,92,92,0.6)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.95}),fill: new ol.style.Fill({color: 'rgba(40,188,235,0.6)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Cessão Gratuita':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(92,92,92,0.6)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.95}),fill: new ol.style.Fill({color: 'rgba(50,242,152,0.6)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Compra e Venda':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(92,92,92,0.6)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.95}),fill: new ol.style.Fill({color: 'rgba(164,252,60,0.6)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Desapropriação':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(92,92,92,0.6)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.95}),fill: new ol.style.Fill({color: 'rgba(238,207,58,0.6)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Reconhecimento':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(92,92,92,0.6)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.95}),fill: new ol.style.Fill({color: 'rgba(251,126,33,0.6)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Transferência':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(92,92,92,0.6)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.95}),fill: new ol.style.Fill({color: 'rgba(208,47,5,0.6)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Outras':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.6)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(141,90,153,0.6)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_ProjetosdeAssentamentoSR08SP_6 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("form_obten");
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
    var style = categories_ProjetosdeAssentamentoSR08SP_6(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
