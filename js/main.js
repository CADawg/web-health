$(document).ready(function () {
    
    const ayrshire = "S08000015";
    const ayrshireGeo = [55.466888, -4.629981];
    const borders = "S08000016";
    const bordersGeo = [55.583244, -2.795106];
    const dumfries = "S08000017";
    const dumfriesGeo = [55.059346, -3.625432];
    const fife = "S08000018";
    const fifeGeo = [56.117755, -3.185310];
    const forth = "S08000019";
    const forthGeo = [56.079339, -3.904547];
    const grampian = "S08000020";
    const grampianGeo = [57.146492, -2.098255];
    const glasgow = "S08000021";
    const glasgowGeo = [55.866305, -4.270132];
    const highland = "S08000022";
    const highlandGeo = [57.480787, -4.20073];
    const lanarkshire = "S08000023";
    const lanarkshireGeo = [55.839784, -3.997161];
    const lothian = "S08000024";
    const lothianGeo = [55.919304, -3.253777];
    const orkney = "S08000025";
    const orkneyGeo = [58.981869, -2.964337];
    const shetland = "S08000026";
    const shetlandGeo = [60.154613, -1.153110];
    const tayside = "S08000027";
    const taysideGeo = [56.464656, -3.031128];
    const westisles = "S08000028";
    const westislesGeo = [58.088539, -6.689270];
    
    function mapDisplay(){  
        var mapGender = document.getElementById("sex").value;
        var mapYear = document.getElementById("year").value;
        var mapAge = document.getElementById("age").value;
        mapAge = mapAge.replace("65+", "65plus");
        
        console.log(mapGender);
        console.log(mapYear);
        console.log(mapAge);
        const ratio = 13;
        const circleColor = '#FF5666';
        
        $.getJSON("https://cors-anywhere.herokuapp.com/https://www.opendata.nhs.scot/api/3/action/datastore_search?resource_id=83b38aa6-73c0-4489-b344-11081e7aa0ed&q="+mapGender+"+"+mapYear+"+"+mapAge, function(result) {
        console.log(result)
        result.result.records.forEach(function(query) {
            switch(query.HBR2014) {
                case ayrshire:
                var circle = L.circle([ayrshireGeo[0], ayrshireGeo[1]], query.PatientsCount * ratio, {
                    color: circleColor,
                    opacity: 0,
                    fillColor: circleColor,
                    fillOpacity: 0.8
                })
                circle.addTo(mymap);
                break;
                case borders:
                var circle = L.circle([bordersGeo[0], bordersGeo[1]], query.PatientsCount * ratio, {
                    color: circleColor,
                    opacity: 0,
                    fillColor: circleColor,
                    fillOpacity: 0.8
                })
                circle.addTo(mymap);                
                break;
                case dumfries:
                var circle = L.circle([dumfriesGeo[0], dumfriesGeo[1]], query.PatientsCount * ratio, {
                    color: circleColor,
                    opacity: 0,
                    fillColor: circleColor,
                    fillOpacity: 0.8
                })
                circle.addTo(mymap); 
                break;
                case fife:
                var circle = L.circle([fifeGeo[0], fifeGeo[1]], query.PatientsCount * ratio, {
                    color: circleColor,
                    opacity: 0,
                    fillColor: circleColor,
                    fillOpacity: 0.8
                })
                circle.addTo(mymap); 
                break;
                case forth:
                var circle = L.circle([forthGeo[0], forthGeo[1]], query.PatientsCount * ratio, {
                    color: circleColor,
                    opacity: 0,
                    fillColor: circleColor,
                    fillOpacity: 0.8
                })
                circle.addTo(mymap);
                break;
                case grampian:
                var circle = L.circle([grampianGeo[0], grampianGeo[1]], query.PatientsCount * ratio, {
                    color: circleColor,
                    opacity: 0,
                    fillColor: circleColor,
                    fillOpacity: 0.8
                })
                circle.addTo(mymap);
                break;
                case glasgow:
                var circle = L.circle([glasgowGeo[0], glasgowGeo[1]], query.PatientsCount * ratio, {
                    color: circleColor,
                    opacity: 0,
                    fillColor: circleColor,
                    fillOpacity: 0.8
                })
                circle.addTo(mymap);
                break;
                case highland:
                var circle = L.circle([highlandGeo[0], highlandGeo[1]], query.PatientsCount * ratio, {
                    color: circleColor,
                    opacity: 0,
                    fillColor: circleColor,
                    fillOpacity: 0.8
                })
                circle.addTo(mymap);
                break;
                case lanarkshire:
                var circle = L.circle([lanarkshireGeo[0], lanarkshireGeo[1]], query.PatientsCount * ratio, {
                    color: circleColor,
                    opacity: 0,
                    fillColor: circleColor,
                    fillOpacity: 0.8
                })
                circle.addTo(mymap);
                break;
                case lothian:
                var circle = L.circle([lothianGeo[0], lothianGeo[1]], query.PatientsCount * ratio, {
                    color: circleColor,
                    opacity: 0,
                    fillColor: circleColor,
                    fillOpacity: 0.8
                })
                circle.addTo(mymap);
                break;
                case orkney:
                var circle = L.circle([orkneyGeo[0], orkneyGeo[1]], query.PatientsCount * ratio, {
                    color: circleColor,
                    opacity: 0,
                    fillColor: circleColor,
                    fillOpacity: 0.8
                })
                circle.addTo(mymap);
                break;
                case shetland:
                var circle = L.circle([shetlandGeo[0], shetlandGeo[1]], query.PatientsCount * ratio, {
                    color: circleColor,
                    opacity: 0,
                    fillColor: circleColor,
                    fillOpacity: 0.8
                })
                circle.addTo(mymap);
                break;
                case tayside:
                var circle = L.circle([taysideGeo[0], taysideGeo[1]], query.PatientsCount * ratio, {
                    color: circleColor,
                    opacity: 0,
                    fillColor: circleColor,
                    fillOpacity: 0.8
                })
                circle.addTo(mymap);
                break;
                case westisles:
                var circle = L.circle([westislesGeo[0], westislesGeo[1]], query.PatientsCount * ratio, {
                    color: circleColor,
                    opacity: 0,
                    fillColor: circleColor,
                    fillOpacity: 0.8
                })
                circle.addTo(mymap);
                break;
                default:
                break;
            }
        });
    });
};

$(".map-refresh").click(function (e) {
    $(".map-refresh").addClass("is-loading");
    $(".result").empty();
    mapDisplay()
    setTimeout(function() {
        $(".map-refresh").removeClass("is-loading");
    }, 1000);
});


var mymap = L.map('map').setView([57.9, -4.352603], 6);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
maxZoom: 18,
id: 'mapbox.streets',
accessToken: 'sk.eyJ1IjoicmViZWtrYWNyYWlnb24iLCJhIjoiY2pzaW9haXZoMjgzcTQ1bWxrZDVoNGxuOSJ9.O6J7UbvOZ9b5CnoqBjfGgw'
}).addTo(mymap);

});
