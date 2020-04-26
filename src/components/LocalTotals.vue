<template>
    <div class="card mb-3">
        <div class="card-body">
            <h4 class="text-center">Philippines</h4>
            <hr>  
            <div class="row">
                 <div class="col-md-3">
                    <div class="card"  style="border-style: none;">
                        <div class="card-body text-center">
                          <h5 class="card-title">Active Cases</h5>
                          <p class="card-text">  {{ active }} </p>
                        </div>
                    </div>
                </div> 
                <!-- Total Cases -->
                <div class="col-md-3">
                    <div class="card"  style="border-style: none;">
                        <div class="card-body text-center">
                          <h5 class="card-title"> Total Cases</h5>
                          <p class="card-text">  {{ total }} <span class="text-info">(+{{ LocalData.todayCases }} today)</span></p>
                        </div>
                    </div>
                </div> 
                <!-- Total Cases -->
                <!-- Total Deaths -->
                <div class="col-md-3">
                    <div class="card"  style="border-style: none;">
                        <div class="card-body text-center">
                          <h5 class="card-title text-center">Deaths</h5>
                          <p class="card-text"> {{ deaths }} <span class="text-danger">(+{{ LocalData.todayDeaths }} today)</span></p>
                        </div>
                    </div>
                </div>
                <!-- Total Deaths -->
                <!-- Total Recoveries -->
                <div class="col-md-3">
                    <div class="card" style="border-style: none;">
                        <div class="card-body text-center">
                          <h5 class="card-title text-center">Recoveries</h5>
                          <p class="card-text"> {{ recovered }} <span class="text-success">(+{{ todayRecovered }} today)</span></p>
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
                LocalData: {},
                active: '',
                total: '',
                cases: '',
                deaths: '',
                recovered: '',
                prevRecovery: ''
            }
        },
        methods: {
            getLocalTotals() {
                axios.all([
                    axios.get('https://corona.lmao.ninja/v2/countries/Philippines?yesterday=false&strict=true'),
                    axios.get('https://corona.lmao.ninja/v2/countries/Philippines?yesterday=true&strict=true')
                ]).then(res => { 
                    this.LocalData = res[0].data;
                    this.prevRecovery = res[1].data.recovered; 
                    this.active = this.LocalData.active.toLocaleString();
                    this.total = this.LocalData.cases.toLocaleString();
                    this.cases = this.LocalData.cases.toLocaleString();
                    this.deaths = this.LocalData.deaths.toLocaleString();
                    this.recovered = this.LocalData.recovered.toLocaleString();
                })
            }
        },
        computed: {
            todayRecovered() {
                return this.LocalData.recovered - this.prevRecovery;
            }
        },
        mounted() {
            this.getLocalTotals();
        }
    }
</script>