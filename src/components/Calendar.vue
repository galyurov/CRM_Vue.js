<template>
  <v-main class="pl-0 d-flex text-center">
    <v-main class="my-0 d-flex justify-center">
      <v-container class="pb-0">
        <v-row justify="center">
          <v-btn left @click="prevMonth" class="primary">
            <v-icon left>mdi-chevron-left</v-icon>
            Previous month
          </v-btn>
          <v-btn @click="currentDate()" class="primary">
            Current Month
          </v-btn>
          <v-btn right @click="nextMonth" class="primary">
            Next month
            <v-icon right>mdi-chevron-right</v-icon>
          </v-btn>
        </v-row>
      </v-container>
      <v-container class="pb-0 d-flex justify-center flex-column align-center">
        <v-col lg="4" md="6" sm="6" xs="12" class=" pb-0 mb-0 d-flex justify-center">
          <v-select
              class="pb-0 mb-0"
              v-model="choiceYear"
              :items="getAllYears"
              solo
          >
          </v-select>
          <v-select
              class="pb-0 mb-0"
              :items='getAllMonths'
              item-text="name"
              item-value="id"
              v-model="choiceMonth"
              solo
          ></v-select>
        </v-col>
        <v-col lg="4" md="6" sm="6" xs="12" class=" pa-0 ma-0 d-flex justify-center">
          <div class="d-flex align-center mr-2">
            <div class="color--div-crm"></div>
            <div class="color--div--text"> - CRM</div>
          </div>
          <div class="d-flex  align-center">
            <div class="color--div-site"></div>
            <div class="color--div--text"> - Site</div>
          </div>
        </v-col>
      </v-container>
    </v-main>
    <v-container v-if="checkLoading">
      <div class="calendar-block">
        <div class="calendar-week-day">Sunday</div>
        <div class="calendar-week-day">Monday</div>
        <div class="calendar-week-day">Tuesday</div>
        <div class="calendar-week-day">Wednesday</div>
        <div class="calendar-week-day">Thursday</div>
        <div class="calendar-week-day">Friday</div>
        <div class="calendar-week-day">Saturday</div>

        <template>
          <div v-for="day in getNumberOfFirstDay" :key="day*3.14" class='another-month-day secondary'>
          </div>
          <div v-for="date in daysInMonth" class="calendar-day secondary" :key="date">
            <div class="primary calendar-day-number">{{ date }}</div>
            <div v-if="editedOrders[createDataStringForRender(date)]"
                 class="calendar-day-wrap">
              <div
                  v-for="(item, id,index) in editedOrders[createDataStringForRender(date)]"
                  :key="id"
                  @click="openModal({item,id})"
                  class="calendar-day-block accent"
                  :class="item.data.modalName || item.data.searchParam ? 'site' : 'crm'"
              >
                <span>{{ index + 1 }}.</span>
                <template v-if="item.data.modalName">
                  <span
                      style="color:#ff0000"><b>{{ item.data.estimateDate + '-' + item['№'] }}</b></span>
                  <v-divider></v-divider>
                  <div>{{ item.data.arrivalTime }}</div>
                  <v-divider></v-divider>
                  <div><b>{{ item.data.modalName}}</b></div>
                  <v-divider></v-divider>
                  <div v-html="item.data['modal-input-from']"></div>
                  <v-divider></v-divider>
                  <div v-html="item.data['modal-input-to']"></div>
                  <div class="divider" tabindex="-1"></div>
                  <div v-if="item.price.price === 460"><b>1 Truck/s, 2 Workers</b></div>
                  <div v-else-if="item.price.price === 540"><b>1 Truck/s, 3 Workers</b></div>
                  <div v-else-if="item.price.price === 660"><b>1 Truck/s, 4 Workers</b></div>
                  <v-divider></v-divider>
                  <div><b>{{ item.price.type}}</b></div>
                  <v-divider></v-divider>
                  <span><b>{{ item.price.name}}</b></span>
                  <v-divider></v-divider>
                  <span><b>{{ item.price.price - ((item.data.discount ? +getDiscountPrice(item.data.discount) : 0) + (item.data.discount2 ? +getDiscountPrice(item.data.discount2) : 0) )}} $</b></span>
                </template>
                <template v-else-if="item.data.searchParam">
                  <span
                      style="color:#ff0000"><b>{{ item.data.searchParam.estimateDate + '-' + item['№'] }}</b></span>
                  <v-divider></v-divider>
                  <div>{{ item.data.arrivalTime }}</div>
                  <v-divider></v-divider>
                  <div><b>{{item.data.searchParam['details-name'] }}</b></div>
                  <v-divider></v-divider>
                  <div v-html="item.data.searchParam.origin"></div>
                  <v-divider></v-divider>
                  <div v-html="item.data.searchParam.destination"></div>
                  <v-divider></v-divider>
                  <div><b>{{`${item.data.searchParam.range} mi`}}</b></div>
                  <v-divider></v-divider>
                  <span><b>{{item.data.searchParam.volume }}</b></span>
                  <v-divider></v-divider>
                  <span><b>{{item.data.searchParam.totalPrice - ((item.data.searchParam.discount ? +getDiscountPrice(item.data.searchParam.discount) : 0) + (item.data.searchParam.discount2 ? +getDiscountPrice(item.data.searchParam.discount2) : 0) ) }} $</b></span>
                </template>
                <template v-else>
                  <span
                      style="color:#ff0000"><b>{{ item.data.entryParams.estimateDate + '-' + item['№'] }}</b></span>
                  <v-divider></v-divider>
                  <div>{{ item.data.entryParams.arrivalTimeInfo ? item.data.entryParams.arrivalTimeInfo : '---'  }}</div>
                  <v-divider></v-divider>
                  <div><b>{{item.data.entryParams.nameFromInfo ?  item.data.entryParams.nameFromInfo : '---'}}</b></div>
                  <v-divider></v-divider>
                  <div v-html="item.data.entryParams.addressFromInfo"></div>
                  <v-divider></v-divider>
                  <div v-html="item.data.entryParams.addressToInfo"></div>
                  <v-divider></v-divider>
                  <div><b>{{`${item.data.entryParams.rangeInfo ? item.data.entryParams.rangeInfo : '---'} mi`}}</b></div>
                  <v-divider></v-divider>
                  <span><b>{{item.data.entryParams.volumeInfo ?item.data.entryParams.volumeInfo : '---'}} cf. ({{ (item.data.entryParams.volumeInfo ? item.data.entryParams.volumeInfo* 7 : '---' )}} lbs.)</b></span>
                  <v-divider></v-divider>
                  <span><b>{{calculateTotalPrice(item.data.entryParams)}} $</b></span>
                </template>
              </div>
            </div>
          </div>
        </template>
      </div>
      <v-tooltip left>
        <template v-slot:activator="{ on, attrs }">
          <v-btn style='z-index: 55'
                 v-bind="attrs"
                 v-on="on"
                 class="mx-2"
                 fab
                 elevation="6"
                 fixed
                 bottom
                 right
                 large
                 color="error"
                 @click="newEstimate()"
          >
            <v-icon dark>
              mdi-plus
            </v-icon>
          </v-btn>
        </template>
        <span>New Estimate</span>
      </v-tooltip>
    </v-container>
    <v-container v-else>
      <div class="text-center">
        <v-progress-circular
            :size="50"
            color="primary"
            indeterminate
        ></v-progress-circular>
      </div>
    </v-container>

    <modalWindow/>

  </v-main>
