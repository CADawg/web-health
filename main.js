$(document).ready(function () {

    const ayrshire = "S08000015";
    const ayrshireCo = "[55.466888, -4.629981]";
    const borders = "S08000016";
    const bordersCo = "[55.583244, -2.795106]";
    const dumfries = "S08000017";
    const dumfriesCo = "[55.059346, -3.625432]";
    const fife = "S08000018";
    const fifeCo = "[56.117755, -3.185310]";
    const forth = "S08000019";
    const forthCo = "[56.079339, -3.904547]";
    const grampian = "S08000020";
    const grampianCo = "[57.146492, -2.098255]";
    const glasgow = "S08000021";
    const glasgowCo = "[55.866305, -4.270132]";
    const highland = "S08000022";
    const highlandCo = "[57.480787, -4.20073]";
    const lanarkshire = "S08000023";
    const lanarkshireCo = "[55.839784, -3.997161]";
    const lothian = "S08000024";
    const lothianCo = "[55.919304, -3.253777]";
    const orkney = "S08000025";
    const orkneyCo = "[58.981869, -2.964337]";
    const shetland = "S08000026";
    const shetlandCo = "[60.154613, -1.153110]";
    const tayside = "S08000027";
    const taysideCo = "[56.464656, -3.031128]";
    const westisles = "S08000028";
    const westislesCo = "[58.088539, -6.689270]";


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
