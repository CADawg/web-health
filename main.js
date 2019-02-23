$(document).ready(function () {
    
    const ayrshire = "S08000015";
    const borders = "S08000016";
    const dumfries = "S08000017";   
    const fife = "S08000018";
    const forth = "S08000019";
    const grampian = "S08000020";
    const glasgow = "S08000021";
    const highland = "S08000022";
    const lanarkshire = "S08000023";
    const lothian = "S08000024";
    const orkney = "S08000025";
    const shetland = "S08000026";
    const tayside = "S08000027";
    const westisles = "S08000028";


    $.getJSON("https://www.opendata.nhs.scot/api/3/action/datastore_search?resource_id=83b38aa6-73c0-4489-b344-11081e7aa0ed&q=male+2017/18+18-24", function(result) {
    console.log(result)
        result.result.records.forEach(function(query) {
            switch(query.HBR2014) {
                case ayrshire:
                    $("<p>Ayrshire</p>").appendTo(".result");
                    $("<p>" + query.PatientsCount + "</p>").appendTo(".result");
                    break;
                case borders:
                    $("<p>Borders</p>").appendTo(".result");
                    $("<p>" + query.PatientsCount + "</p>").appendTo   (".result");
                    break;
                case dumfries:
                    $("<p>Dumfries</p>").appendTo(".result");
                    $("<p>" + query.PatientsCount + "</p>").appendTo(".result");
                    break;
                case fife:
                    $("<p>Fife</p>").appendTo(".result");
                    $("<p>" + query.PatientsCount + "</p>").appendTo(".result");
                    break;
                case forth:
                    $("<p>Forth</p>").appendTo(".result");
                    $("<p>" + query.PatientsCount + "</p>").appendTo(".result");
                    break;
                case grampian:
                    $("<p>Grampian</p>").appendTo(".result");
                    $("<p>" + query.PatientsCount + "</p>").appendTo(".result");
                    break;
                case glasgow:
                    $("<p>Glasgow</p>").appendTo(".result");
                    $("<p>" + query.PatientsCount + "</p>").appendTo(".result");
                    break;
                case highland:
                    $("<p>Highland</p>").appendTo(".result");
                    $("<p>" + query.PatientsCount + "</p>").appendTo(".result");
                    break;
                case lanarkshire:
                    $("<p>Lanarkshire</p>").appendTo(".result");
                    $("<p>" + query.PatientsCount + "</p>").appendTo(".result");
                    break;
                case lothian:
                    $("<p>Lothian</p>").appendTo(".result");
                    $("<p>" + query.PatientsCount + "</p>").appendTo(".result");
                    break;
                case orkney:
                    $("<p>Orkney</p>").appendTo(".result");
                    $("<p>" + query.PatientsCount + "</p>").appendTo(".result");
                    break;
                case shetland:
                    $("<p>Shetland</p>").appendTo(".result");
                    $("<p>" + query.PatientsCount + "</p>").appendTo(".result");
                    break;
                case tayside:
                    $("<p>Tayside</p>").appendTo(".result");
                    $("<p>" + query.PatientsCount + "</p>").appendTo(".result");
                    break;
                case westisles:
                    $("<p>West Isles</p>").appendTo(".result");
                    $("<p>" + query.PatientsCount + "</p>").appendTo(".result");
                    break;
                default:
                    break;
                
            }
        //     //for each earthquake
        //     //get its coordinates
        //     var lng = query.geometry.coordinates[0];
        //     var lat = query.geometry.coordinates[1];
        //     //and it magnitude
        //     var mag = parseFloat(query.properties.mag);
        //     //for each earthquake create a circle

        //     var circle = L.circle([lat, lng], mag * 50000, {
        //         color: 'red',
        //         opacity: 0,
        //         fillColor: 'red',
        //         fillOpacity: 0.8
        //     })
        //     //and add it to the map
        //     circle.addTo(mymap);
        });
    });
});