</template>

<script>
import {mapGetters, mapMutations,mapActions} from 'vuex'
import modalWindow from "@/components/modalWindow";

export default {
  name: "Calendar",
  components: {
    modalWindow
  },
  methods: {
    ...mapActions(['getOrdersFromDB', 'openModal']),
    ...mapMutations(['prevMonth', 'nextMonth', 'currentDate', 'setMonth', 'setYear','clearStore']),
    createDataStringForRender(day) {
      return `${this.getCurrentMonth + 1}/${day}/${this.getCurrentYear}`
    },
    calculateTotalPrice(obj){
      let result = +obj.subTotalPrice - (obj.liablePriceInfo ? obj.liablePriceInfo : 0)  - (obj.discountPriceInfo ? obj.discountPriceInfo : 0)

      return result
    },
    getDiscountPrice(discountText){
      let end = discountText.match(/(\$\d+)/)
      let price = end[0].replace('$','')
      return +price
    },
    newEstimate(){
      this.clearStore()
      this.$router.push('/new')
    }
  },
  created() {
    this.getOrdersFromDB()
    this.currentDate()
  },
  computed: {
    ...mapGetters(['getCurrentYear', 'getCurrentMonth', 'editedOrders', 'daysInMonth', 'getAllMonths', 'getAllYears', 'getNumberOfFirstDay','checkLoading']),

    choiceMonth: {
      get() {
        return this.getCurrentMonth
      },
      set(value) {
        this.setMonth(value)
      }
    },
    choiceYear: {
      get() {
        return this.getCurrentYear
      },
      set(value) {
        this.setYear(value)
      }
    },


  }
}

