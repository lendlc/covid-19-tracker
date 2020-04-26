<template>
    <div class="card">
        <div class="card-body">
            <canvas id="line-chart" height="250"></canvas>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import Chart from 'chart.js';
    export default {
    
    methods: {
    getCasesData() {
    return axios.get('https://corona.lmao.ninja/v2/historical/Philippines?lastdays=30')
    .then(res => {
        return res.data.timeline;
    }).then(data => {
    const dates = Object.keys(data.cases);
    const cases = Object.values(data.cases);
    const deaths = Object.values(data.deaths);
    const recoveries = Object.values(data.recovered);

    new Chart(document.getElementById('line-chart'), {
        type: 'line',
        data: {
            labels: dates,
            datasets: [
                {
                    label: 'Cases',
                    data: cases,
                    borderColor: '#384259',
                    borderWidth: 2,
                    fill: false
                },
                {
                    label: 'Deaths',
                    data: deaths,
                    borderColor:'#f73859',
                    borderWidth: 2,
                    fill: false
                },
                {
                    label: 'Recoveries',
                    data: recoveries,
                    borderColor:'#7ac7c4',
                    borderWidth: 2,
                    fill: false
                }
            ]
        },
        options: {
            bezierCurve : true,
            title: {
                display: true,
                text: 'Cumulative Number of Cases for the past 30 Days'
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            },
          }
        });
      });
    }  
  },
  mounted() {
    this.getCasesData();
  }
}
</script>