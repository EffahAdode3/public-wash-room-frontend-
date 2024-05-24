<template>
 <div class="table-container">
    <v-table density="compact" style="margin-top: 100px;">
      <thead>
        <tr>
          <th class="text-left">
         Date
          </th>
      
          <th class="text-left">
            Number Of People Use Bath House
          </th>
        
          <th class="text-left">
          Amount For Bath
          </th>
          <th class="text-left">
          NUmber of People Use  Urine
          </th>
          <th class="text-left">
          Amount For Urine
          </th>
          <th class="text-left">
        Number of People Use Toilet
          </th>
          <th class="text-left">
       Amount For Toilet
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(form, index) in formData" :key="index">
                      <th>{{ form.currentDateTime }}</th>
                      <td> {{ form.totalPeopleBath }}</td>
                      <td>GH   {{ form.totalAmountBath }}</td>
                      <td>{{ form.totalPeopleUrine }}</td>
                      <td>GH   {{ form.totalAmountUrine }}</td>
                      <td>{{ form.totalPeopleToilet }}</td>
                      <td>GH   {{ form.totalAmountToilet }}</td>
                    </tr>
      </tbody>
    </v-table>
</div>
</template>

<script>
import axios from 'axios'
import {base_url} from '../constant'

export default{
 data(){
    return{
         formData:''
    }
 },
 created(){
         axios.get(`${base_url}/records` )
           .then((response) => {
             this.formData = response.data.records;
             console.log(this.formData);
           })
           .catch((error) => {
             console.error("Error fetching products:", error);
           });
       },

}
</script>



<style scoped>
.table-container {
  margin: 0 auto; 
  max-width: 70%; 
  padding-top: 50px;
}
.custom-card {
  max-width: 300px; /* Set the desired max-width */
  margin: 0 10px 0 auto; /* Center the card horizontally */
}
</style>