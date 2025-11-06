var wms_layers = [];

var format_MunicpiosSP_0 = new ol.format.GeoJSON();
var features_MunicpiosSP_0 = format_MunicpiosSP_0.readFeatures(json_MunicpiosSP_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MunicpiosSP_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MunicpiosSP_0.addFeatures(features_MunicpiosSP_0);
var lyr_MunicpiosSP_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MunicpiosSP_0, 
                style: style_MunicpiosSP_0,
                popuplayertitle: 'Municípios (SP)',
                interactive: false,
                title: '<img src="styles/legend/MunicpiosSP_0.png" /> Municípios (SP)'
            });
var format_ValorMdiodaTerraporMRTRAMT2022_1 = new ol.format.GeoJSON();
var features_ValorMdiodaTerraporMRTRAMT2022_1 = format_ValorMdiodaTerraporMRTRAMT2022_1.readFeatures(json_ValorMdiodaTerraporMRTRAMT2022_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ValorMdiodaTerraporMRTRAMT2022_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ValorMdiodaTerraporMRTRAMT2022_1.addFeatures(features_ValorMdiodaTerraporMRTRAMT2022_1);
var lyr_ValorMdiodaTerraporMRTRAMT2022_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ValorMdiodaTerraporMRTRAMT2022_1, 
                style: style_ValorMdiodaTerraporMRTRAMT2022_1,
                popuplayertitle: 'Valor Médio da Terra por MRT (RAMT - 2022)',
                interactive: false,
    title: 'Valor Médio da Terra por MRT (RAMT - 2022)<br />\
    <img src="styles/legend/ValorMdiodaTerraporMRTRAMT2022_1_0.png" /> de R$ 20.000 a R$ 30.000 /ha<br />\
    <img src="styles/legend/ValorMdiodaTerraporMRTRAMT2022_1_1.png" /> de R$ 30.000 a R$ 50.000 /ha<br />\
    <img src="styles/legend/ValorMdiodaTerraporMRTRAMT2022_1_2.png" /> de R$ 50.000 a R$ 100.000 /ha<br />\
    <img src="styles/legend/ValorMdiodaTerraporMRTRAMT2022_1_3.png" /> acima de R$ 100.000 /ha<br />' });
var format_reasquilombolasSP_2 = new ol.format.GeoJSON();
var features_reasquilombolasSP_2 = format_reasquilombolasSP_2.readFeatures(json_reasquilombolasSP_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reasquilombolasSP_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasquilombolasSP_2.addFeatures(features_reasquilombolasSP_2);
var lyr_reasquilombolasSP_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasquilombolasSP_2, 
                style: style_reasquilombolasSP_2,
                popuplayertitle: 'Áreas quilombolas (SP)',
                interactive: true,
    title: 'Áreas quilombolas (SP)<br />\
    <img src="styles/legend/reasquilombolasSP_2_0.png" /> RTID<br />\
    <img src="styles/legend/reasquilombolasSP_2_1.png" /> PORTARIA<br />\
    <img src="styles/legend/reasquilombolasSP_2_2.png" /> DECRETO<br />\
    <img src="styles/legend/reasquilombolasSP_2_3.png" /> CCDRU<br />\
    <img src="styles/legend/reasquilombolasSP_2_4.png" /> TITULO PARCIAL<br />\
    <img src="styles/legend/reasquilombolasSP_2_5.png" /> TITULADO<br />' });
var format_AssentamentosSP_3 = new ol.format.GeoJSON();
var features_AssentamentosSP_3 = format_AssentamentosSP_3.readFeatures(json_AssentamentosSP_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AssentamentosSP_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AssentamentosSP_3.addFeatures(features_AssentamentosSP_3);
var lyr_AssentamentosSP_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AssentamentosSP_3, 
                style: style_AssentamentosSP_3,
                popuplayertitle: 'Assentamentos (SP)',
                interactive: true,
    title: 'Assentamentos (SP)<br />\
    <img src="styles/legend/AssentamentosSP_3_0.png" /> Adjudicação<br />\
    <img src="styles/legend/AssentamentosSP_3_1.png" /> Arrecadação<br />\
    <img src="styles/legend/AssentamentosSP_3_2.png" /> Cessão<br />\
    <img src="styles/legend/AssentamentosSP_3_3.png" /> Cessão Gratuita<br />\
    <img src="styles/legend/AssentamentosSP_3_4.png" /> Compra e Venda<br />\
    <img src="styles/legend/AssentamentosSP_3_5.png" /> Desapropriação<br />\
    <img src="styles/legend/AssentamentosSP_3_6.png" /> Reconhecimento<br />\
    <img src="styles/legend/AssentamentosSP_3_7.png" /> Transferência<br />\
    <img src="styles/legend/AssentamentosSP_3_8.png" /> <br />' });
