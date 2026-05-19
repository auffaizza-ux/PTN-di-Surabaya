var wms_layers = [];


        var lyr_Positron_0 = new ol.layer.Tile({
            'title': 'Positron',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });
var format_AksesibilitasJalan_1 = new ol.format.GeoJSON();
var features_AksesibilitasJalan_1 = format_AksesibilitasJalan_1.readFeatures(json_AksesibilitasJalan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AksesibilitasJalan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AksesibilitasJalan_1.addFeatures(features_AksesibilitasJalan_1);
var lyr_AksesibilitasJalan_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AksesibilitasJalan_1, 
                style: style_AksesibilitasJalan_1,
                popuplayertitle: 'Aksesibilitas Jalan',
                interactive: true,
    title: 'Aksesibilitas Jalan<br />\
    <img src="styles/legend/AksesibilitasJalan_1_0.png" /> 1,2km (15 menit)<br />\
    <img src="styles/legend/AksesibilitasJalan_1_1.png" /> 2,4km (30 menit)<br />\
    <img src="styles/legend/AksesibilitasJalan_1_2.png" /> <br />' });
var format_PTNSurabaya_2 = new ol.format.GeoJSON();
var features_PTNSurabaya_2 = format_PTNSurabaya_2.readFeatures(json_PTNSurabaya_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PTNSurabaya_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PTNSurabaya_2.addFeatures(features_PTNSurabaya_2);
var lyr_PTNSurabaya_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PTNSurabaya_2, 
                style: style_PTNSurabaya_2,
                popuplayertitle: 'PTN Surabaya',
                interactive: true,
    title: 'PTN Surabaya<br />\
    <img src="styles/legend/PTNSurabaya_2_0.png" /> ITS Manyar<br />\
    <img src="styles/legend/PTNSurabaya_2_1.png" /> ITS Sukolilo<br />\
    <img src="styles/legend/PTNSurabaya_2_2.png" /> UIN Sunan Ampel<br />\
    <img src="styles/legend/PTNSurabaya_2_3.png" /> UNAIR A<br />\
    <img src="styles/legend/PTNSurabaya_2_4.png" /> UNAIR B<br />\
    <img src="styles/legend/PTNSurabaya_2_5.png" /> UNAIR C<br />\
    <img src="styles/legend/PTNSurabaya_2_6.png" /> UNESA Ketintang<br />\
    <img src="styles/legend/PTNSurabaya_2_7.png" /> UNESA Lidah Wetan<br />\
    <img src="styles/legend/PTNSurabaya_2_8.png" /> UPNV Jatim<br />\
    <img src="styles/legend/PTNSurabaya_2_9.png" /> <br />' });

lyr_Positron_0.setVisible(true);lyr_AksesibilitasJalan_1.setVisible(true);lyr_PTNSurabaya_2.setVisible(true);
var layersList = [lyr_Positron_0,lyr_AksesibilitasJalan_1,lyr_PTNSurabaya_2];
lyr_AksesibilitasJalan_1.set('fieldAliases', {'fid': 'fid', 'Access': 'Access', });
lyr_PTNSurabaya_2.set('fieldAliases', {'fid': 'fid', 'Nama': 'Nama', 'Kampus': 'Kampus', 'QS WUR': 'QS WUR', 'Tahun Didirikan': 'Tahun Didirikan', 'Fakultas': 'Fakultas', 'Foto': 'Foto', });
lyr_AksesibilitasJalan_1.set('fieldImages', {'fid': 'TextEdit', 'Access': 'TextEdit', });
lyr_PTNSurabaya_2.set('fieldImages', {'fid': 'TextEdit', 'Nama': 'TextEdit', 'Kampus': 'TextEdit', 'QS WUR': 'TextEdit', 'Tahun Didirikan': 'Range', 'Fakultas': 'TextEdit', 'Foto': 'ExternalResource', });
lyr_AksesibilitasJalan_1.set('fieldLabels', {'fid': 'hidden field', 'Access': 'inline label - always visible', });
lyr_PTNSurabaya_2.set('fieldLabels', {'fid': 'hidden field', 'Nama': 'hidden field', 'Kampus': 'inline label - always visible', 'QS WUR': 'inline label - always visible', 'Tahun Didirikan': 'inline label - always visible', 'Fakultas': 'header label - always visible', 'Foto': 'no label', });
lyr_PTNSurabaya_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});