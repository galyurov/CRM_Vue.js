<template>
  <div class="inventory"  v-if="checkinputData">
    <div class="inventory-sidebar mr-3">
      <v-expansion-panels accordion focusable class="sidebar-list">
        <div class="d-flex flex-column">
          <div class="counter">
            <div class="counter-items"><span class="qty"></span>{{ calculateAllItems }} Items <span
                class="all-sizes"></span>{{ calculateAllVolumes }} c.f.
            </div>
          </div>
          <div class="search-block">
            <v-text-field
                v-model="searchName"
                class="px-0 my-0"
                label="Search for an item..."
            ></v-text-field>
          </div>
        </div>
        <v-expansion-panel
            class="sidebar-item"
            @click="myInventory"
        >
          <v-expansion-panel-header data-name="inventory" class="sidebar-content">
            <div class="sidebar-title">My inventory</div>
            <template v-slot:actions>
              <v-icon color="primary">
                mdi-star
              </v-icon>
            </template>
          </v-expansion-panel-header>
        </v-expansion-panel>
        <v-expansion-panel
            :key="title"
            v-for="(obj,title) in database"
            class="sidebar-item"

        >
          <v-expansion-panel-header data-name="inventory" class="sidebar-content">
            <div class="sidebar-title">{{ title }}</div>
            <span v-if="title != 'My inventory'" class="sidebar-number"
                  :class="{'red--text' : roomCounter(title)}">{{ roomCounter(title) }}</span>
          </v-expansion-panel-header>
          <v-expansion-panel-content
              v-if="title != 'My inventory'"
              class="categories-list"

          >
            <template
                v-for="(items,category) in obj">
              <li
                  v-if="category != 'Packing Boxes'"
                  :key="category"
                  class="sidebar-subitem"

                  @click="selectCategory(title,category)"
                  :class="{'selected' : checkSelectedSubCategory(title,category)}"
              >
                <span class="subitem-text">{{ category }}</span>
              </li>
            </template>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-btn
            block
            class="mt-3 inventory-button"
            color="primary"
            @click.stop="specialHandlingDialog = true"
        >
          Add Special Handling
        </v-btn>
        <v-dialog
            v-model="specialHandlingDialog"
            max-width="650"
        >
          <v-card>
            <v-card-title class="headline">
              Special Handling
            </v-card-title>
            <v-card-text class="pb-0">
              <b>Need your TV taken off the wall or your bed taken apart?</b>
            </v-card-text>
            <v-card-text>
              Add Special Handling to your items here.
            </v-card-text>
            <div class="pa-2 d-flex justify-center">
              <table class="table-spec-handling" width="90%">
                <thead>
                <tr>
                  <th class="table-th">Items</th>
                  <th class="table-th">ASSEMBLY & DISASSEMBLY</th>
                  <th class="table-th">WALL DISMOUNTING</th>
                </tr>
                </thead>
                <tbody>
                <template v-for="(room,id) in choisedItems">
                  <tr :key="id">
                    <td colspan="3" class="category__handling">{{ id }}</td>
                  </tr>
                  <tr class="table-row" :key="item.id" v-for="item in room">
                    <td class="vert__align">
                      <div class="handling__items__wrap">
                        <div class="inventory-img" :class="item.class+'_small'"></div>
                        <div class="item__info">
                          <p class="item-title">{{ item.name }}</p>
                          <p v-if="item.subname" class="item-text">{{ item.subname.replace(/u0022/g, '\"').replace(/u0027/g, '\"').replace(/u0026/g, '\&') }}</p>
                        </div>
                      </div>
                    </td>
                    <td class="vert__align">
                      <v-checkbox value="1" v-model="item.disassembly"></v-checkbox>
                    </td>
                    <td class="vert__align">
                      <v-checkbox value="1" v-model="item.wall"></v-checkbox>
                    </td>
                  </tr>
                </template>

                </tbody>
              </table>
            </div>

            <v-divider></v-divider>
            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn
                  color="error"
                  text
                  @click="specialHandlingDialog = false"
              >
                Cancel
              </v-btn>

              <v-btn
                  color="primary"
                  text
                  @click="addSpecialHandling()"
              >
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-btn
            block
            class="mt-3 inventory-button"
            color="error"
            @click="clearSelectedItems()"
        >
          Remove Selected Items
        </v-btn>
      </v-expansion-panels>

    </div>
    <div class="inventory-items ml-3">

      <div class="items-wrap">
        <div class="d-flex flex-wrap">
          <div v-if="!selectedCategory" class="d-flex justify-center">
            <div class="headline">No items...</div>
          </div>
          <template v-for="(value,name) in selectedCategory">
            <div :key="name" class="category__block">{{ name }}
            </div>
            <v-card
                v-for="card in value"
                :key="card.id*Math.random()"
                class="ma-1 card-elements"
                elevation="3"
            >
              <v-list-item class="d-flex flex-column positional">
                <v-list-item-icon
                    v-if="!checkDisplaySize"
                    :class="card.class + ' pa-0 ma-0 item-img align-self-start'"
                ></v-list-item-icon>
                <v-list-item-icon
                    v-else
                    :class="card.class + '_small pa-0 ma-0 item-img align-self-start'"
                ></v-list-item-icon>
                <v-list-item-content
                    class="card--content pa-0 ml-0 d-block"
                >
                  <div
                      class="card--name pa-0 ma-0 d-flex flex-column subtitle-2"
                  >
                    {{ card.name }}
                  </div>
                  <div class="pa-0 ma-0 pb-1">{{card.subname ? card.subname.replace(/u0022/g, '\"').replace(/u0027/g, '\"').replace(/u0026/g, '\&') : ''}}</div>
                </v-list-item-content>
                <div class="card--inputs">
                  <el-input-number size="mini" :min="0" v-model="card.qty"></el-input-number>
                </div>
              </v-list-item>
            </v-card>
          </template>
          <v-card
              v-if="room"
              class="ma-1 card-elements"
              elevation="3"
          >
            <v-list-item class="d-flex flex-column positional">
              <v-list-item-icon
                  v-if="!checkDisplaySize"
                  class="default_icon pa-0 ma-0 item-img align-self-start"
              ></v-list-item-icon>
              <v-list-item-icon
                  v-else
                  class="default_icon_small pa-0 ma-0 item-img align-self-start"
              ></v-list-item-icon>
              <v-list-item-content
                  class="card--content pa-0 ml-0 d-block"
              >
                <div
                    class="card--name pa-0 ma-0 d-flex flex-column subtitle-2"
                >
                  Custom Element
                </div>
                <div class="pa-0 ma-0 pb-1">Couldn't find your furniture?</div>
              </v-list-item-content>
              <div class="card--inputs">
                <template>
                  <v-btn
                      small
                      @click.stop="customElementDialog = true"
                  >
                    Add
                  </v-btn>
                  <v-dialog
                      v-model="customElementDialog"
                      max-width="650"
                  >
                    <v-card>
                      <v-card-title class="headline">
                        Add custom item
                      </v-card-title>
                      <v-card-text class="pb-0">
                        <b>Please add items from the catalog on the left unless the custom items are really unique.</b>
                      </v-card-text>
                      <v-card-text>
                        Try the search bar on the top left to find items in our catalog. <br>
                        Have a unique item? Fill in the details below to add it.
                      </v-card-text>
                      <div class="pa-2">
                        <v-row class="name-custom pb-0 mb-o">
                          <v-text-field dense outlined label="Name Of Custom Element..."
                                        v-model="customName"></v-text-field>
                        </v-row>
                        <v-row class="mt-0 pt-0  name-custom d-flex">
                          <v-col cols="4">
                            <v-text-field
                                dense
                                outlined
                                type="number"
                                :min="0"
                                label="Width in inches"
                                v-model="customWidth"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="4">
                            <v-text-field
                                dense
                                outlined
                                type="number"
                                :min="0"
                                label="Height in inches"
                                v-model="customHeight"
                            >
                            </v-text-field>
                          </v-col>
                          <v-col cols="4">
                            <v-text-field
                                dense
                                outlined
                                type="number"
                                :min="0"
                                label="Depth in inches"
                                v-model="customDepth"
                            ></v-text-field>
                          </v-col>
                        </v-row>
                      </div>


                      <v-divider></v-divider>
                      <v-card-actions>
                        <v-spacer></v-spacer>

                        <v-btn
                            color="error"
                            text
                            @click="customElementDialog = false"
                        >
                          Cancel
                        </v-btn>

                        <v-btn
                            color="primary"
                            text
                            :disabled="!checkCustomParameters"
                            @click="saveCustomElement()"
                        >
                          Save
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </template>

              </div>
            </v-list-item>
          </v-card>

        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <v-container>
      <v-row justify="center">
        <p>Please set information in <b class="charges--link" @click="selectTab(0)" >Entry Form</b></p>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import {mapActions, mapGetters,mapMutations} from 'vuex'

