<template>
  <div class="card mt-3">
    <div class="card-body">
      <canvas id="line-chart" height="250"></canvas>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Chart from "chart.js";
export default {
  methods: {
    async getCasesData() {
      const res = await axios.get(
        "https://corona.lmao.ninja/v2/historical/Philippines?lastdays=30"
      );
      const { cases, deaths, recovered } = res.data.timeline;

      this.generateChart(cases, deaths, recovered);
    },
    generateChart(cases, deaths, recovered) {
      new Chart(document.getElementById("line-chart"), {
        type: "line",
        data: {
          labels: Object.keys(cases),
          datasets: [
            {
              label: "Cases",
              data: Object.values(cases),
              borderColor: "#384259",
              borderWidth: 2,
              fill: false,
            },
            {
              label: "Deaths",
              data: Object.values(deaths),
              borderColor: "#f73859",
              borderWidth: 2,
              fill: false,
            },
            {
              label: "Recoveries",
              data: Object.values(recovered),
              borderColor: "#7ac7c4",
              borderWidth: 2,
              fill: false,
            },
          ],
        },
        options: {
          bezierCurve: true,
          title: {
            display: true,
            text: "Cumulative Number of Cases for the past 30 Days",
          },
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
        },
      });
    },
  },
  mounted() {
    this.getCasesData();
  },
};
</script>