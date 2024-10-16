var wms_layers = [];

var format_AGRIKEBUN_0 = new ol.format.GeoJSON();
var features_AGRIKEBUN_0 = format_AGRIKEBUN_0.readFeatures(json_AGRIKEBUN_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AGRIKEBUN_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AGRIKEBUN_0.addFeatures(features_AGRIKEBUN_0);
var lyr_AGRIKEBUN_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AGRIKEBUN_0, 
                style: style_AGRIKEBUN_0,
                popuplayertitle: "AGRIKEBUN",
                interactive: true,
                title: '<img src="styles/legend/AGRIKEBUN_0.png" /> AGRIKEBUN'
            });
var format_AGRILADANG_1 = new ol.format.GeoJSON();
var features_AGRILADANG_1 = format_AGRILADANG_1.readFeatures(json_AGRILADANG_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AGRILADANG_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AGRILADANG_1.addFeatures(features_AGRILADANG_1);
var lyr_AGRILADANG_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AGRILADANG_1, 
                style: style_AGRILADANG_1,
                popuplayertitle: "AGRILADANG",
                interactive: true,
                title: '<img src="styles/legend/AGRILADANG_1.png" /> AGRILADANG'
            });
var format_DANAU_2 = new ol.format.GeoJSON();
var features_DANAU_2 = format_DANAU_2.readFeatures(json_DANAU_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DANAU_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DANAU_2.addFeatures(features_DANAU_2);
var lyr_DANAU_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DANAU_2, 
                style: style_DANAU_2,
                popuplayertitle: "DANAU",
                interactive: true,
                title: '<img src="styles/legend/DANAU_2.png" /> DANAU'
            });
var format_JLN_3 = new ol.format.GeoJSON();
var features_JLN_3 = format_JLN_3.readFeatures(json_JLN_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JLN_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JLN_3.addFeatures(features_JLN_3);
var lyr_JLN_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JLN_3, 
                style: style_JLN_3,
                popuplayertitle: "JLN",
                interactive: true,
                title: '<img src="styles/legend/JLN_3.png" /> JLN'
            });
var format_NONAGRIALANG_4 = new ol.format.GeoJSON();
var features_NONAGRIALANG_4 = format_NONAGRIALANG_4.readFeatures(json_NONAGRIALANG_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NONAGRIALANG_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NONAGRIALANG_4.addFeatures(features_NONAGRIALANG_4);
var lyr_NONAGRIALANG_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NONAGRIALANG_4, 
                style: style_NONAGRIALANG_4,
                popuplayertitle: "NONAGRIALANG",
                interactive: true,
                title: '<img src="styles/legend/NONAGRIALANG_4.png" /> NONAGRIALANG'
            });
var format_NONAGRISMKBLKR_5 = new ol.format.GeoJSON();
var features_NONAGRISMKBLKR_5 = format_NONAGRISMKBLKR_5.readFeatures(json_NONAGRISMKBLKR_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NONAGRISMKBLKR_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NONAGRISMKBLKR_5.addFeatures(features_NONAGRISMKBLKR_5);
var lyr_NONAGRISMKBLKR_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NONAGRISMKBLKR_5, 
                style: style_NONAGRISMKBLKR_5,
                popuplayertitle: "NONAGRISMKBLKR",
                interactive: true,
                title: '<img src="styles/legend/NONAGRISMKBLKR_5.png" /> NONAGRISMKBLKR'
            });
var format_PEMUKIMAN_6 = new ol.format.GeoJSON();
var features_PEMUKIMAN_6 = format_PEMUKIMAN_6.readFeatures(json_PEMUKIMAN_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PEMUKIMAN_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PEMUKIMAN_6.addFeatures(features_PEMUKIMAN_6);
var lyr_PEMUKIMAN_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PEMUKIMAN_6, 
                style: style_PEMUKIMAN_6,
                popuplayertitle: "PEMUKIMAN",
                interactive: true,
                title: '<img src="styles/legend/PEMUKIMAN_6.png" /> PEMUKIMAN'
            });
var format_SAWAH_7 = new ol.format.GeoJSON();
var features_SAWAH_7 = format_SAWAH_7.readFeatures(json_SAWAH_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SAWAH_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SAWAH_7.addFeatures(features_SAWAH_7);
var lyr_SAWAH_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SAWAH_7, 
                style: style_SAWAH_7,
                popuplayertitle: "SAWAH",
                interactive: true,
                title: '<img src="styles/legend/SAWAH_7.png" /> SAWAH'
            });
var format_SUNGAI_8 = new ol.format.GeoJSON();
var features_SUNGAI_8 = format_SUNGAI_8.readFeatures(json_SUNGAI_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUNGAI_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUNGAI_8.addFeatures(features_SUNGAI_8);
var lyr_SUNGAI_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUNGAI_8, 
                style: style_SUNGAI_8,
                popuplayertitle: "SUNGAI",
                interactive: true,
                title: '<img src="styles/legend/SUNGAI_8.png" /> SUNGAI'
            });