export default {
  name: "inventory",
  data() {
    return {


      allItemsCount: null,
      searchName: null,
      customElementDialog: false,
      specialHandlingDialog: false,

    }
  },
  methods: {
    ...mapActions(['downloadPricesFromDB']),
    ...mapMutations(['selectTab','setInfo','saveInventoryInfo']),

    saveCustomElement() {
      let id = Date.now()
      if (!this.database['Custom Elements']) {
        this.$set(this.database, 'Custom Elements', {})
      }
      this.$set(this.database['Custom Elements'], [id], {
        'cat': '',
        'name': this.customName,
        "size": Math.ceil((this.customWidth * this.customHeight * this.customDepth) / 1728),
        "class": 'default_icon',
        "subname": `${this.customWidth}" x ${this.customHeight}" x ${this.customDepth}"`,
        "id": id,
        "qty": 1
      })
      this.customElementDialog = false
    },
    addSpecialHandling() {
      for(let room in this.choisedItems){
        for(let item in this.choisedItems[room]){
          if(this.choisedItems[room][item].wall || this.choisedItems[room][item].disassembly){
            this.special[this.choisedItems[room][item].id]= this.choisedItems[room][item]
          }
        }
      }
      this.specialHandlingDialog = false
    },
    clearSelectedItems() {
      for (let category in this.database) {
        let clearItems = (obj) => {
          for (let cat in obj) {
            if (obj[cat].size) {
              if (obj[cat].qty > 0) {
                obj[cat].qty = 0
              }
            } else {
              clearItems(obj[cat])
            }
          }
        }
        clearItems(this.database[category]);
      }
      this.myInventory()
    },
    checkSelectedSubCategory(title, category) {
      if (title == this.room && category == this.subCategory) {
        return true
      }
    },
    selectCategory(title, category) {
      this.room = title
      this.subCategory = category
      this.selectedCategory = null
      this.searchName = null
      this.selectedCategory = {
        [title]: this.database[title][category]
      }
    },
    myInventory() {
      this.room = ''
      this.subCategory = ''
      this.selectedCategory = {}
      this.inventory = {}
      this.searchName = null
      for (let category in this.database) {
        let searchItems = (obj) => {
          for (let cat in obj) {
            if (obj[cat].size) {
              if (obj[cat].qty > 0) {
                if (this.inventory[category]) {
                  this.$set(this.inventory[category], [cat], obj[cat])
                } else {
                  this.$set(this.inventory, [category], {})
                  this.$set(this.inventory[category], [cat], obj[cat])
                }
              }
            } else {
              searchItems(obj[cat])
            }
          }
        }
        searchItems(this.database[category]);
      }
      this.selectedCategory = this.inventory
      this.inventory = {}
    },
    roomCounter(room) {
      let items = 0
      let getSize = (o) => {
        for (let prop in o) {
          if (typeof (o[prop]) === 'object') {
            getSize(o[prop]);
          } else {
            if (prop === 'qty' && o[prop] > 0) {
              items += +o[prop]
            }
          }
        }
      }
      getSize(this.database[room]);
      return items
    },
    searchedItems() {
      if (this.searchName) {
        this.room = ''
        this.subCategory = ''
        let filtered = {}
        let reg = new RegExp(this.searchName, 'i');
        Object.keys(this.database).forEach((category) => {
          Object.values(this.database[category]).forEach(cat => {
            Object.values(cat).forEach(item => {
              if (reg.test(item.name) && item.qty == 0) {
                if (filtered[category]) {
                  filtered[category][item.id] = item
                } else {
                  filtered[category] = {}
                  filtered[category][item.id] = item
                }
              }
            })
          })
        })
        this.selectedCategory = filtered
      }
    },
  },
  created() {
    this.downloadPricesFromDB()
  },
  computed: {
    ...mapGetters(['getPrices',
      'addressFromInfo',
      'addressToInfo',
      'nameFromInfo',
      'roomInventory',
      'currentRoomInventory',
      'subCategoryInventory',
      'customNameInventory',
      'customHeightInventory',
      'customWidthInventory',
      'customDepthInventory',
      'databaseInventory',
      'specialInventory',
      'selectedCategoryInventory',
      'filteredItemsInventory',
      'inventoryInventory']),
    room:{
      get(){
        return this.roomInventory
      },
      set(info){
        this.saveInventoryInfo({type:'room',info})
      }
    },
    currentRoom:{
      get(){
        return this.currentRoomInventory
      },
      set(info){
        this.saveInventoryInfo({type:'currentRoom',info})
      }
    },
    subCategory: {
      get(){
        return this.subCategoryInventory
      },
      set(info){
        this.saveInventoryInfo({type:'subCategory',info})
      }
    },
    customName:{
      get(){
        return this.customNameInventory
      },
      set(info){
        this.saveInventoryInfo({type:'customName',info})
      }
    },
    customHeight:{
      get(){
        return this.customHeightInventory
      },
      set(info){
        this.saveInventoryInfo({type:'customHeight',info})
      }
    },
    customWidth:{
      get(){
        return this.customWidthInventory
      },
      set(info){
        this.saveInventoryInfo({type:'customWidth',info})
      }
    },
    customDepth:{
      get(){
        return this.customDepthInventory
      },
      set(info){
        this.saveInventoryInfo({type:'customDepth',info})
      },
    },
    database:{
      get(){
        return this.databaseInventory
      },
      set(info){
        this.saveInventoryInfo({type:'database',info})
      }
    },
    special:{
      get(){
        return this.specialInventory
      },
      set(info){
        this.saveInventoryInfo({type:'special',info})
      }
    },
    selectedCategory:{
      get(){
        return this.selectedCategoryInventory
      },
      set(info){
        this.saveInventoryInfo({type:'selectedCategory',info})
      }
    },
    filteredItems: {
      get(){
        return this.filteredItemsInventory
      },
      set(info){
        this.saveInventoryInfo({type:'filteredItems',info})
      }
    },
    inventory:{
      get(){
        return this.inventoryInventory
      },
      set(info){
        this.saveInventoryInfo({type:'inventory',info})
      }
    },
    checkinputData(){
      return this.addressFromInfo && this.addressToInfo && this.nameFromInfo
    },
    checkCustomParameters() {
      return this.customWidth && this.customHeight && this.customDepth && this.customName
    },
    choisedItems() {
      let inventory = {}
      for (let category in this.database) {
        let searchItems = (obj) => {
          for (let cat in obj) {
            if (obj[cat].size) {
              if (obj[cat].qty > 0) {
                if (inventory[category]) {
                  inventory[category][cat] = obj[cat]
                } else {
                  inventory[category] = {}
                  inventory[category][cat] = obj[cat]
                }
              }
            } else {
              searchItems(obj[cat])
            }
          }
        }
        searchItems(this.database[category]);
      }
      this.setInfo({type:'inventory',info:inventory})
      this.setInfo({type:'volume',info:this.calculateAllVolumes})
      return inventory
    },
    calculateAllItems() {
      let items = 0
      let getSize = (o) => {
        for (let prop in o) {
          if (typeof (o[prop]) === 'object') {
            getSize(o[prop]);
          } else {
            if (prop === 'qty' && o[prop] > 0) {
              items += +o[prop]
            }
          }
        }
      }
      getSize(this.database);
      return items
    },
    calculateAllVolumes() {
      let volume = 0
      let getSize = (o) => {
        for (let prop in o) {
          if (typeof (o[prop]) === 'object') {
            getSize(o[prop]);
          } else {
            if (prop === 'size' && o['qty'] > 0) {
              volume += +(o[prop] * o['qty'])
            }
          }
        }
      }
      getSize(this.database);
      return volume
    },
    checkDisplaySize(){
      return window.matchMedia("(max-width: 431px)").matches
    }
  },
  watch: {
    searchName() {
      this.searchedItems()
    }
  }
}


