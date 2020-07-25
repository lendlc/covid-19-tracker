<template>
  <div class="card">
    <div class="card-body">
      <canvas id="pie-chart" height="250"></canvas>
    </div>
  </div>
</template>


<script>
import axios from "axios";
//import Chart from "chart.js";
export default {
  data() {
    return {
      LocalData: [],
      prevRecovery: "",
      date: "",
    };
  },
  /* axios
        .all([
          axios.get(
            "https://corona.lmao.ninja/v2/countries/Philippines?yesterday=false&strict=true"
          ),
          axios.get(
            "https://corona.lmao.ninja/v2/countries/Philippines?yesterday=true&strict=true"
          ),
        ])
        .then((res) => {
          this.LocalData = res[0].data;
          this.date = res[0].data.updated;
          this.prevData = res[1].data;

          new Chart(document.getElementById("pie-chart"), {
            type: "doughnut",
            data: {
              labels: ["Cases", "Deaths", "Recoveries"],
              datasets: [
                {
                  backgroundColor: ["#384259", "#f73859", "#7ac7c4"],
                  data: [
                    this.LocalData.todayCases == 0
                      ? 1
                      : this.LocalData.todayCases,
                    this.LocalData.todayDeaths == 0
                      ? 1
                      : this.LocalData.todayDeaths,
                    this.todayRecovered == 0 ? 1 : this.todayRecovered,
                  ],
                },
              ],
            },
            options: {
              title: {
                display: true,
                text:
                  "COVID-19 Updates as of " +
                  new Date(this.date).toLocaleString(),
              },
            },
          });
        });
    }, */
  methods: {
    async getDailyCasesData() {
      const res = await axios.all([
        axios.get(
          "https://corona.lmao.ninja/v2/countries/Philippines?yesterday=false&strict=true"
        ),
        axios.get(
          "https://corona.lmao.ninja/v2/countries/Philippines?yesterday=true&strict=true"
        ),
      ]);
      console.log(res);
    },
   /*  computed: {
      todayRecovered() {
        return this.LocalData.recovered - this.prevData.recovered;
      },
    }, */
    mounted() {
      this.getDailyCasesData();
    },
  },
};
</script>