var format_TANAMCAMPUR_9 = new ol.format.GeoJSON();
var features_TANAMCAMPUR_9 = format_TANAMCAMPUR_9.readFeatures(json_TANAMCAMPUR_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TANAMCAMPUR_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TANAMCAMPUR_9.addFeatures(features_TANAMCAMPUR_9);
var lyr_TANAMCAMPUR_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TANAMCAMPUR_9, 
                style: style_TANAMCAMPUR_9,
                popuplayertitle: "TANAMCAMPUR",
                interactive: true,
                title: '<img src="styles/legend/TANAMCAMPUR_9.png" /> TANAMCAMPUR'
            });

lyr_AGRIKEBUN_0.setVisible(true);lyr_AGRILADANG_1.setVisible(true);lyr_DANAU_2.setVisible(true);lyr_JLN_3.setVisible(true);lyr_NONAGRIALANG_4.setVisible(true);lyr_NONAGRISMKBLKR_5.setVisible(true);lyr_PEMUKIMAN_6.setVisible(true);lyr_SAWAH_7.setVisible(true);lyr_SUNGAI_8.setVisible(true);lyr_TANAMCAMPUR_9.setVisible(true);
var layersList = [lyr_AGRIKEBUN_0,lyr_AGRILADANG_1,lyr_DANAU_2,lyr_JLN_3,lyr_NONAGRIALANG_4,lyr_NONAGRISMKBLKR_5,lyr_PEMUKIMAN_6,lyr_SAWAH_7,lyr_SUNGAI_8,lyr_TANAMCAMPUR_9];
lyr_AGRIKEBUN_0.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'JNSKBN': 'JNSKBN', 'FCODE': 'FCODE', 'PUDATE': 'PUDATE', 'AQDATE': 'AQDATE', 'REMARK': 'REMARK', 'KODLCO': 'KODLCO', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_AGRILADANG_1.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'AQDATE': 'AQDATE', 'PUDATE': 'PUDATE', 'KODLCO': 'KODLCO', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'JNSLDG': 'JNSLDG', 'TNMLDG': 'TNMLDG', 'TIPLDG': 'TIPLDG', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_DANAU_2.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'OTODAN': 'OTODAN', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'KODLCO': 'KODLCO', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'VOLTAP': 'VOLTAP', 'DTA': 'DTA', 'SEDIMN': 'SEDIMN', 'VLCSDN': 'VLCSDN', 'QUAAR': 'QUAAR', 'CRH': 'CRH', 'KPTS': 'KPTS', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'LOKASI': 'LOKASI', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_JLN_3.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_NONAGRIALANG_4.set('fieldAliases', {'AQDATE': 'AQDATE', 'FCODE': 'FCODE', 'KLSRMP': 'KLSRMP', 'KODATC': 'KODATC', 'NAMOBJ': 'NAMOBJ', 'PUDATE': 'PUDATE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'JNSPDG': 'JNSPDG', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_NONAGRISMKBLKR_5.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'AQDATE': 'AQDATE', 'PUDATE': 'PUDATE', 'KODLCO': 'KODLCO', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'JNSSMK': 'JNSSMK', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_PEMUKIMAN_6.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_SAWAH_7.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'JNSSWH': 'JNSSWH', 'FCODE': 'FCODE', 'AQDATE': 'AQDATE', 'PUDATE': 'PUDATE', 'REMARK': 'REMARK', 'KODLCO': 'KODLCO', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'TNMSWH': 'TNMSWH', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_SUNGAI_8.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'TIPSNG': 'TIPSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'STATUS': 'STATUS', 'WMAX': 'WMAX', 'DBTMAX': 'DBTMAX', 'SLPRT': 'SLPRT', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_TANAMCAMPUR_9.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'AQDATE': 'AQDATE', 'PUDATE': 'PUDATE', 'FCODE': 'FCODE', 'KODLCO': 'KODLCO', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'JNSSWH': 'JNSSWH', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_AGRIKEBUN_0.set('fieldImages', {'NAMOBJ': '', 'JNSKBN': '', 'FCODE': '', 'PUDATE': '', 'AQDATE': '', 'REMARK': '', 'KODLCO': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_AGRILADANG_1.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'AQDATE': '', 'PUDATE': '', 'KODLCO': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'JNSLDG': '', 'TNMLDG': '', 'TIPLDG': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_DANAU_2.set('fieldImages', {'NAMOBJ': '', 'OTODAN': '', 'FCODE': '', 'REMARK': '', 'KODLCO': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'VOLTAP': '', 'DTA': '', 'SEDIMN': '', 'VLCSDN': '', 'QUAAR': '', 'CRH': '', 'KPTS': '', 'NAMWS': '', 'NAMDAS': '', 'LOKASI': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_JLN_3.set('fieldImages', {'NAMRJL': '', 'KONRJL': '', 'MATRJL': '', 'FGSRJL': '', 'UTKRJL': '', 'TOLRJL': '', 'WLYRJL': '', 'AUTRJL': '', 'KLSRJL': '', 'SPCRJL': '', 'JPARJL': '', 'ARHRJL': '', 'STARJL': '', 'KLLRJL': '', 'MEDRJL': '', 'LOCRJL': '', 'JARRJL': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', });
lyr_NONAGRIALANG_4.set('fieldImages', {'AQDATE': '', 'FCODE': '', 'KLSRMP': '', 'KODATC': '', 'NAMOBJ': '', 'PUDATE': '', 'REMARK': '', 'SRS_ID': '', 'JNSPDG': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_NONAGRISMKBLKR_5.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'AQDATE': '', 'PUDATE': '', 'KODLCO': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'JNSSMK': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_PEMUKIMAN_6.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_SAWAH_7.set('fieldImages', {'NAMOBJ': '', 'JNSSWH': '', 'FCODE': '', 'AQDATE': '', 'PUDATE': '', 'REMARK': '', 'KODLCO': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'TNMSWH': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_SUNGAI_8.set('fieldImages', {'NAMOBJ': '', 'TIPSNG': '', 'KLSSNG': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'NAMWS': '', 'NAMDAS': '', 'STATUS': '', 'WMAX': '', 'DBTMAX': '', 'SLPRT': '', 'SHAPE_Leng': '', });
lyr_TANAMCAMPUR_9.set('fieldImages', {'NAMOBJ': '', 'REMARK': '', 'AQDATE': '', 'PUDATE': '', 'FCODE': '', 'KODLCO': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'JNSSWH': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_AGRIKEBUN_0.set('fieldLabels', {'NAMOBJ': 'no label', 'JNSKBN': 'no label', 'FCODE': 'no label', 'PUDATE': 'no label', 'AQDATE': 'no label', 'REMARK': 'no label', 'KODLCO': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_AGRILADANG_1.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'AQDATE': 'no label', 'PUDATE': 'no label', 'KODLCO': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'JNSLDG': 'no label', 'TNMLDG': 'no label', 'TIPLDG': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_DANAU_2.set('fieldLabels', {'NAMOBJ': 'no label', 'OTODAN': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'KODLCO': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'VOLTAP': 'no label', 'DTA': 'no label', 'SEDIMN': 'no label', 'VLCSDN': 'no label', 'QUAAR': 'no label', 'CRH': 'no label', 'KPTS': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'LOKASI': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_JLN_3.set('fieldLabels', {'NAMRJL': 'no label', 'KONRJL': 'no label', 'MATRJL': 'no label', 'FGSRJL': 'no label', 'UTKRJL': 'no label', 'TOLRJL': 'no label', 'WLYRJL': 'no label', 'AUTRJL': 'no label', 'KLSRJL': 'no label', 'SPCRJL': 'no label', 'JPARJL': 'no label', 'ARHRJL': 'no label', 'STARJL': 'no label', 'KLLRJL': 'no label', 'MEDRJL': 'no label', 'LOCRJL': 'no label', 'JARRJL': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_NONAGRIALANG_4.set('fieldLabels', {'AQDATE': 'no label', 'FCODE': 'no label', 'KLSRMP': 'no label', 'KODATC': 'no label', 'NAMOBJ': 'no label', 'PUDATE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'JNSPDG': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_NONAGRISMKBLKR_5.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'AQDATE': 'no label', 'PUDATE': 'no label', 'KODLCO': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'JNSSMK': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_PEMUKIMAN_6.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_SAWAH_7.set('fieldLabels', {'NAMOBJ': 'no label', 'JNSSWH': 'no label', 'FCODE': 'no label', 'AQDATE': 'no label', 'PUDATE': 'no label', 'REMARK': 'no label', 'KODLCO': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'TNMSWH': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_SUNGAI_8.set('fieldLabels', {'NAMOBJ': 'no label', 'TIPSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'STATUS': 'no label', 'WMAX': 'no label', 'DBTMAX': 'no label', 'SLPRT': 'no label', 'SHAPE_Leng': 'no label', });
lyr_TANAMCAMPUR_9.set('fieldLabels', {'NAMOBJ': 'header label - visible with data', 'REMARK': 'inline label - visible with data', 'AQDATE': 'no label', 'PUDATE': 'no label', 'FCODE': 'header label - always visible', 'KODLCO': 'no label', 'SRS_ID': 'no label', 'LCODE': 'inline label - visible with data', 'METADATA': 'header label - visible with data', 'JNSSWH': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_TANAMCAMPUR_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});