</script>

<style lang="scss">
.v-progress-circular {
  margin: 1rem;
}
[v-cloak] {
  display: none;
}

.brand-logo img {
  height: 55px;
}

.calendar {
  &-block {
    text-align: center;
    display: grid;
    grid-template-columns: repeat(7, minmax(120px, 260px));
    grid-gap: 1px;
  }

  &-day {
    border: 1px solid #f10b0b;
    border-radius: 10px;
    cursor: pointer;
    margin: 3px 1px;
    font-size: 13px;

    &-number {
      padding: 5px;
      font-size: 18px;
      font-weight: 600;
      position: relative;
      z-index: 5;
      border-bottom: 1px solid #bdbdbd;
      //background: #40c4ff;
      border-radius: 10px;
    }

    &-block {
      margin: 5px;
      border: 1px solid #050505;
      border-radius: 5px;
    }
  }
}

.dropdown-month {
  width: 100%;
}

.another-month-day {
  margin: 3px 1px;
  border: 1px solid #e4e2e2;
  border-radius: 10px;
  color: #bdbdbd;
}

.btn.calendar-button {
  color: #000000;
}

.block-lft {
  border-right: 1px solid #808080;
}

input:focus + label {
  color: #40c4ff !important;
}

input:focus {
  border-bottom: 1px solid #40c4ff !important;
  box-shadow: 0 1px 0 0 #40c4ff !important;
}

.row .form-title.s12 {
  margin: 0 0 10px 0;
  padding: 10px 0;
  font-size: 18px;
  border-bottom: 1px solid #808080;
}

.row .form-subtitle.s12 {
  margin: 0;
  padding: 10px 0;
  font-size: 16px;
}

.type-block {
  margin-top: 10px;
}

.type-head {
  margin-top: 30px;
  text-align: left;
}

[type="radio"]:checked + label::after, [type="radio"]:checked + label::after {
  background-color: rgb(255, 138, 6) !important;
}

[type="radio"]:checked + label::after, [type="radio"]:checked + label::before, [type="radio"]:checked + label::after {
  border: 2px solid rgb(255, 138, 6) !important;
}
.color--div-crm,.color--div-site{
  height: 20px;
  width: 20px;
  border-radius: 5px ;
  background-color: #ffb8b8;
  margin-right: 5px;
}
.calendar-day-wrap .calendar-day-block.crm {
  background-color: #ffb8b8 !important;
  color: #000000;
}
.calendar-day-wrap .calendar-day-block.site {
  background-color: #b0ffb0 !important;
  color: #000000;
}
.color--div-site{
  background-color: #b0ffb0;
}
</style>