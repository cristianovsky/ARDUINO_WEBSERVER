/*var counterDiv = document.getElementById('counterDiv');

function updateCounterUI(counter)
{
   counterDiv.innerHTML = counter; 
}*/

var connection = new WebSocket('ws://' + location.hostname + ':81/', ['arduino']);

connection.onopen = function () {
   console.log('Connected: ');
   
   // Ejemplo 1, peticion desde cliente
   //(function scheduleRequest() {
   //   connection.send("");
   //   setTimeout(scheduleRequest, 100);
   //})();
};

connection.onerror = function (error) {
  console.log('WebSocket Error ', error);
};

connection.onclose = function () {
  console.log('WebSocket connection closed');
};

google.charts.load('current', {'packages':['gauge']});
google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
          var data = google.visualization.arrayToDataTable([
            ['Label', 'Value'],
            ['visitas', 0],
          ]);
  
          var options = {
            width: 400, height: 120,
            greenFrom:60, greenTo:75,
            redFrom: 90, redTo: 100,
            yellowFrom:75, yellowTo: 90,
            minorTicks: 10
          };
          var chart = new google.visualization.Gauge(document.getElementById('counterDiv'));
          chart.draw(data, options);
          setInterval(function() {
            chart.draw(data, options);

            connection.onmessage = function (e) {
              var dato = Number(e.data);
              console.log('espia',dato);
              data.setValue(0, 1, dato);              
            }

          },1000);
        }

       


        