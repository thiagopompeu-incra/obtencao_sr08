var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_MunicpiosSP_1 = new ol.format.GeoJSON();
var features_MunicpiosSP_1 = format_MunicpiosSP_1.readFeatures(json_MunicpiosSP_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MunicpiosSP_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MunicpiosSP_1.addFeatures(features_MunicpiosSP_1);
var lyr_MunicpiosSP_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MunicpiosSP_1, 
                style: style_MunicpiosSP_1,
                popuplayertitle: 'Municípios (SP)',
                interactive: false,
                title: '<img src="styles/legend/MunicpiosSP_1.png" /> Municípios (SP)'
            });
var format_ValorMdiodaTerraporMRTRAMT2022_2 = new ol.format.GeoJSON();
var features_ValorMdiodaTerraporMRTRAMT2022_2 = format_ValorMdiodaTerraporMRTRAMT2022_2.readFeatures(json_ValorMdiodaTerraporMRTRAMT2022_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ValorMdiodaTerraporMRTRAMT2022_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ValorMdiodaTerraporMRTRAMT2022_2.addFeatures(features_ValorMdiodaTerraporMRTRAMT2022_2);
var lyr_ValorMdiodaTerraporMRTRAMT2022_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ValorMdiodaTerraporMRTRAMT2022_2, 
                style: style_ValorMdiodaTerraporMRTRAMT2022_2,
                popuplayertitle: 'Valor Médio da Terra por MRT (RAMT - 2022)',
                interactive: false,
    title: 'Valor Médio da Terra por MRT (RAMT - 2022)<br />\
    <img src="styles/legend/ValorMdiodaTerraporMRTRAMT2022_2_0.png" /> de R$ 20.000 a R$ 30.000 /ha<br />\
    <img src="styles/legend/ValorMdiodaTerraporMRTRAMT2022_2_1.png" /> de R$ 30.000 a R$ 50.000 /ha<br />\
    <img src="styles/legend/ValorMdiodaTerraporMRTRAMT2022_2_2.png" /> de R$ 50.000 a R$ 100.000 /ha<br />\
    <img src="styles/legend/ValorMdiodaTerraporMRTRAMT2022_2_3.png" /> acima de R$ 100.000 /ha<br />' });
var format_reasquilombolasSP_3 = new ol.format.GeoJSON();
var features_reasquilombolasSP_3 = format_reasquilombolasSP_3.readFeatures(json_reasquilombolasSP_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reasquilombolasSP_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasquilombolasSP_3.addFeatures(features_reasquilombolasSP_3);
var lyr_reasquilombolasSP_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasquilombolasSP_3, 
                style: style_reasquilombolasSP_3,
                popuplayertitle: 'Áreas quilombolas (SP)',
                interactive: true,
    title: 'Áreas quilombolas (SP)<br />\
    <img src="styles/legend/reasquilombolasSP_3_0.png" /> RTID<br />\
    <img src="styles/legend/reasquilombolasSP_3_1.png" /> PORTARIA<br />\
    <img src="styles/legend/reasquilombolasSP_3_2.png" /> DECRETO<br />\
    <img src="styles/legend/reasquilombolasSP_3_3.png" /> CCDRU<br />\
    <img src="styles/legend/reasquilombolasSP_3_4.png" /> TITULO PARCIAL<br />\
    <img src="styles/legend/reasquilombolasSP_3_5.png" /> TITULADO<br />' });
var format_TEDsreasAtendidas_4 = new ol.format.GeoJSON();
var features_TEDsreasAtendidas_4 = format_TEDsreasAtendidas_4.readFeatures(json_TEDsreasAtendidas_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TEDsreasAtendidas_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TEDsreasAtendidas_4.addFeatures(features_TEDsreasAtendidas_4);
var lyr_TEDsreasAtendidas_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TEDsreasAtendidas_4, 
                style: style_TEDsreasAtendidas_4,
                popuplayertitle: 'TED\'s (Áreas Atendidas)',
                interactive: true,
    title: 'TED\'s (Áreas Atendidas)<br />\
    <img src="styles/legend/TEDsreasAtendidas_4_0.png" /> Aflora / UFSCar<br />' });