</script>

<style scoped>
.v-expansion-panel--active > .v-expansion-panel-header--active .v-expansion-panel-header__icon:not(.v-expansion-panel-header__icon--disable-rotate) .v-icon {
  transform: rotate(0deg);
}
.charges--link{
  text-decoration: underline;
  cursor: pointer;
}
.categories-list {
  list-style: none;
}

.name-custom {
  margin-left: 10px;
  width: 80%;
}

.card-elements {
  position: relative;
}

.inventory-button:hover {
  cursor: pointer;
}

.card--inputs {
  margin-bottom: 5px;
  position: absolute;
  bottom: 0;
}

.selected {
  position: relative;
  font-weight: 700;
  text-decoration: underline;
}

.selected::before {
  position: absolute;
  left: 5px;
  top: 6px;
  content: "";
  width: 0px;
  height: 0px;
  border-style: solid;
  border-width: 5px 0px 5px 7px;
  border-color: transparent transparent transparent rgb(40, 175, 232);
}

.positional {
  position: static;
}

.card--content {
  width: 100%;
}

.card--name {
  line-height: 15px;
}

.dropdown-item-first .small-line {
  height: 45px;
  line-height: 45px;
}

.hide {
  display: none;
}

.inventory {
  display: grid;
  grid-template-columns: 240px auto;
  position: relative;
}

