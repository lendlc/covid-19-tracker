<template>
  <div class="mb-3">
    <div class="card">
      <div class="card-body">
        <h4 class="text-center mb-3">Countries Affected by COVID-19</h4>

        <div class="col-md-4 ml-auto">
          <b-input-group size="md" class="mb-3">
          <b-form-input
              v-model="filter"
              type="search"
              id="filterInput"
              placeholder="Type to Search"
              size="sm"
            ></b-form-input>
            <b-input-group-append>
              <b-button :disabled="!filter" size="sm" @click="filter=''">Clear</b-button>
            </b-input-group-append>
          </b-input-group>
        </div>
         
        <b-table 
          caption-top
          :items="items"
          :fields="fields"
          :sort-by.sync="sortBy"
          :sort-desc.sync="sortDesc"
          :filter="filter"
          responsive="sm"
          :current-page="currentPage"
          :per-page="perPage"
        >
        </b-table>
        <b-pagination
          pills 
          v-model="currentPage"
          :total-rows="totalRows"
          :per-page="perPage"
          align="right"
        ></b-pagination>
      </div> 
    </div>
  </div>
</template>

<script>
import axios from 'axios'
  export default {
    data() {
      return {
        sortBy: 'country',
        sortDesc: false,
        fields: [
          { key: 'country', sortable: true },
          { key: 'continent', sortable: true},
          { key: 'cases', sortable: true },
          { key: 'deaths', sortable: true },
          { key: 'recovered', sortable: true }
        ],
        totalRows: 1,
        currentPage: 1,
        perPage: 8,
        filter: null,
        items: []
      }
    },
    methods: {
      getGlobalData() {
        axios.get('https://corona.lmao.ninja/v2/countries?yesterday=false')
        .then(res => {
          return res.data;
        }).then(data => {
            this.items = data
            this.totalRows = this.items.length
        }, (error) => {
        console.log(error);
});
        
      }
    },
    mounted() { 
      this.getGlobalData();
    }
  }
</script>

<style scoped>

</style>