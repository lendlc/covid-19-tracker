<template>
  <div class="home">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <LocalsTotal/>
        </div>
        <!-- Local Data --> 
        <div class="col-md-8">
          <BarChart/>
          
        </div>
        
          <div class="col-md-4">
            <PieChart/>
            <LineChart/>
          </div>
         
        </div>
    </div>
  </div>
</template>

<script>
import LocalsTotal from '../components/LocalTotals.vue';
import LineChart from '../components/LineChart.vue';
import PieChart from '../components/PieChart.vue';
import BarChart from '../components/BarChart.vue';

export default {
  components: {
    LocalsTotal,
    LineChart,
    PieChart,
    BarChart
  }
}
</script>

<style>

.card{
  border-radius: 18px;
}
</style>

