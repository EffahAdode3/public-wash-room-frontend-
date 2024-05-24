<template>
    <div >
      <component :is="Nav"></component>
      <component :is="Sidebar"></component>
      <v-container style="margin-top: 100px">




        <div>   
            <v-col>
            <v-card 
            v-model = "currentDateTime"
            :text="currentDateTime"
              class="custom-card"
            ></v-card>
          </v-col>
         </div>
        <v-row justify="end">
          <v-col>
            <v-btn @click="handleBathButtonClick">
              Bath
            </v-btn>
          </v-col>
          <v-col>
            <v-card 
         
              subtitle="Total Number of Purchase"
              v-model="totalPeopleBath"
              :text="totalPeopleBath"
              title="People Purchase"
              class="custom-card"
            ></v-card>
          </v-col>
          <v-col>
            <v-card
              subtitle="Total Amount"
              v-model="totalAmountBath"
              :text="'GHC ' + totalAmountBath.toFixed(2)"
              title="Total Amount"
              class="custom-card"
            ></v-card>
          </v-col>
        </v-row>






        <!-- <div>
            <v-col>
            <v-card 
              :text="currentDateTime"
              class="custom-card"
            ></v-card>
          </v-col>
  </div> -->
        <v-row justify="end">
          <v-col>
            <v-btn @click="handleUrineButtonClick">
              Urine
            </v-btn>
          </v-col>
          <v-col>
            <v-card 
              subtitle="Total Number of Purchase"
              v-model="totalPeopleUrine"
              :text="totalPeopleUrine"
              title="People Purchase"
              class="custom-card"
            ></v-card>
          </v-col>
          <v-col>
            <v-card
              subtitle="Total Amount"
              v-model="totalAmountUrine"
              :text="'GHC ' + totalAmountUrine.toFixed(2)"
              title="Total Amount"
              class="custom-card"
            ></v-card>
          </v-col>
        </v-row>
  
        <v-row justify="end">
          <v-col>
            <v-btn @click="handleToiletButtonClick">
              Toilet
            </v-btn>
          </v-col>
          <v-col>
            <v-card 
              subtitle="Total Number of Purchase"
              v-model="totalPeopleToilet"
              :text="totalPeopleToilet"
              title="People Purchase"
              class="custom-card"
            ></v-card>
          </v-col>
          <v-col>
            <v-card
              subtitle="Total Amount"
              v-model="totalAmountToilet"
              :text="'GHC ' + totalAmountToilet.toFixed(2)"
              title="Total Amount"
              class="custom-card"
            ></v-card>
          </v-col>
        </v-row>
        <v-btn @click="submit">
  submit
</v-btn>
      </v-container>
    </div>
  </template>
  
  <script>
  import Nav from '../components/Nav.vue'
  import Sidebar from '../components/Sidebar.vue'
  import axios from "axios"
  import {base_url} from '../constant'
  export default {
    components: {
      Nav,
      Sidebar,
    },
    data() {
      return {
        Nav,
        Sidebar,
        totalPeopleBath: parseInt(localStorage.getItem('totalPeopleBath')) || 0,
        totalAmountBath: parseFloat(localStorage.getItem('totalAmountBath')) || 0,
        totalPeopleUrine: parseInt(localStorage.getItem('totalPeopleUrine')) || 0,
        totalAmountUrine: parseFloat(localStorage.getItem('totalAmountUrine')) || 0,
        totalPeopleToilet: parseInt(localStorage.getItem('totalPeopleToilet')) || 0,
        totalAmountToilet: parseFloat(localStorage.getItem('totalAmountToilet')) || 0,
        currentDateTime: ''
      };
    },
    mounted() {
    this.getCurrentDateTime();
  },
    methods: {
    submit() {
        axios
          .post(`${base_url}/store`, { 
            totalPeopleBath:this. totalPeopleBath,
            totalAmountBath:this.totalAmountBath,
            totalPeopleUrine:this.totalPeopleUrine,
            totalAmountUrine:this.totalAmountUrine,
            totalPeopleToilet:this.totalPeopleToilet,
            totalAmountToilet:this.totalAmountToilet,
            currentDateTime:this.currentDateTime })
          .then((res) => {
            if (res.status === 201) {
              localStorage.clear()
              console.log('Registration Successful');
            }
            console.log('Registration Successful');
          })
          .catch((error) => {
            console.log(error);
          })
      },
      handleBathButtonClick() {
        this.totalPeopleBath += 1;
        this.totalAmountBath += 2;
        localStorage.setItem('totalPeopleBath', this.totalPeopleBath);
        localStorage.setItem('totalAmountBath', this.totalAmountBath.toFixed(2));
      },

      handleUrineButtonClick() {
        this.totalPeopleUrine += 1;
        this.totalAmountUrine += 0.7;
        localStorage.setItem('totalPeopleUrine', this.totalPeopleUrine);
        localStorage.setItem('totalAmountUrine', this.totalAmountUrine.toFixed(2));
      },
      handleToiletButtonClick() {
        this.totalPeopleToilet += 1;
        this.totalAmountToilet += 1.5;
        localStorage.setItem('totalPeopleToilet', this.totalPeopleToilet);
        localStorage.setItem('totalAmountToilet', this.totalAmountToilet.toFixed(2));
      },
      getCurrentDateTime() {
      const date = new Date();
      const year = date.getFullYear();
      const month = date.getMonth() + 1; 
      const day = date.getDate();
      const hours = date.getHours();
      const minutes = date.getMinutes();
      const seconds = date.getSeconds();
      this.currentDateTime = `${day.toString().padStart(2, '0')}-${month.toString().padStart(2, '0')}-${year}`;
    }
    },
  };
  </script>
  