.inventory-sidebar {
  padding-bottom: 10px;
  border-radius: 3px;
}

.subitem-text {
  font-size: 14px;
}

.item-img {
  width: 110px;
  height: 110px;
}

.sidebar-active {
  background-color: rgb(209, 239, 255);
  border-left: 4px rgb(40, 175, 232) solid;
}

.sidebar-list {
  list-style: none;
  width: 235px;
  position: sticky;
  top: 165px;
  bottom: 0;
}

.handling__items__wrap {
  display: flex;
  align-items: center;
}

.item-title, .item-text {
  padding: 0;
  font-size: 14px;
}

.item-text {
  color: #808080;
  font-size: 12px
}

.table-th {
  padding: 0 5px;
}

.vert__align {
  border-right: 1px solid #808080;
  vertical-align: middle;
}

.table-row {
  border-bottom: 1px solid #808080;
}

.table-spec-handling {
  border-collapse: collapse;
}

.category__block, .category__handling {
  display: inline-block;
  width: 100%;
  text-align: center;
  background: #64b5f6;
  font-size: 18px;
  padding: 5px 0;
  border-radius: 4px;
}

.category__handling {
  display: table-cell;
  font-size: 14px;
  padding: 0;
}

.sidebar-content:hover {
  background-color: rgb(209, 239, 255);
}