var format_ImveisemobtenoSP_4 = new ol.format.GeoJSON();
var features_ImveisemobtenoSP_4 = format_ImveisemobtenoSP_4.readFeatures(json_ImveisemobtenoSP_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ImveisemobtenoSP_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ImveisemobtenoSP_4.addFeatures(features_ImveisemobtenoSP_4);
var lyr_ImveisemobtenoSP_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ImveisemobtenoSP_4, 
                style: style_ImveisemobtenoSP_4,
                popuplayertitle: 'Imóveis em obtenção (SP)',
                interactive: true,
    title: 'Imóveis em obtenção (SP)<br />\
    <img src="styles/legend/ImveisemobtenoSP_4_0.png" /> Adjudicação<br />\
    <img src="styles/legend/ImveisemobtenoSP_4_1.png" /> Compra<br />\
    <img src="styles/legend/ImveisemobtenoSP_4_2.png" /> Desapropriação<br />' });

lyr_MunicpiosSP_0.setVisible(true);lyr_ValorMdiodaTerraporMRTRAMT2022_1.setVisible(false);lyr_reasquilombolasSP_2.setVisible(false);lyr_AssentamentosSP_3.setVisible(false);lyr_ImveisemobtenoSP_4.setVisible(true);
var layersList = [lyr_MunicpiosSP_0,lyr_ValorMdiodaTerraporMRTRAMT2022_1,lyr_reasquilombolasSP_2,lyr_AssentamentosSP_3,lyr_ImveisemobtenoSP_4];
lyr_MunicpiosSP_0.set('fieldAliases', {'CD_MUN': 'CD_MUN', 'NM_MUN': 'NM_MUN', 'CD_RGI': 'CD_RGI', 'NM_RGI': 'NM_RGI', 'CD_RGINT': 'CD_RGINT', 'NM_RGINT': 'NM_RGINT', 'CD_UF': 'CD_UF', 'NM_UF': 'NM_UF', 'SIGLA_UF': 'SIGLA_UF', 'CD_REGIA': 'CD_REGIA', 'NM_REGIA': 'NM_REGIA', 'SIGLA_RG': 'SIGLA_RG', 'CD_CONCU': 'CD_CONCU', 'NM_CONCU': 'NM_CONCU', 'AREA_KM2': 'AREA_KM2', });
lyr_ValorMdiodaTerraporMRTRAMT2022_1.set('fieldAliases', {'RAMT': 'RAMT', 'VM_MRT': 'VM_MRT', });
lyr_reasquilombolasSP_2.set('fieldAliases', {'cd_quilomb': 'cd_quilomb', 'cd_sr': 'cd_sr', 'nr_process': 'nr_process', 'nm_comunid': 'nm_comunid', 'nm_municip': 'nm_municip', 'cd_uf': 'cd_uf', 'dt_publica': 'dt_publica', 'dt_public1': 'dt_public1', 'nr_familia': 'nr_familia', 'dt_titulac': 'dt_titulac', 'nr_area_ha': 'nr_area_ha', 'nr_perimet': 'nr_perimet', 'cd_sipra': 'cd_sipra', 'ob_descric': 'ob_descric', 'st_titulad': 'st_titulad', 'dt_decreto': 'dt_decreto', 'tp_levanta': 'tp_levanta', 'nr_escalao': 'nr_escalao', 'area_calc_': 'area_calc_', 'perimetro_': 'perimetro_', 'esfera': 'esfera', 'fase': 'fase', 'responsave': 'responsave', });
lyr_AssentamentosSP_3.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'cd_sipra': 'cd_sipra', 'nome_proje': 'nome_proje', 'area_hecta': 'area_hecta', 'capacidade': 'capacidade', 'num_famili': 'num_famili', 'fase': 'fase', 'data_de_cr': 'data_de_cr', 'forma_obte': 'forma_obte', 'data_obten': 'data_obten', });
lyr_ImveisemobtenoSP_4.set('fieldAliases', {'id': 'id', 'nome': 'nome', 'forma_obte': 'forma_obte', 'cod_sei': 'cod_sei', 'municipio': 'municipio', 'area_cal': 'area_cal', 'area_hecta': 'area_hecta', 'descricao': 'descricao', 'cod_sncr': 'cod_sncr', });
lyr_MunicpiosSP_0.set('fieldImages', {'CD_MUN': 'TextEdit', 'NM_MUN': 'TextEdit', 'CD_RGI': 'TextEdit', 'NM_RGI': 'TextEdit', 'CD_RGINT': 'TextEdit', 'NM_RGINT': 'TextEdit', 'CD_UF': 'TextEdit', 'NM_UF': 'TextEdit', 'SIGLA_UF': 'TextEdit', 'CD_REGIA': 'TextEdit', 'NM_REGIA': 'TextEdit', 'SIGLA_RG': 'TextEdit', 'CD_CONCU': 'TextEdit', 'NM_CONCU': 'TextEdit', 'AREA_KM2': 'TextEdit', });
lyr_ValorMdiodaTerraporMRTRAMT2022_1.set('fieldImages', {'RAMT': 'TextEdit', 'VM_MRT': 'TextEdit', });
lyr_reasquilombolasSP_2.set('fieldImages', {'cd_quilomb': 'TextEdit', 'cd_sr': 'TextEdit', 'nr_process': 'TextEdit', 'nm_comunid': 'TextEdit', 'nm_municip': 'TextEdit', 'cd_uf': 'TextEdit', 'dt_publica': 'TextEdit', 'dt_public1': 'TextEdit', 'nr_familia': 'Range', 'dt_titulac': 'Hidden', 'nr_area_ha': 'Hidden', 'nr_perimet': 'Hidden', 'cd_sipra': 'TextEdit', 'ob_descric': 'Hidden', 'st_titulad': 'TextEdit', 'dt_decreto': 'TextEdit', 'tp_levanta': 'TextEdit', 'nr_escalao': 'TextEdit', 'area_calc_': 'TextEdit', 'perimetro_': 'Hidden', 'esfera': 'Hidden', 'fase': 'TextEdit', 'responsave': 'Hidden', });
lyr_AssentamentosSP_3.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'cd_sipra': 'TextEdit', 'nome_proje': 'TextEdit', 'area_hecta': 'TextEdit', 'capacidade': 'Range', 'num_famili': 'Range', 'fase': 'Range', 'data_de_cr': 'TextEdit', 'forma_obte': 'TextEdit', 'data_obten': 'TextEdit', });
lyr_ImveisemobtenoSP_4.set('fieldImages', {'id': 'TextEdit', 'nome': 'TextEdit', 'forma_obte': 'TextEdit', 'cod_sei': 'TextEdit', 'municipio': 'TextEdit', 'area_cal': 'TextEdit', 'area_hecta': 'TextEdit', 'descricao': 'TextEdit', 'cod_sncr': 'TextEdit', });
lyr_MunicpiosSP_0.set('fieldLabels', {'CD_MUN': 'inline label - always visible', 'NM_MUN': 'inline label - always visible', 'CD_RGI': 'inline label - always visible', 'NM_RGI': 'inline label - always visible', 'CD_RGINT': 'inline label - always visible', 'NM_RGINT': 'inline label - always visible', 'CD_UF': 'inline label - always visible', 'NM_UF': 'inline label - always visible', 'SIGLA_UF': 'inline label - always visible', 'CD_REGIA': 'inline label - always visible', 'NM_REGIA': 'inline label - always visible', 'SIGLA_RG': 'inline label - always visible', 'CD_CONCU': 'inline label - always visible', 'NM_CONCU': 'inline label - always visible', 'AREA_KM2': 'inline label - always visible', });
lyr_ValorMdiodaTerraporMRTRAMT2022_1.set('fieldLabels', {'RAMT': 'no label', 'VM_MRT': 'no label', });
lyr_reasquilombolasSP_2.set('fieldLabels', {'cd_quilomb': 'inline label - always visible', 'cd_sr': 'hidden field', 'nr_process': 'inline label - always visible', 'nm_comunid': 'inline label - always visible', 'nm_municip': 'inline label - always visible', 'cd_uf': 'hidden field', 'dt_publica': 'inline label - always visible', 'dt_public1': 'hidden field', 'nr_familia': 'inline label - always visible', 'cd_sipra': 'inline label - always visible', 'st_titulad': 'inline label - always visible', 'dt_decreto': 'inline label - always visible', 'tp_levanta': 'inline label - always visible', 'nr_escalao': 'inline label - always visible', 'area_calc_': 'inline label - always visible', 'fase': 'inline label - always visible', });
lyr_AssentamentosSP_3.set('fieldLabels', {'id': 'inline label - always visible', 'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'cd_sipra': 'inline label - always visible', 'nome_proje': 'inline label - always visible', 'area_hecta': 'inline label - always visible', 'capacidade': 'inline label - always visible', 'num_famili': 'inline label - always visible', 'fase': 'inline label - always visible', 'data_de_cr': 'inline label - always visible', 'forma_obte': 'inline label - always visible', 'data_obten': 'inline label - always visible', });
lyr_ImveisemobtenoSP_4.set('fieldLabels', {'id': 'inline label - always visible', 'nome': 'inline label - always visible', 'forma_obte': 'inline label - always visible', 'cod_sei': 'inline label - always visible', 'municipio': 'inline label - always visible', 'area_cal': 'inline label - always visible', 'area_hecta': 'inline label - always visible', 'descricao': 'inline label - always visible', 'cod_sncr': 'inline label - always visible', });
lyr_ImveisemobtenoSP_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});