var format_ImveisemobtenoSP_5 = new ol.format.GeoJSON();
var features_ImveisemobtenoSP_5 = format_ImveisemobtenoSP_5.readFeatures(json_ImveisemobtenoSP_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ImveisemobtenoSP_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ImveisemobtenoSP_5.addFeatures(features_ImveisemobtenoSP_5);
var lyr_ImveisemobtenoSP_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ImveisemobtenoSP_5, 
                style: style_ImveisemobtenoSP_5,
                popuplayertitle: 'Imóveis em obtenção (SP)',
                interactive: true,
    title: 'Imóveis em obtenção (SP)<br />\
    <img src="styles/legend/ImveisemobtenoSP_5_0.png" /> Adjudicação<br />\
    <img src="styles/legend/ImveisemobtenoSP_5_1.png" /> Compra<br />\
    <img src="styles/legend/ImveisemobtenoSP_5_2.png" /> Desapropriação<br />' });
var format_ProjetosdeAssentamentoSR08SP_6 = new ol.format.GeoJSON();
var features_ProjetosdeAssentamentoSR08SP_6 = format_ProjetosdeAssentamentoSR08SP_6.readFeatures(json_ProjetosdeAssentamentoSR08SP_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ProjetosdeAssentamentoSR08SP_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProjetosdeAssentamentoSR08SP_6.addFeatures(features_ProjetosdeAssentamentoSR08SP_6);
var lyr_ProjetosdeAssentamentoSR08SP_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ProjetosdeAssentamentoSR08SP_6, 
                style: style_ProjetosdeAssentamentoSR08SP_6,
                popuplayertitle: 'Projetos de Assentamento SR08(SP)',
                interactive: true,
    title: 'Projetos de Assentamento SR08(SP)<br />\
    <img src="styles/legend/ProjetosdeAssentamentoSR08SP_6_0.png" /> Adjudicação<br />\
    <img src="styles/legend/ProjetosdeAssentamentoSR08SP_6_1.png" /> Arrecadação<br />\
    <img src="styles/legend/ProjetosdeAssentamentoSR08SP_6_2.png" /> Cessão<br />\
    <img src="styles/legend/ProjetosdeAssentamentoSR08SP_6_3.png" /> Cessão Gratuita<br />\
    <img src="styles/legend/ProjetosdeAssentamentoSR08SP_6_4.png" /> Compra e Venda<br />\
    <img src="styles/legend/ProjetosdeAssentamentoSR08SP_6_5.png" /> Desapropriação<br />\
    <img src="styles/legend/ProjetosdeAssentamentoSR08SP_6_6.png" /> Reconhecimento<br />\
    <img src="styles/legend/ProjetosdeAssentamentoSR08SP_6_7.png" /> Transferência<br />\
    <img src="styles/legend/ProjetosdeAssentamentoSR08SP_6_8.png" /> Outras<br />' });

