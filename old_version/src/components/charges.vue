<template>
  <div class="charges--container" v-if="checkinputData">
    <v-container class="mt-0 pt-0 charges--container--sm">
      <v-row class="subtitle-1 d-flex justify-center"> Local Charges </v-row>
      <div class="subtitle-1 d-flex wrap--charges--block">
        <div class="info--charges">
          <div class="d-flex flex-wrap">
            <div class="info-charges-block">
              <v-row justify="center"> Moving From </v-row>
              <v-col cols="12">
                <h3>{{ nameFromInfo }}</h3>
                <p class="mb-0">{{ addressFromInfo }}</p>
                <p class="mb-0" v-if="floorFromInfo">
                  Floor: {{ floorFromInfo }}
                </p>
                <p class="mb-0" v-if="aptFromInfo">Apt: {{ aptFromInfo }}</p>
                <p class="mb-0" v-if="phoneFromInfo">
                  <a :href="'tel:' + phoneFromInfo">{{ phoneFromInfo }}</a>
                </p>
                <p class="mb-0" v-if="phoneFrom2Info">
                  <a :href="'tel:' + phoneFrom2Info">{{ phoneFrom2Info }}</a>
                </p>
                <p class="mb-0" v-if="locationFromInfo">
                  {{ locationFromInfo }}
                </p>
                <p class="mb-0" v-if="levelFromInfo">{{ levelFromInfo }}</p>
              </v-col>
              <v-col v-if="addressFromInfo">
                <a
                  target="_blank"
                  :href="'https://www.google.com/maps/place/' + addressFromInfo"
                >
                  <img
                    class="charges--image"
                    :src="
                      'https://maps.googleapis.com/maps/api/staticmap?markers=color:blue%7C' +
                      addressFromInfo +
                      '&size=300x150&zoom=15&maptype=roadmap&key=AIzaSyAwWXleWh8d8A2lS2TbRAqqGp5-HLKyTh4'
                    "
                    alt="Image From"
                  />
                </a>
              </v-col>
            </div>
            <div class="d-flex flex-column">
              <v-row justify="center"> Moving To </v-row>
              <v-col>
                <h3 v-if="nameToInfo">{{ nameToInfo }}</h3>
                <p class="mb-0">{{ addressToInfo }}</p>
                <p class="mb-0" v-if="floorToInfo">Floor: {{ floorToInfo }}</p>
                <p class="mb-0" v-if="aptToInfo">Apt: {{ aptToInfo }}</p>
                <p class="mb-0" v-if="phoneToInfo">
                  <a :href="'tel:' + phoneToInfo">{{ phoneToInfo }}</a>
                </p>
                <p class="mb-0" v-if="faxInfo">Fax: {{ faxInfo }}</p>
                <p class="mb-0" v-if="locationToInfo">{{ locationToInfo }}</p>
                <p class="mb-0" v-if="levelToInfo">{{ levelToInfo }}</p>
              </v-col>
              <v-col v-if="addressToInfo">
                <a
                  target="_blank"
                  :href="'https://www.google.com/maps/place/' + addressToInfo"
                >
                  <img
                    class="charges--image"
                    :src="
                      'https://maps.googleapis.com/maps/api/staticmap?markers=color:blue%7C' +
                      addressToInfo +
                      '&size=300x150&zoom=15&maptype=roadmap&key=AIzaSyAwWXleWh8d8A2lS2TbRAqqGp5-HLKyTh4'
                    "
                    alt="Image From"
                  />
                </a>
              </v-col>
            </div>
          </div>
          <div v-if="extraAddressInfo" class="info--charges--email pl-3">
            <p class="subtitle-1">Extra Stop:</p>
            <p>{{ extraAddressInfo }}</p>
            <a
              target="_blank"
              :href="'https://www.google.com/maps/place/' + extraAddressInfo"
            >
              <img
                class="charges--image"
                :src="
                  'https://maps.googleapis.com/maps/api/staticmap?markers=color:blue%7C' +
                  extraAddressInfo +
                  '&size=300x150&zoom=15&maptype=roadmap&key=AIzaSyAwWXleWh8d8A2lS2TbRAqqGp5-HLKyTh4'
                "
                alt="Image From"
              />
            </a>
          </div>
          <div class="info--charges--email pl-3">
            <a :href="'mailto:' + emailInfo">{{ emailInfo }}</a>
          </div>
        </div>
        <v-col cols="3" class="info--charges--setting">
          <v-row justify="center"> Job is {{ status }} </v-row>
          <v-row class="ml-2 d-flex">
            <p>Job №:</p>
            <p class="ml-1 blue--text"></p>
          </v-row>
          <div class="ml-2 setting--block">
            <div class="setting--input">
              <v-text-field
                v-model="volume"
                outlined
                class="d-inline-block"
                label="cf."
              ></v-text-field>
            </div>
            <div class="ml-3">
              <p class="d-inline-block" v-if="volume">{{ volume * 7 }} lbs</p>
            </div>
          </div>
          <div class="d-flex">
            <p class="ml-3 mr-4">Pick-Up:</p>
            <p>{{ datepickerInfo }}</p>
          </div>
          <div class="d-flex">
            <p class="ml-3 mr-4">Arrival Time:</p>
            <p>{{ arrivalTimeInfo }}</p>
          </div>
          <div class="d-flex">
            <p class="ml-3 mr-4">Distance:</p>
            <p>{{ rangeInfo }}</p>
          </div>
          <div class="d-flex">
            <p class="ml-3 mr-4">Type:</p>
            <p>{{ typeOfMoveInfo }}</p>
          </div>
          <div class="d-flex">
            <v-select
                :items="bindings"
                v-model="binding"
                label="Binding Type:"
            ></v-select>
          </div>
        </v-col>
      </div>

      <div class="mt-5">
        <div class="align-baseline">
          <div class="charges--table--row d-flex flex-wrap flex-row">
            <div class="charges--table--title">Labor:</div>
            <div>
              <v-select
                class="mr-2 charges--select"
                dense
                :items="vans"
                outlined
                label="Van"
                v-model="vansLabor"
              >
              </v-select>
            </div>
            <div>
              <v-select
                class="mr-3 charges--select"
                dense
                :items="workers"
                outlined
                label="Workers"
                v-model="workersLabor"
              >
              </v-select>
            </div>
            <div>
              <v-text-field
                class="mr-2 charges--input"
                dense
                label="hrs"
                outlined
                v-model="hrsLabor"
              >
              </v-text-field>
            </div>
            <div>
              <v-text-field
                class="charges--input charges--per mr-2"
                dense
                label="per hrs"
                outlined
                v-model="perHrsLabor"
              >
              </v-text-field>
            </div>
            <div class="green--text">
              <div class="charges--table--total">
                {{ hrsLabor * perHrsLabor }}
              </div>
            </div>
          </div>
          <div class="charges--table--row d-flex flex-wrap flex-row">
            <div class="charges--table--title">Travel:</div>
            <div class="charges--table--title">
              <v-select
                class="mr-2 charges--select"
                dense
                :items="vans"
                outlined
                label="Van"
                v-model="vansTravel"
              >
              </v-select>
            </div>
            <div class="charges--table--title">
              <v-select
                class="mr-2 charges--select"
                dense
                :items="workers"
                outlined
                label="Workers"
                v-model="workersTravel"
              >
              </v-select>
            </div>
            <div class="charges--table--title">
              <v-text-field
                class="charges--input"
                dense
                label="hrs"
                outlined
                v-model="hrsTravel"
              >
              </v-text-field>
            </div>
            <div class="charges--table--title">
              <v-text-field
                class="charges--input charges--per"
                dense
                label="per hrs"
                outlined
                v-model="perHrsTravel"
              >
              </v-text-field>
            </div>
            <div class="green--text">
              <div class="charges--table--total">
                {{ hrsTravel * perHrsTravel }}
              </div>
            </div>
          </div>
          <div class="charges--table--row d-flex">
            <div colspan="5" class="charges--table--title">Fuel & Mileage:</div>
            <div class="charges--table--title">
              <div class="charges--table--total charges--table--price">
                <v-text-field dense placeholder="0.00" v-model="fuelMile">
                </v-text-field>
              </div>
            </div>
          </div>
          <div class="d-flex justify-space-between align-end flex-wrap">
            <div class="charges--block--info">
              <div class="charges--table--row d-flex align-baseline">
                <div class="charges--table--title">Others:</div>
                <div colspan="4">
                  <div>
                    <v-combobox :items="infoForPrice" v-model="infoPrice">
                    </v-combobox>
                  </div>
                </div>
                <div class="charges--table--title">
                  <div class="charges--table--total charges--table--price">
                    <v-text-field
                      dense
                      placeholder="0.00"
                      :value="findPriceInString"
                      readonly
                    >
                    </v-text-field>
                  </div>
                </div>
              </div>
              <div class="charges--table--row d-flex align-baseline">
                <div class="charges--table--title">Others:</div>
                <div colspan="4">
                  <div>
                    <v-combobox :items="infoForPrice" v-model="infoPrice2">
                    </v-combobox>
                  </div>
                </div>
                <div class="charges--table--title">
                  <div class="charges--table--total charges--table--price">
                    <v-text-field
                      dense
                      placeholder="0.00"
                      :value="findPriceInString2"
                      readonly
                    >
                    </v-text-field>
                  </div>
                </div>
              </div>
              <div class="charges--table--row d-flex align-baseline">
                <div class="charges--table--title">Others:</div>
                <div colspan="4">
                  <div>
                    <v-combobox :items="infoForPrice" v-model="infoPrice3">
                    </v-combobox>
                  </div>
                </div>
                <div class="charges--table--title">
                  <div class="charges--table--total charges--table--price">
                    <v-text-field
                      dense
                      placeholder="0.00"
                      :value="findPriceInString3"
                      readonly
                    >
                    </v-text-field>
                  </div>
                </div>
              </div>
              <div class="charges--table--row d-flex align-baseline">
                <div colspan="4"></div>
                <div class="text-subtitle-2">Subtotal:</div>
                <div>
                  <div class="charges--table--total charges--table--price">
                    {{ subTotalPrice }}
                  </div>
                </div>
              </div>
            </div>
            <div class="charges--block--info">
              <div class="charges--table--row d-flex align-baseline">
                <div class="charges--table--title">Liable:</div>
                <div colspan="4">
                  <div>
                    <v-text-field v-model="liable"> </v-text-field>
                  </div>
                </div>
                <div class="charges--table--title">
                  <div class="charges--table--total charges--table--price">
                    <v-text-field
                      dense
                      placeholder="0.00"
                      v-model="liablePrice"
                    >
                    </v-text-field>
                  </div>
                </div>
              </div>
              <div class="charges--table--row d-flex align-baseline">
                <div class="charges--table--title">Discount:</div>
                <div colspan="4">
                  <div>
                    <v-text-field v-model="discount"> </v-text-field>
                  </div>
                </div>
                <div class="charges--table--title">
                  <div class="charges--table--total charges--table--price">
                    <v-text-field
                      dense
                      placeholder="0.00"
                      v-model="discountPrice"
                    >
                    </v-text-field>
                  </div>
                </div>
              </div>
              <div class="charges--table--row d-flex align-baseline">
                <div colspan="4"></div>
                <div class="text-subtitle-2">Total Estimate:</div>
                <div>
                  <div class="charges--table--total charges--table--price">
                    {{ totalPrice }}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="charges--table--row d-flex align-baseline">
            <div class="charges--table--title"></div>
            <div class="charges--text--info" colspan="4">
              <div>
                <v-textarea
                  placeholder="Add Text to Remarks:"
                  v-model="infoText"
                  rows="1"
                >
                </v-textarea>
              </div>
            </div>
            <div class="charges--table--title"></div>
          </div>
        </div>
        <v-row class="mt-3 ml-3" justify="center">
          <v-row>
            <v-btn @click="addExtraStop" class="mr-3">Extra Stop</v-btn>
            <v-btn v-if="!orderNumberInfo" @click="saveOrder()"
              >Save Order</v-btn
            >
            <v-btn v-else @click="updateOrder()">Update Order</v-btn>
          </v-row>
        </v-row>
      </div>
    </v-container>
    <div class="text-center">
      <v-dialog v-model="dialog" persistent width="500">
        <v-card>
          <v-card-title class="headline grey lighten-2">
            Add Extra Stop
          </v-card-title>

          <v-card-text class="mb-0 pb-0 mt-3">
            <v-col class="py-1" cols="12">
              <v-text-field
                class="pt-0"
                id="extraAddress"
                label="Extra Address"
                ref="extraAddress"
                v-model="extraAddress"
                placeholder=""
                required
              ></v-text-field>
            </v-col>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="error" text @click="dialog = false"> Cancel </v-btn>
            <v-btn color="primary" text @click="saveExtraStop"> Save </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </div>
  <div v-else>
    <v-container>
      <v-row justify="center">
        <p>
          Please set information in
          <b class="charges--link" @click="selectTab(0)">Entry Form</b>
        </p>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "charges",
  data() {
    return {
      vans: ["1", "2", "3"],
      workers: ["1", "2", "3", "4", "5"],
      infoForPrice: [
        "First 3 hours $460, each additional $115 per hour",
        "First 3 hours $540, each additional $135 per hour",
        "First 3 hours $660, each additional $165 per hour",
        "Moving: $",
        "Travel: $",
      ],
      dialog: false,
      extraAutocomplete: null,
      extr: null,
      bindings:['None','Binding', 'Non-Binding']
    };
  },
  methods: {
    ...mapMutations(["setInfo", "selectTab", "clearStore"]),
    addExtraStop() {
      this.dialog = true;
      setTimeout(() => {
        let options = {
          componentRestrictions: {
            country: "us",
          },
        };
        // eslint-disable-next-line no-undef
        this.extraAutocomplete = new google.maps.places.Autocomplete(
          document.getElementById("extraAddress"),
          { types: ["geocode"], options }
        );
        this.extraAutocomplete.addListener("place_changed", () => {
          let place = this.extraAutocomplete.getPlace();
          this.$refs.extraAddress.$refs.input.value = place.formatted_address;
        });
      }, 300);
    },
    saveExtraStop() {
      this.setInfo({
        type: "extraAddress",
        info: this.$refs.extraAddress.$refs.input.value,
      });
      this.dialog = false;
    },
    saveOrder() {
      let obj = {
        entryParams: {
          nameFromInfo: this.nameFromInfo,
          addressFromInfo: this.addressFromInfo,
          locationFromInfo: this.locationFromInfo,
          levelFromInfo: this.levelFromInfo,
          floorFromInfo: this.floorFromInfo,
          aptFromInfo: this.aptFromInfo,
          phoneFromInfo: this.phoneFromInfo,
          phoneFrom2Info: this.phoneFrom2Info,
          emailInfo: this.emailInfo,
          nameToInfo: this.nameToInfo,
          addressToInfo: this.addressToInfo,
          locationToInfo: this.locationToInfo,
          levelToInfo: this.levelToInfo,
          floorToInfo: this.floorToInfo,
          aptToInfo: this.aptToInfo,
          phoneToInfo: this.phoneToInfo,
          faxInfo: this.faxInfo,
          datepickerInfo: this.datepickerInfo,
          informationInfo: this.informationInfo,
          roomsInfo: this.roomsInfo,
          arrivalTimeInfo: this.arrivalTimeInfo,
          typeOfMoveInfo: this.typeOfMoveInfo,
          extraAddressInfo: this.extraAddressInfo,
          volumeInfo: this.volumeInfo,
          rangeInfo: this.rangeInfo,
          vansLaborInfo: this.vansLaborInfo,
          workersLaborInfo: this.workersLaborInfo,
          vansTravelInfo: this.vansTravelInfo,
          workersTravelInfo: this.workersTravelInfo,
          hrsLaborInfo: this.hrsLaborInfo,
          perHrsLaborInfo: this.perHrsLaborInfo,
          perHrsTravelInfo: this.perHrsTravelInfo,
          hrsTravelInfo: this.hrsTravelInfo,
          fuelMileInfo: this.fuelMileInfo,
          statusInfo: 'Accepted',
          liableInfo: this.liableInfo,
          infoPriceInfo: this.infoPriceInfo,
          infoPrice2Info: this.infoPrice2Info,
          infoPrice3Info: this.infoPrice3Info,
          liablePriceInfo: this.liablePriceInfo,
          discountInfo: this.discountInfo,
          discountPriceInfo: this.discountPriceInfo,
          infoTextInfo: this.infoTextInfo,
          stateTo: this.stateToInfo,
          estimateDate: this.currentDate,
          subTotalPrice: this.subTotalPriceInfo,
          inventory: this.inventoryInfo,
          specialInventory: this.specialInventory,
          binding:this.bindingInfo
        },
      };
      let prices = this.getPrices;

      let saveOrderToUser = (values, prices, order, name, email) => {
        fetch("/php/saveOrderToUser.php", {
          method: "POST",
          body: JSON.stringify({ values, prices, order, name, email }),
        }).then((promise) => {
          if (promise.status == 200) {
            this.clearStore();
          } else {
            console.error(promise.status);
          }
        });
      };
      saveOrderToUser(
        obj,
        prices,
        Date.now(),
        this.nameFromInfo,
        this.emailInfo
      );
    },
    updateOrder() {
      let obj = {
        entryParams: {
          nameFromInfo: this.nameFromInfo,
          addressFromInfo: this.addressFromInfo,
          locationFromInfo: this.locationFromInfo,
          levelFromInfo: this.levelFromInfo,
          floorFromInfo: this.floorFromInfo,
          aptFromInfo: this.aptFromInfo,
          phoneFromInfo: this.phoneFromInfo,
          phoneFrom2Info: this.phoneFrom2Info,
          emailInfo: this.emailInfo,
          nameToInfo: this.nameToInfo,
          addressToInfo: this.addressToInfo,
          locationToInfo: this.locationToInfo,
          levelToInfo: this.levelToInfo,
          floorToInfo: this.floorToInfo,
          aptToInfo: this.aptToInfo,
          phoneToInfo: this.phoneToInfo,
          faxInfo: this.faxInfo,
          datepickerInfo: this.datepickerInfo,
          informationInfo: this.informationInfo,
          roomsInfo: this.roomsInfo,
          arrivalTimeInfo: this.arrivalTimeInfo,
          typeOfMoveInfo: this.typeOfMoveInfo,
          extraAddressInfo: this.extraAddressInfo,
          volumeInfo: this.volumeInfo,
          rangeInfo: this.rangeInfo,
          vansLaborInfo: this.vansLaborInfo,
          workersLaborInfo: this.workersLaborInfo,
          vansTravelInfo: this.vansTravelInfo,
          workersTravelInfo: this.workersTravelInfo,
          hrsLaborInfo: this.hrsLaborInfo,
          perHrsLaborInfo: this.perHrsLaborInfo,
          perHrsTravelInfo: this.perHrsTravelInfo,
          hrsTravelInfo: this.hrsTravelInfo,
          fuelMileInfo: this.fuelMileInfo,
          statusInfo: this.statusInfo,
          liableInfo: this.liableInfo,
          infoPriceInfo: this.infoPriceInfo,
          infoPrice2Info: this.infoPrice2Info,
          infoPrice3Info: this.infoPrice3Info,
          liablePriceInfo: this.liablePriceInfo,
          discountInfo: this.discountInfo,
          discountPriceInfo: this.discountPriceInfo,
          infoTextInfo: this.infoTextInfo,
          stateTo: this.stateToInfo,
          estimateDate: this.currentDate,
          subTotalPrice: this.subTotalPriceInfo,
          inventory: this.inventoryInfo,
          specialInventory: this.specialInventory,
          binding:this.bindingInfo
        },
      };
      let prices = this.getPrices;
      let updateOrder = (obj, prices, order, name, email) => {
        fetch("/php/updateUserOrder.php", {
          method: "POST",
          body: JSON.stringify({ obj, prices, order, name, email }),
        }).then((promise) => {
          if (promise.status == 200) {
            this.clearStore();
          } else {
            console.error(promise.status);
          }
        });
      };
      updateOrder(
        obj,
        prices,
        this.orderNumberInfo,
        this.nameFromInfo,
        this.emailInfo
      );
    },
    calculateSubtotalPrice() {
      let result =
        this.hrsTravel * this.perHrsTravel +
        +(this.hrsLabor * this.perHrsLabor) +
        +this.fuelMile +
        +this.findPriceInString +
        +this.findPriceInString2 +
        +this.findPriceInString3;
      this.setInfo({ type: "subTotalPrice", info: result });
      return result;
    },
  },
  mounted() {
    // eslint-disable-next-line no-undef
    let service = new google.maps.DistanceMatrixService();
    if (this.addressFromInfo && this.addressToInfo) {
      service.getDistanceMatrix(
        {
          origins: [this.addressFromInfo],
          destinations: [this.addressToInfo],
          travelMode: "DRIVING",
          unitSystem: 1,
        },
        (response, status) => {
          if (status === "OK") {
            let results = response.rows[0].elements;
            let range = results[0].distance.value;
            this.setInfo({ type: "range", info: Math.round(range / 1609.34) });
          } else {
            console.error("Error!");
          }
        }
      );
    }
  },
  watch:{
    addressFromInfo(){
      // eslint-disable-next-line no-undef
      let service = new google.maps.DistanceMatrixService();
      if (this.addressFromInfo && this.addressToInfo) {
        service.getDistanceMatrix(
            {
              origins: [this.addressFromInfo],
              destinations: [this.addressToInfo],
              travelMode: "DRIVING",
              unitSystem: 1,
            },
            (response, status) => {
              if (status === "OK") {
                let results = response.rows[0].elements;
                let range = results[0].distance.value;
                this.setInfo({ type: "range", info: Math.round(range / 1609.34) });
              } else {
                console.error("Error!");
              }
            }
        );
      }
    },
    addressToInfo(){
      // eslint-disable-next-line no-undef
      let service = new google.maps.DistanceMatrixService();
      if (this.addressFromInfo && this.addressToInfo) {
        service.getDistanceMatrix(
            {
              origins: [this.addressFromInfo],
              destinations: [this.addressToInfo],
              travelMode: "DRIVING",
              unitSystem: 1,
            },
            (response, status) => {
              if (status === "OK") {
                let results = response.rows[0].elements;
                let range = results[0].distance.value;
                this.setInfo({ type: "range", info: Math.round(range / 1609.34) });
              } else {
                console.error("Error!");
              }
            }
        );
      }
    }
  },
  computed: {
    ...mapGetters([
      "getPrices",
      "nameFromInfo",
      "addressFromInfo",
      "locationFromInfo",
      "levelFromInfo",
      "floorFromInfo",
      "aptFromInfo",
      "phoneFromInfo",
      "phoneFrom2Info",
      "emailInfo",
      "nameToInfo",
      "addressToInfo",
      "locationToInfo",
      "levelToInfo",
      "floorToInfo",
      "aptToInfo",
      "phoneToInfo",
      "faxInfo",
      "datepickerInfo",
      "informationInfo",
      "roomsInfo",
      "arrivalTimeInfo",
      "typeOfMoveInfo",
      "extraAddressInfo",
      "volumeInfo",
      "rangeInfo",
      "vansLaborInfo",
      "workersLaborInfo",
      "vansTravelInfo",
      "workersTravelInfo",
      "hrsLaborInfo",
      "perHrsLaborInfo",
      "perHrsTravelInfo",
      "hrsTravelInfo",
      "fuelMileInfo",
      "statusInfo",
      "liableInfo",
      "infoPriceInfo",
      "infoPrice2Info",
      "infoPrice3Info",
      "liablePriceInfo",
      "discountInfo",
      "discountPriceInfo",
      "infoTextInfo",
      "subTotalPriceInfo",
      "stateToInfo",
      "inventoryInfo",
      "orderNumberInfo",
      "specialInventory",
        "bindingInfo"
    ]),
    checkinputData() {
      return this.addressFromInfo && this.addressToInfo && this.nameFromInfo;
    },
    volume: {
      get() {
        return this.volumeInfo;
      },
      set(value) {
        this.setInfo({ type: "volume", info: value });
      },
    },
    datepicker: {
      get() {
        return this.datepickerInfo;
      },
      set(value) {
        this.setInfo({ type: "datepicker", info: value });
      },
    },
    vansLabor: {
      get() {
        return this.vansLaborInfo;
      },
      set(value) {
        this.setInfo({ type: "vansLabor", info: value });
      },
    },
    workersLabor: {
      get() {
        return this.workersLaborInfo;
      },
      set(value) {
        this.setInfo({ type: "workersLabor", info: value });
      },
    },
    hrsLabor: {
      get() {
        return this.hrsLaborInfo;
      },
      set(value) {
        this.setInfo({ type: "hrsLabor", info: value });
      },
    },
    perHrsLabor: {
      get() {
        return this.perHrsLaborInfo;
      },
      set(value) {
        this.setInfo({ type: "perHrsLabor", info: value });
      },
    },
    vansTravel: {
      get() {
        return this.vansTravelInfo;
      },
      set(value) {
        this.setInfo({ type: "vansTravel", info: value });
      },
    },
    workersTravel: {
      get() {
        return this.workersTravelInfo;
      },
      set(value) {
        this.setInfo({ type: "workersTravel", info: value });
      },
    },
    hrsTravel: {
      get() {
        return this.hrsTravelInfo;
      },
      set(value) {
        this.setInfo({ type: "hrsTravel", info: value });
      },
    },
    perHrsTravel: {
      get() {
        return this.perHrsTravelInfo;
      },
      set(value) {
        this.setInfo({ type: "perHrsTravel", info: value });
      },
    },
    findPriceInString() {
      let price = this.infoPrice;
      if (price) {
        let end = price.match(/(\$\d+)/);
        return end[0].replace("$", "");
      }
      return null;
    },
    findPriceInString2() {
      let price = this.infoPrice2;
      if (price) {
        let end = price.match(/(\$\d+)/);
        return end[0].replace("$", "");
      }
      return null;
    },
    findPriceInString3() {
      let price = this.infoPrice3;
      if (price) {
        let end = price.match(/(\$\d+)/);
        return end[0].replace("$", "");
      }
      return null;
    },
    fuelMile: {
      get() {
        return this.fuelMileInfo;
      },
      set(value) {
        this.setInfo({ type: "fuelMile", info: value });
      },
    },
    liable: {
      get() {
        return this.liableInfo;
      },
      set(value) {
        this.setInfo({ type: "liable", info: value });
      },
    },
    liablePrice: {
      get() {
        return this.liablePriceInfo;
      },
      set(value) {
        this.setInfo({ type: "liablePrice", info: value });
      },
    },
    discount: {
      get() {
        return this.discountInfo;
      },
      set(value) {
        this.setInfo({ type: "discount", info: value });
      },
    },
    discountPrice: {
      get() {
        return this.discountPriceInfo;
      },
      set(value) {
        this.setInfo({ type: "discountPrice", info: value });
      },
    },
    infoPrice: {
      get() {
        return this.infoPriceInfo;
      },
      set(value) {
        this.setInfo({ type: "infoPrice", info: value });
      },
    },
    infoPrice2: {
      get() {
        return this.infoPrice2Info;
      },
      set(value) {
        this.setInfo({ type: "infoPrice2", info: value });
      },
    },
    infoPrice3: {
      get() {
        return this.infoPrice3Info;
      },
      set(value) {
        this.setInfo({ type: "infoPrice3", info: value });
      },
    },
    subTotalPrice() {
      return this.calculateSubtotalPrice();
    },
    status() {
      return this.statusInfo;
    },
    totalPrice() {
      let result = this.subTotalPrice - this.liablePrice - this.discountPrice;

      return result;
    },
    infoText: {
      get() {
        return this.infoTextInfo;
      },
      set(value) {
        this.setInfo({ type: "infoText", info: value });
      },
    },
    currentDate() {
      let options = {
        month: "numeric",
        day: "numeric",
        year: "numeric",
      };
      return new Date().toLocaleString("en-US", options);
    },
    extraAddress: {
      get() {
        return this.extraAddressInfo;
      },
      set(value) {
        this.extr = value;
      },
    },
    binding: {
      get() {
        return this.bindingInfo;
      },
      set(value) {
        this.setInfo({ type: "binding", info: value });
      },
    },
  },
};
</script>

