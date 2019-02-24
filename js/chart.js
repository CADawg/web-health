google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChartGenderPie);

function drawChartGenderPie() {

  var data = google.visualization.arrayToDataTable([
      ["Gender", "Inpatients"],
      ["Female", 354880],
      ["Male", 376120],]);

  var options = {
    title: 'Overall Inpatients by Gender',
    colors: ['#6bcae2', '#51a5ba'],
  };

  var chart = new google.visualization.PieChart(document.getElementById('gender-pie'));

  chart.draw(data, options);
}

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChartAgePie);

function drawChartAgePie() {

  var data = google.visualization.arrayToDataTable([
      ["Age", "Inpatients"],
["0-17 years",12070],
["18-24 years",57010],
["25-39 years",200820],
["40-64 years",264950],
["65+ years",196150]
]);

  var options = {
    title: 'Overall Inpatients by Age',
    colors: ['#6bcae2', '#51a5ba', '#41924b', '#afeaaa', '#87e293'],
  };

  var chart = new google.visualization.PieChart(document.getElementById('age-pie'));

  chart.draw(data, options);
}

google.charts.load('current', {'packages':['bar']});
google.charts.setOnLoadCallback(drawChartAge);

function drawChartAge() {
  var data = google.visualization.arrayToDataTable([["Year", "0-17 Years", "18-24 Years","25-39 Years", "40-64 Years", "65+ Years"],["1997/98",710,3610,12740,12930,13000],["1998/99",770,3470,12860,13050,12980],["1999/00",690,3520,12430,13290,12230],["2000/01",630,3530,12230,13030,11600],["2001/02",620,3270,11840,13260,10860],["2002/03",600,3220,11720,13460,10700],["2003/04",520,3090,11180,13690,10550],["2004/05",490,3080,10740,13520,9980],["2005/06",430,2750,10020,13410,9680],["2006/07",470,2500,9180,12880,9290],["2007/08",440,2430,9170,12730,8780],["2008/09",470,2400,9140,13360,8800],["2009/10",480,2310,8450,12500,8350],["2010/11",530,2250,8140,11880,8010],["2011/12",540,2180,8070,12120,7710],["2012/13",600,2120,7590,12200,7730],["2013/14",640,2210,7230,12130,7360],["2014/15",610,2170,7020,11810,7230],["2015/16",660,2210,7080,11780,7330],["2016/17",620,2340,7160,11180,6970],["2017/18",550,2350,6830,10740,7010]]);

  var options = {chart: {
      title: 'Psychiactric Inpatient Count',
      subtitle: 'By Age over time by financial year!',
      colors: ['#6bcae2', '#51a5ba', '#41924b', '#afeaaa', '#87e293'],
  }};

  var chart = new google.charts.Bar(document.getElementById('age-chart'));
  chart.draw(data, google.charts.Bar.convertOptions(options));
}

google.charts.load('current', {'packages':['bar']});
google.charts.setOnLoadCallback(drawChartGender);

function drawChartGender() {
  var data = google.visualization.arrayToDataTable([["Year","Female","Male"],["1997/98",21510,21480],["1998/99",21650,21480],["1999/00",20720,21440],["2000/01",20230,20790],["2001/02",19590,20260],["2002/03",19480,20220],["2003/04",19260,19770],["2004/05",18500,19310],["2005/06",17660,18630],["2006/07",16670,17650],["2007/08",16330,17220],["2008/09",16530,17640],["2009/10",15590,16500],["2010/11",14930,15880],["2011/12",14780,15840],["2012/13",14550,15690],["2013/14",13820,15750],["2014/15",13450,15390],["2015/16",13400,15660],["2016/17",13340,14930],["2017/18",12890,14590]]);

  var options = {chart: {
      title: 'Psychiactric Inpatient Count',
      subtitle: 'By Gender over time by financial year!',
      colors: ['#6bcae2', '#51a5ba', '#41924b', '#afeaaa', '#87e293'],
  }};

  var chart = new google.charts.Bar(document.getElementById('gender-chart'));
  chart.draw(data, google.charts.Bar.convertOptions(options));
}

google.charts.load('current', {'packages':['bar']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([['Year', 'Total Inpatients'],['1997/98', 42990],["1998/99", 43130],["1999/00",	42160],["2000/01",	41020],["2001/02",	39850],["2002/03",	39700],["2003/04",	39030],["2004/05",	37810],["2005/06",	36290],["2006/07",	34320],["2007/08",	33550],["2008/09",	34170],["2009/10",	32090],["2010/11",	30810],["2011/12",	30620],["2012/13",	30240],["2013/14",	29570],["2014/15",	28840],["2015/16",	29060],["2016/17",	28270],["2017/18",	27480],]);

  var options = {chart: {
      title: 'Psychiactric Inpatient Count',
      subtitle: 'Total over time by financial year!',
      colors: ['#6bcae2', '#51a5ba', '#41924b', '#afeaaa', '#87e293'],
  }};

  var chart = new google.charts.Bar(document.getElementById('overview-chart'));
  chart.draw(data, google.charts.Bar.convertOptions(options));
}
