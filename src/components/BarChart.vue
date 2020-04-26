<template>
    <div class="card mt-3 mb-3">
        <div class="card-body">
            <canvas id="bar-chart" height="250"></canvas>
        </div> 
    </div> 
</template>

<script>
import Chart from 'chart.js'
import axios from 'axios'
    export default {
        data() {
            return {
                history: [],
                deaths: [],
                recoevered : [],
                caseHistory: [],
                deathHistory: [],
                recoveryHistory: [],
                dates: []
            }
        },
        methods: {
            getCasesHistory() {
                axios.get('https://corona.lmao.ninja/v2/historical/Philippines?lastdays=30')
                .then(res => { 
                    return res.data.timeline
                }).then(data => {
                    this.history = Object.values(data.cases)
                    this.deaths = Object.values(data.deaths)
                    this.recoevered = Object.values(data.recovered)

                    this.dates = Object.keys(data.cases)

                    for(let i = 0; i <= this.history.length; i++) {
                        this.caseHistory.push(this.history[i+1] - this.history[i]);
                        this.deathHistory.push(this.deaths[i+1] - this.deaths[i]);
                        this.recoveryHistory.push(this.recoevered[i+1] - this.recoevered[i]);
                    }

                    new Chart(document.getElementById("bar-chart"), {
                        type: 'line',
                        data: {
                            labels: this.dates,
                            datasets: [
                            { 
                                data: this.caseHistory,
                                label: "New Cases",
                                borderColor: "#384259",
                                borderWidth: 2,        
                                fill: false
                            }, 
                            { 
                                data: this.deathHistory,
                                label: "New Deaths",
                                borderColor: "#f73859",
                                borderWidth: 2,
                                fill: false
                            }, 
                            { 
                                data: this.recoveryHistory,
                                label: "New Recoveries",
                                borderColor: "#7ac7c4 ",
                                borderWidth: 2,
                                fill: false
                            }, 
                            ]
                        },
                        options: {
                            title: {
                            display: true,
                            text: 'Daily number of new cases'
                            }
                        }
                        });
                })
            }
        },
        mounted() {
            this.getCasesHistory();
        }
    }
 
</script>