<style scoped>
.charges--container {
  max-width: 1185px;
  margin: 0 auto;
}

.info--charges {
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 1px solid #808080;
  border-radius: 4px;
}

.setting--input {
  width: 70px;
}

.info--charges--setting {
  border: 1px solid #808080;
  border-radius: 4px;
}

.info-charges-block {
  border-right: 1px solid #808080;
}

.charges--table--title {
  width: 80px;
  padding-right: 10px;
}

.charges--table--row {
  max-width: 700px;
  vertical-align: baseline;
}

.charges--table--total {
  text-align: center;
  padding-left: 29px;
  padding-bottom: 7px;
  border-bottom: 1px solid grey;
  font-size: 16px;
  font-weight: 600;
  width: 80px;
}

.charges--table--price {
  text-align: center;
  border-bottom: none;
}

.charges--select {
  width: 75px;
}

.charges--block {
  width: 60%;
}

.charges--input {
  width: 75px;
}

.charges--input.charges--per {
  width: 100px;
}

.setting--block {
  display: flex;
  flex-direction: row;
  align-items: baseline;
}

.info--charges--email {
  border-top: 1px solid #808080;
}

.charges--link {
  text-decoration: underline;
  cursor: pointer;
}

@media screen and (max-width: 700px) {
  .wrap--charges--block {
    flex-wrap: wrap;
  }
  .charges--block--info {
    width: 100%;
  }
  .info-charges-block {
    border-right: none;
  }
  .charges--container--sm {
    padding: 0;
  }
  .info--charges--setting.col.col-3 {
    border: 1px solid #808080;
    border-radius: 4px;
    max-width: 100%;
    flex: none;
  }
  .charges--table--row {
    padding: 5px;
    border: 1px solid #808080;
    border-radius: 5px;
    margin: 5px 0;
  }
  .charges--image {
    max-width: 100%;
  }
  .charges--text--info {
    flex: none;
    max-width: 80%;
  }
  .sidebar-list {
    display: block;
  }
}
</style>