.sidebar-img {
  width: 40px;
  height: 40px;
  position: absolute;
  left: 11%;
  align-self: center;
}

.sidebar-title {
  line-height: 24px;
}

.sidebar-content {
  cursor: pointer;
  position: relative;
  z-index: 1;
  text-align: left;
  padding: 10px 30px 10px 10px;
  transition: color 0.35s ease 0s, background 0.35s ease 0s;
  display: flex;
  justify-content: space-between;
}

.sidebar-subitem {
  font-size: 12px;
  line-height: 22px;
  cursor: pointer;
  padding: 0px 0px 0px 17px;
  margin-left: 15px;
  position: relative;
}

.sidebar-subitem:hover {
  font-weight: 700;
  text-decoration: underline;
}

.sidebar-number {
  text-align: end;
  padding-right: 15px;
  line-height: 24px;
}

.counter {
  display: inline-block;
  color: grey;
  font-size: 12px;
}

.all-sizes {
  margin-left: 10px;
}

.details-add-sets label {
  cursor: pointer;
  user-select: none;
  color: #042b3b;
}

.radio__container input {
  width: 15px;
  height: 15px;
}

.remove-button, .handling-button {
  width: 100%;
  margin-top: 15px;
  padding: 10px;
}

.inventory-search {
  padding: 10px 12px;
  width: 208px;
  margin-bottom: 15px;
  font-size: 14px;
}
.card-elements{
  height: 190px;
  width: 180px;
}
.item-img{
  height: 100px;
  width: 110px;
}

@media screen and (max-width: 920px) {
  .sidebar-img {
    left: 3px;
    width: 30px;
    height: 30px;
  }

  .sidebar-content {
    padding-left: 45px;
  }

  .sidebar-list {
    width: 190px;
  }

  .inventory {
    grid-template-columns: 190px auto;
  }

  .sidebar-subitem {
    margin-left: 30px;

  }

  .counter {
    margin-left: 5px;
  }

  .inventory-search {
    width: 155px;
  }
}

@media screen and (max-width: 700px) {
  .inventory {
    grid-template-rows: 1fr auto;
    grid-template-columns: unset;
  }
  .inventory-sidebar{
    margin-right: 0 !important;
  }
  .sidebar-list {
    width: unset;
    display: block;
    grid-template-columns: 1fr 1fr;
  }
.inventory-items{
  margin-left: 0 !important;
}
  .inventory-search {
    padding: 10px 12px;
    font-size: 14px;
  }

  .counter {
    font-size: 15px;
    line-height: 40px;
  }
}

@media screen and (max-width: 520px) {
  .sidebar-subitem {
    margin-left: 0px;
  }

  .sidebar-content {
    height: 20px;
  }
}
@media screen and (max-width: 431px) {
  .card-elements{
    height: 130px;
    width: 160px;
  }
  .item-img{
    height: 41px;
    width: 41px;
  }
}
</style>