<template>
    <div class="card mb-3">
        <div class="card-body">
            <h4 class="text-center">Worldwide Cases</h4>
            <p class="text-center text-secondary">Last Updated: {{date}} </p>
            <hr>  
            <div class="row">
                 <div class="col-md-3">
                    <div class="card"  style="border-style: none;">
                        <div class="card-body text-center">
                          <h5 class="card-title">Active Cases</h5>
                          <p class="card-text">  {{ active }}</p>
                        </div>
                    </div>
                </div> 
                <!-- Total Cases -->
                <div class="col-md-3">
                    <div class="card"  style="border-style: none;">
                        <div class="card-body text-center">
                          <h5 class="card-title">Total Cases</h5>
                          <p class="card-text">  {{ GlobalData.cases }} <span class="text-primary">(+{{ GlobalData.todayCases }} today)</span></p>
                        </div>
                    </div>
                </div> 
                <!-- Total Cases -->
                <!-- Total Deaths -->
                <div class="col-md-3">
                    <div class="card"  style="border-style: none;">
                        <div class="card-body text-center">
                          <h5 class="card-title text-center">Deaths</h5>
                          <p class="card-text"> {{ GlobalData.deaths }} <span class="text-danger">(+{{ GlobalData.todayDeaths }} today)</span></p>
                        </div>
                    </div>
                </div>
                <!-- Total Deaths -->
                <!-- Total Recoveries -->
                <div class="col-md-3">
                    <div class="card" style="border-style: none;">
                        <div class="card-body text-center">
                          <h5 class="card-title text-center">Recoveries</h5>
                          <p class="card-text"> {{ GlobalData.recovered }} <span class="text-success">(+{{todayRecovered}} today)</span></p>
                        </div>
                    </div>
                </div>
                <!-- Total Recoveries -->
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        data() {
            return{
                GlobalData: {},
                active: '',
                total: '',
                cases: '',
                deaths: '',
                recovery: '',
                prevRecovery: '',
                date: ''
            }
        },
        methods: {
            getGlobalTotals() {
                axios.all([
                    axios.get('https://corona.lmao.ninja/v2/all?yesterday=false'),
                    axios.get('https://corona.lmao.ninja/v2/all?yesterday=true')
                ]).then(res => { 
                    this.GlobalData = res[0].data;
                    this.prevRecovery = res[1].data.recovered 
                    this.active = this.GlobalData.active.toLocaleString();
                    this.cases = this.GlobalData.cases.toLocaleString();
                    this.deaths = this.GlobalData.deaths.toLocaleString();
                    this.recovery = this.GlobalData.recovered.toLocaleString();
                    this.date = new Date(this.GlobalData.updated).toLocaleString();
                })
            }
        },
        computed: {
            todayRecovered() {
                return this.GlobalData.recovered - this.prevRecovery;
            }
        },
        mounted() {
            this.getGlobalTotals();
        }
    }
</script>