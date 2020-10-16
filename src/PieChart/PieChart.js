/*import React from "react";
import axios from 'axios';
import Chart from "chart.js";

function PieChart(props) {
  var dataSource = {
      datasets: [
          {
              data: [],
              backgroundColor: [
                  '#ffcd56',
                  '#ff6384',
                  '#36a2eb',
                  '#ff00bb',
                  '#fd6b19',
                  '#13bf19',
                  '#d000ff',
                  '#912c47',
              ],

          }
      ],
      labels: []
  };

  function createChart() {
      var ctx = document.getElementById("myChart").getContext("2d");
      var myPieChart = new Chart(ctx, {
          type: 'pie',
          data: dataSource
      })
  }

  function getBudget() {
      axios.get('/budget')
      .then(function (res) {
          console.log(res);
          for (var i=0; i < res.data.myBudget.length; i++){
              dataSource.datasets[0].data[i] = res.data.myBudget[i].budget;
              dataSource.labels[i] = res.data.myBudget[i].title;
          }
          createChart();
      });
  }
  getBudget();

  return (
    <div className='text-box'>
      <h3>ChartJS</h3>
      <Pie
        data={dataSource}
        options={{
          responsive: true,
          maintainAspectRatio: false,
        }}
      />
    </div>
  );
}

export default ChartOne;
*/