lyr_GoogleHybrid_0.setVisible(false);lyr_MunicpiosSP_1.setVisible(true);lyr_ValorMdiodaTerraporMRTRAMT2022_2.setVisible(false);lyr_reasquilombolasSP_3.setVisible(false);lyr_TEDsreasAtendidas_4.setVisible(false);lyr_ImveisemobtenoSP_5.setVisible(false);lyr_ProjetosdeAssentamentoSR08SP_6.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_MunicpiosSP_1,lyr_ValorMdiodaTerraporMRTRAMT2022_2,lyr_reasquilombolasSP_3,lyr_TEDsreasAtendidas_4,lyr_ImveisemobtenoSP_5,lyr_ProjetosdeAssentamentoSR08SP_6];
lyr_MunicpiosSP_1.set('fieldAliases', {'CD_MUN': 'CD_MUN', 'NM_MUN': 'NM_MUN', 'CD_RGI': 'CD_RGI', 'NM_RGI': 'NM_RGI', 'CD_RGINT': 'CD_RGINT', 'NM_RGINT': 'NM_RGINT', 'CD_UF': 'CD_UF', 'NM_UF': 'NM_UF', 'SIGLA_UF': 'SIGLA_UF', 'CD_REGIA': 'CD_REGIA', 'NM_REGIA': 'NM_REGIA', 'SIGLA_RG': 'SIGLA_RG', 'CD_CONCU': 'CD_CONCU', 'NM_CONCU': 'NM_CONCU', 'AREA_KM2': 'AREA_KM2', });
lyr_ValorMdiodaTerraporMRTRAMT2022_2.set('fieldAliases', {'RAMT': 'RAMT', 'VM_MRT': 'VM_MRT', });
lyr_reasquilombolasSP_3.set('fieldAliases', {'cd_quilomb': 'cd_quilomb', 'cd_sr': 'cd_sr', 'nr_process': 'nr_process', 'nm_comunid': 'nm_comunid', 'nm_municip': 'nm_municip', 'cd_uf': 'cd_uf', 'dt_publica': 'dt_publica', 'dt_public1': 'dt_public1', 'nr_familia': 'nr_familia', 'dt_titulac': 'dt_titulac', 'nr_area_ha': 'nr_area_ha', 'nr_perimet': 'nr_perimet', 'cd_sipra': 'cd_sipra', 'ob_descric': 'ob_descric', 'st_titulad': 'st_titulad', 'dt_decreto': 'dt_decreto', 'tp_levanta': 'tp_levanta', 'nr_escalao': 'nr_escalao', 'area_calc_': 'area_calc_', 'perimetro_': 'perimetro_', 'esfera': 'esfera', 'fase': 'fase', 'responsave': 'responsave', });
lyr_TEDsreasAtendidas_4.set('fieldAliases', {'id': 'id', 'cd_sipra': 'cd_sipra', 'area_hecta': 'area_hecta', 'capacidade': 'capacidade', 'num_famili': 'num_famili', 'fase': 'fase', 'data_de_cr': 'data_de_cr', 'data_obten': 'data_obten', 'TED': 'TED', });
lyr_ImveisemobtenoSP_5.set('fieldAliases', {'id': 'id', 'nome': 'nome', 'forma_obte': 'forma_obte', 'cod_sei': 'cod_sei', 'municipio': 'municipio', 'area_cal': 'area_cal', 'area_hecta': 'area_hecta', 'descricao': 'descricao', 'cod_sncr': 'cod_sncr', });
lyr_ProjetosdeAssentamentoSR08SP_6.set('fieldAliases', {'cd_sipra': 'cd_sipra', 'capacidade': 'capacidade', 'fase': 'fase', 'data_obten': 'data_obten', 'Município': 'Município', 'form_obten': 'form_obten', 'FamiAssent': 'FamiAssent', 'Tipo_Cria': 'Tipo_Cria', 'Nome': 'Nome', 'NumAtoCria': 'NumAtoCria', 'Area_ha': 'Area_ha', 'Data_Cria': 'Data_Cria', });
lyr_MunicpiosSP_1.set('fieldImages', {'CD_MUN': 'TextEdit', 'NM_MUN': 'TextEdit', 'CD_RGI': 'TextEdit', 'NM_RGI': 'TextEdit', 'CD_RGINT': 'TextEdit', 'NM_RGINT': 'TextEdit', 'CD_UF': 'TextEdit', 'NM_UF': 'TextEdit', 'SIGLA_UF': 'TextEdit', 'CD_REGIA': 'TextEdit', 'NM_REGIA': 'TextEdit', 'SIGLA_RG': 'TextEdit', 'CD_CONCU': 'TextEdit', 'NM_CONCU': 'TextEdit', 'AREA_KM2': 'TextEdit', });
lyr_ValorMdiodaTerraporMRTRAMT2022_2.set('fieldImages', {'RAMT': 'TextEdit', 'VM_MRT': 'TextEdit', });
lyr_reasquilombolasSP_3.set('fieldImages', {'cd_quilomb': 'TextEdit', 'cd_sr': 'TextEdit', 'nr_process': 'TextEdit', 'nm_comunid': 'TextEdit', 'nm_municip': 'TextEdit', 'cd_uf': 'TextEdit', 'dt_publica': 'TextEdit', 'dt_public1': 'TextEdit', 'nr_familia': 'Range', 'dt_titulac': 'Hidden', 'nr_area_ha': 'Hidden', 'nr_perimet': 'Hidden', 'cd_sipra': 'TextEdit', 'ob_descric': 'Hidden', 'st_titulad': 'TextEdit', 'dt_decreto': 'TextEdit', 'tp_levanta': 'TextEdit', 'nr_escalao': 'TextEdit', 'area_calc_': 'TextEdit', 'perimetro_': 'Hidden', 'esfera': 'Hidden', 'fase': 'TextEdit', 'responsave': 'Hidden', });
lyr_TEDsreasAtendidas_4.set('fieldImages', {'id': 'TextEdit', 'cd_sipra': 'TextEdit', 'area_hecta': 'TextEdit', 'capacidade': 'TextEdit', 'num_famili': 'TextEdit', 'fase': 'TextEdit', 'data_de_cr': 'TextEdit', 'data_obten': 'TextEdit', 'TED': 'TextEdit', });
lyr_ImveisemobtenoSP_5.set('fieldImages', {'id': 'TextEdit', 'nome': 'TextEdit', 'forma_obte': 'TextEdit', 'cod_sei': 'TextEdit', 'municipio': 'TextEdit', 'area_cal': 'TextEdit', 'area_hecta': 'TextEdit', 'descricao': 'TextEdit', 'cod_sncr': 'TextEdit', });
lyr_ProjetosdeAssentamentoSR08SP_6.set('fieldImages', {'cd_sipra': 'TextEdit', 'capacidade': 'TextEdit', 'fase': 'TextEdit', 'data_obten': 'TextEdit', 'Município': 'TextEdit', 'form_obten': 'TextEdit', 'FamiAssent': 'Range', 'Tipo_Cria': 'Range', 'Nome': 'TextEdit', 'NumAtoCria': 'Range', 'Area_ha': 'TextEdit', 'Data_Cria': 'TextEdit', });
lyr_MunicpiosSP_1.set('fieldLabels', {'CD_MUN': 'inline label - always visible', 'NM_MUN': 'inline label - always visible', 'CD_RGI': 'inline label - always visible', 'NM_RGI': 'inline label - always visible', 'CD_RGINT': 'inline label - always visible', 'NM_RGINT': 'inline label - always visible', 'CD_UF': 'inline label - always visible', 'NM_UF': 'inline label - always visible', 'SIGLA_UF': 'inline label - always visible', 'CD_REGIA': 'inline label - always visible', 'NM_REGIA': 'inline label - always visible', 'SIGLA_RG': 'inline label - always visible', 'CD_CONCU': 'inline label - always visible', 'NM_CONCU': 'inline label - always visible', 'AREA_KM2': 'inline label - always visible', });
lyr_ValorMdiodaTerraporMRTRAMT2022_2.set('fieldLabels', {'RAMT': 'no label', 'VM_MRT': 'no label', });
lyr_reasquilombolasSP_3.set('fieldLabels', {'cd_quilomb': 'inline label - always visible', 'cd_sr': 'hidden field', 'nr_process': 'inline label - always visible', 'nm_comunid': 'inline label - always visible', 'nm_municip': 'inline label - always visible', 'cd_uf': 'hidden field', 'dt_publica': 'inline label - always visible', 'dt_public1': 'hidden field', 'nr_familia': 'inline label - always visible', 'cd_sipra': 'inline label - always visible', 'st_titulad': 'inline label - always visible', 'dt_decreto': 'inline label - always visible', 'tp_levanta': 'inline label - always visible', 'nr_escalao': 'no label', 'area_calc_': 'inline label - always visible', 'fase': 'inline label - always visible', });
lyr_TEDsreasAtendidas_4.set('fieldLabels', {'id': 'inline label - always visible', 'cd_sipra': 'inline label - always visible', 'area_hecta': 'inline label - always visible', 'capacidade': 'inline label - always visible', 'num_famili': 'inline label - always visible', 'fase': 'inline label - always visible', 'data_de_cr': 'inline label - always visible', 'data_obten': 'inline label - always visible', 'TED': 'inline label - always visible', });
lyr_ImveisemobtenoSP_5.set('fieldLabels', {'id': 'inline label - always visible', 'nome': 'inline label - always visible', 'forma_obte': 'inline label - always visible', 'cod_sei': 'inline label - always visible', 'municipio': 'inline label - always visible', 'area_cal': 'inline label - always visible', 'area_hecta': 'inline label - always visible', 'descricao': 'inline label - always visible', 'cod_sncr': 'inline label - always visible', });
lyr_ProjetosdeAssentamentoSR08SP_6.set('fieldLabels', {'cd_sipra': 'inline label - always visible', 'capacidade': 'inline label - always visible', 'fase': 'inline label - always visible', 'data_obten': 'inline label - always visible', 'Município': 'inline label - always visible', 'form_obten': 'inline label - always visible', 'FamiAssent': 'inline label - always visible', 'Tipo_Cria': 'inline label - always visible', 'Nome': 'inline label - always visible', 'NumAtoCria': 'inline label - always visible', 'Area_ha': 'inline label - always visible', 'Data_Cria': 'inline label - always visible', });
lyr_ProjetosdeAssentamentoSR08SP_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});