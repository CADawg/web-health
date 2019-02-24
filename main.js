$(document).ready(function () {

    const ayrshire = "S08000015";
    const ayrshireGeo = "[55.466888, -4.629981]";
    const borders = "S08000016";
    const bordersGeo = "[55.583244, -2.795106]";
    const dumfries = "S08000017";
    const dumfriesGeo = "[55.059346, -3.625432]";
    const fife = "S08000018";
    const fifeGeo = "[56.117755, -3.185310]";
    const forth = "S08000019";
    const forthGeo = "[56.079339, -3.904547]";
    const grampian = "S08000020";
    const grampianGeo = "[57.146492, -2.098255]";
    const glasgow = "S08000021";
    const glasgowGeo = "[55.866305, -4.270132]";
    const highland = "S08000022";
    const highlandGeo = "[57.480787, -4.20073]";
    const lanarkshire = "S08000023";
    const lanarkshireGeo = "[55.839784, -3.997161]";
    const lothian = "S08000024";
    const lothianGeo = "[55.919304, -3.253777]";
    const orkney = "S08000025";
    const orkneyGeo = "[58.981869, -2.964337]";
    const shetland = "S08000026";
    const shetlandGeo = "[60.154613, -1.153110]";
    const tayside = "S08000027";
    const taysideGeo = "[56.464656, -3.031128]";
    const westisles = "S08000028";
    const westislesGeo = "[58.088539, -6.689270]";
    
    function mapDisplay(){
        var mapGender = document.getElementById("sex").value;
        var mapYear = document.getElementById("year").value;
        var mapAge = document.getElementById("age").value;
        mapAge = mapAge.replace("65+", "65plus");
        
        console.log(mapGender);
        console.log(mapYear);
        console.log(mapAge);
        
        $.getJSON("https://www.opendata.nhs.scot/api/3/action/datastore_search?resource_id=83b38aa6-73c0-4489-b344-11081e7aa0ed&q="+mapGender+"+"+mapYear+"+"+mapAge, function(result) {
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
        });
    });
    };

    $(".map-refresh").click(function (e) {
        $(".result").empty();
        mapDisplay()
    });

});
