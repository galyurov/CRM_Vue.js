<template>
  <v-col v-if="statusOfModal" ref="container" justify="center">
    <v-dialog v-model="statusOfModal" max-width="1100px">
      <v-card class="pa-1">
        <div>
          <div id="modal1" class="modal modal-fixed-footer">
            <div id="modal-content" :key="id" class="modal-content">
              <div class="result-container">
                <div class="result-logo">
                  <img
                      alt=""
                      src="http://test.alwayspromove.com/img/logo_order.png"
                  />
                </div>
                <div class="result-wrap">
                  <div class="result-estimate">
                    <div class="head__block">
                      <h2 id="head__title" class="result-title">
                        Moving Estimate
                      </h2>
                      <h3
                          :id="'head__number'"
                          class="result-title error--text"
                      >
                        <span>Job №: </span
                        ><span style="color: #de1b1b"
                      >{{ estimateDate }}-{{ id }}</span
                      >
                      </h3>

                    </div>
                    <div class="result-block">
                      <div class="result-info-title">
                        <p class="title-text text-head">
                          Always Professional Moving Inc
                        </p>
                        <p class="title-text">75 New Brunswick Avenue</p>
                        <p class="title-text">Perth Amboy, NJ 08861</p>
                        <p class="title-text">US DOT: 2587472, MC: 910105</p>
                        <p class="title-text">Registration #: 39PM00113300</p>
                      </div>
                      <div class="result-info-text">
                        <div class="info-wrap">
                          <p class="title-text">Customer Rep:</p>
                          <p class="title-text">Phone:</p>
                          <p class="title-text">Direct:</p>
                          <p class="title-text">Email:</p>
                          <p class="title-text">Web:</p>
                        </div>
                        <div class="info-wrap">
                          <p class="title-text">Natalie</p>
                          <p class="title-text">908-409-8555</p>
                          <p class="title-text">908-266-4021</p>
                          <p class="title-text">
                            <a
                                class="client-email"
                                href="mailto:natalie@alwayspromove.com"
                            >natalie@alwayspromove.com</a
                            >
                          </p>
                          <p class="title-text">
                            <a
                                class="client-email"
                                href="http://www.alwayspromove.com"
                            >http://www.alwayspromove.com</a
                            >
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <template v-if="data.modalName">
                    <div class="result-estimate">
                      <div class="title-wrap">
                        <h2 class="result-title left-element">Moving From</h2>
                        <h2
                            class="result-title desktop-moving-title right-element"
                        >
                          Moving To
                        </h2>
                      </div>
                      <div class="result-block">
                        <div class="result-about local-wrap">
                          <div class="result-about-text">
                            <div class="result-client">
                              <p class="result-about-title">
                                <b>{{ data.modalName }}</b>
                              </p>
                              <p
                                  class="result-about-title"
                                  v-html="
                                  parseAddress(
                                    data['modal-input-from'],
                                    'modal'
                                  )
                                "
                              ></p>
                              <p class="result-about-title">
                                <a
                                    class="client-phone"
                                    v-bind:href="`tel:${data.modalPhone}`"
                                ><u>Phone:</u> {{ data.modalPhone }}</a
                                >
                              </p>
                              <p class="result-about-title">
                                <a
                                    class="client-email"
                                    v-bind:href="`mailto:${data.modalEmail}`"
                                ><u>Email:</u> {{ data.modalEmail }}</a
                                >
                              </p>
                            </div>
                          </div>
                          <div class="from-img">
                            <img
                                :src="setImgAddress('modal-input-from')"
                                alt="Image From"
                            />
                          </div>
                        </div>
                        <div class="title-wrap mobile-moving-title">
                          <h2 class="result-title">Moving To</h2>
                        </div>
                        <div class="result-about local-wrap b0">
                          <div class="result-about-text">
                            <div class="result-client">
                              <p
                                  class="result-about-title"
                                  v-html="
                                  parseAddress(data['modal-input-to'], 'modal')
                                "
                              ></p>
                            </div>
                          </div>
                          <div class="to-img">
                            <img
                                :src="setImgAddress('modal-input-to')"
                                alt="Image To"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="relocation" class="result-estimate">
                      <div class="title-wrap">
                        <h2 class="result-title left-element">
                          Relocation Details
                        </h2>
                        <h2
                            class="result-title desktop-moving-title right-element"
                        >
                          Relocation Rate
                        </h2>
                      </div>
                      <div class="result-block">
                        <div class="result-about">
                          <table class="result-table">
                            <tbody>
                            <tr class="result-tr">
                              <td>Job №:</td>
                              <td class="estimate-job error--text">
                                {{ estimateDate + "-" + id }}
                              </td>
                            </tr>
                            <tr class="result-tr">
                              <td>Estimate Date:</td>
                              <td class="estimate-date">
                                {{ data["estimateDate"] }}
                              </td>
                            </tr>
                            <tr class="result-tr">
                              <td>Move Type:</td>
                              <td class="move-type">{{ price.type }}</td>
                            </tr>
                            <tr v-if="price.name" class="result-tr">
                              <td>Package:</td>
                              <td class="volume">{{ price.name }}</td>
                            </tr>
                            <tr class="result-tr">
                              <td>Move Day:</td>
                              <td class="error--text">
                                {{ getWeekDay(data.datepicker) }}
                              </td>
                            </tr>
                            <tr class="result-tr">
                              <td>Move Date:</td>
                              <td class="move-date">{{ data.datepicker }}</td>
                            </tr>
                            <tr class="result-tr">
                              <td>Move Time:</td>
                              <td class="move-time">
                                {{ data.arrivalTime }}
                              </td>
                            </tr>
                            </tbody>
                          </table>
                        </div>
                        <div class="title-wrap mobile-moving-title">
                          <h2 class="result-title right-element">
                            Relocation Rate
                          </h2>
                        </div>
                        <div class="result-about b0">
                          <table class="result-table table--for--render">
                            <tbody v-if="price['name']">
                            <tr class="result-tr">
                              <td
                                  v-if="price.price == 460"
                                  class="result-total-moving sum-price"
                              >
                                1 Truck/s, 2 Workers
                              </td>
                              <td
                                  v-else-if="price.price == 540"
                                  class="result-total-moving sum-price"
                              >
                                1 Truck/s, 3 Workers
                              </td>
                              <td
                                  v-else-if="price.price == 660"
                                  class="result-total-moving sum-price"
                              >
                                1 Truck/s, 4 Workers
                              </td>
                            </tr>
                            <tr class="result-tr">
                              <td
                                  v-if="price.price == 460"
                                  class="result-total-travel sum-price"
                              >
                                First 3 hours $460, each additional $115 per
                                hour
                              </td>
                              <td
                                  v-else-if="price.price == 540"
                                  class="result-total-travel sum-price"
                              >
                                First 3 hours $540, each additional $135 per
                                hour
                              </td>
                              <td
                                  v-else-if="price.price == 660"
                                  class="result-total-travel sum-price"
                              >
                                First 3 hours $660, each additional $165 per
                                hour
                              </td>
                            </tr>
                            <tr class="result-tr result-total-text">
                              <td class="result-total-total">
                                Total: {{ price.price }} $
                              </td>
                            </tr>
                            </tbody>
                            <tbody v-else>
                            <tr class="result-tr">
                              <td class="result-total-moving sum-price">
                                Price
                              </td>
                            </tr>
                            <tr class="result-tr">
                              <td
                                  v-if="price.price == 460"
                                  class="result-total-travel sum-price"
                              >
                                First 3 hours $460, each additional $115 per
                                hour
                              </td>
                              <td
                                  v-else-if="price.price == 540"
                                  class="result-total-travel sum-price"
                              >
                                First 3 hours $540, each additional $135 per
                                hour
                              </td>
                              <td
                                  v-else-if="price.price == 660"
                                  class="result-total-travel sum-price"
                              >
                                First 3 hours $660, each additional $165 per
                                hour
                              </td>
                            </tr>
                            <tr class="result-tr result-total-text">
                              <td v-cloak class="result-total-total">
                                Total: {{ price.price }} $
                              </td>
                            </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    <div class="result-estimate">
                      <div class="title-wrap title-block">
                        <h2 class="result-title centered-element">
                          Understanding Your Estimate
                        </h2>
                      </div>
                      <div
                          v-if="checkStandardMove"
                          class="estimate-block result-block request px-2"
                      >
                        <p>
                          Moving price is based on inventory list only. The
                          total cost of the move may increase if additional
                          items are moved. Should there be any other services
                          requested, additional costs will be charged.
                          <br/><br/>
                          This is an agreement for your upcoming move. Please
                          review the details below including your address and
                          inventory list. Please notify us if you have any
                          changes. <br/><br/>
                          We wold like to thank you for choosing Always
                          Professional Moving for your upcoming move. The Always
                          Professional Moving is designed to help you, our
                          valued customer avoid any hidden charges. We truly
                          believe that when you are moving, you need to deal
                          with a Company that does it all! Please take a few
                          moments to visit us at
                          <a href="http://www.alwayspromove.com">
                            www.alwayspromove.com</a
                          >
                        </p>
                      </div>
                      <div
                          v-else
                          class="estimate-block result-block request px-2"
                      >
                        <h5>
                          THE PRICE ABOVE IS AN HOURLY RATE ONLY, 3 HOURS
                          MINIMUM CHARGE, ANY ADDITIONAL HOUR WILL BE CHARGED
                          PER THE RATE ABOVE.
                        </h5>
                        <p>
                          Should there be any other services requested,
                          additional costs will be charged. All fragile items
                          that require special packing will incur additional
                          charges (Glass, Mirrors, T.V.'s, Paintings,
                          Washer/Dryer, Refrigerators, Piano, Grand Father
                          Clock). If any special packaging is rejected, company
                          will NOT be held liable for any damages. Toll prices
                          are not included in estimate.
                          <v-spacer></v-spacer>
                          This is an agreement for your upcoming move. Please
                          review the details below including your address and
                          inventory list. Please notify us if you have any
                          changes.
                          <v-spacer></v-spacer>
                          Once again we wold like to thank you for choosing
                          Always Professional Moving for your upcoming move. The
                          Always Professional Moving is designed to help you,
                          our valued customer avoid any hidden charges. We truly
                          believe that when you are moving, you need to deal
                          with a Company that does it all! Please take a few
                          moments to visit us at
                          <a href="http://www.alwayspromove.com"
                          >www.alwayspromove.com</a
                          >
                        </p>
                      </div>
                    </div>
                  </template>
                  <template v-else-if="data.searchParam">
                    <div class="result-estimate">
                      <div class="title-wrap">
                        <h2 class="result-title left-element">Moving From</h2>
                        <h2
                            class="result-title desktop-moving-title right-element"
                        >
                          Moving To
                        </h2>
                      </div>
                      <div class="result-block">
                        <div class="result-about local-wrap">
                          <div class="result-about-text">
                            <div class="result-client">
                              <p class="result-about-title">
                                <b>{{ data.searchParam["details-name"] }}</b>
                              </p>
                              <p
                                  class="result-about-title"
                                  v-html="
                                  parseAddress(data.searchParam['origin'], true)
                                "
                              ></p>
                              <p
                                  v-if="data.searchParam['apt-from']"
                                  class="result-about-title"
                              >
                                Apt: {{ data.searchParam["apt-from"] }}
                              </p>
                              <p
                                  v-if="checkFloorFrom"
                                  class="result-about-title"
                              >
                                Stairs, Floor:
                                {{ data.searchParam["select-stairs-from"] }}
                              </p>
                              <p class="result-about-title">
                                <a
                                    class="client-phone"
                                    v-bind:href="`tel:${data.searchParam['details-phone']}`"
                                >
                                  <u>Phone:</u>
                                  {{ data.searchParam["details-phone"] }}
                                </a>
                              </p>
                              <p class="result-about-title">
                                <a
                                    class="client-email"
                                    v-bind:href="`mailto:${data.searchParam['details-email']}`"
                                ><u>Email:</u>
                                  {{ data.searchParam["details-email"] }}</a
                                >
                              </p>
                            </div>
                          </div>
                          <div class="from-img">
                            <img
                                :src="setImgAddress('origin')"
                                alt="Image From"
                            />
                          </div>
                        </div>
                        <div class="title-wrap mobile-moving-title">
                          <h2 class="result-title">Moving To</h2>
                        </div>
                        <div class="result-about local-wrap b0">
                          <div class="result-about-text">
                            <div class="result-client">
                              <div
                                  class="result-about-title"
                                  v-html="
                                  parseAddress(
                                    data.searchParam['destination'],
                                    true
                                  )
                                "
                              ></div>
                              <span
                                  v-if="data.searchParam['apt-to']"
                                  class="result-about-title"
                              >
                                Apt: {{ data.searchParam["apt-to"] }}
                              </span>
                              <p v-if="checkFloorTo" class="result-about-title">
                                Stairs, Floor:
                                {{ data.searchParam["select-stairs-to"] }}
                              </p>
                            </div>
                          </div>

                          <div class="to-img">
                            <img
                                :src="setImgAddress('destination')"
                                alt="Image To"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                        v-if="checkAdditionalAddress"
                        class="result-estimate add__title"
                    >
                      <div class="title-wrap">
                        <h2
                            v-if="data.searchParam['add-checkbox']"
                            class="result-title"
                        >
                          Additional Pick Up
                        </h2>
                        <h2
                            v-if="data.searchParam['add-drop-checkbox']"
                            class="result-title"
                        >
                          Additional Drop Off
                        </h2>
                      </div>
                      <div class="result-block">
                        <div
                            v-if="data.searchParam['add-checkbox']"
                            class="result-about local-wrap"
                        >
                          <div class="result-about-text">
                            <div class="result-client">
                              <p
                                  class="result-about-title"
                                  v-html="
                                  parseAddress(
                                    data.searchParam['inputAdd-pick-up'],
                                    true
                                  )
                                "
                              ></p>
                              <p
                                  v-if="data.searchParam['apt-add-pick-up']"
                                  class="result-about-title"
                              >
                                Apt: {{ data.searchParam["apt-add-pick-up"] }}
                              </p>
                              <p
                                  v-if="checkFloorFrom"
                                  class="result-about-title"
                              >
                                Stairs, Floor:
                                {{ data.searchParam["select-Add-pick-up"] }}
                              </p>
                            </div>
                          </div>
                          <div class="from-img">
                            <img
                                :src="setImgAddress('inputAdd-pick-up')"
                                alt="Image From"
                            />
                          </div>
                        </div>
                        <div
                            v-if="data.searchParam['add-drop-checkbox']"
                            class="result-about local-wrap b0"
                        >
                          <div class="result-about-text">
                            <div
                                class="result-about-title"
                                v-html="
                                parseAddress(
                                  data.searchParam['inputAdd-drop'],
                                  true
                                )
                              "
                            ></div>
                            <span
                                v-if="data.searchParam['apt-add-drop']"
                                class="result-about-title"
                            >
                              Apt: {{ data.searchParam["apt-add-drop"] }}
                            </span>
                            <p v-if="checkFloorTo" class="result-about-title">
                              Stairs, Floor:
                              {{ data.searchParam["select-Add-drop"] }}
                            </p>
                          </div>

                          <div class="to-img">
                            <img
                                :src="setImgAddress('inputAdd-drop')"
                                alt="Image To"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="result-estimate">
                      <div class="title-wrap">
                        <h2 class="result-title left-element">
                          Relocation Details
                        </h2>
                        <h2
                            class="result-title desktop-moving-title right-element"
                        >
                          Relocation Rate
                        </h2>
                      </div>
                      <div class="result-block">
                        <div class="result-about">
                          <table class="result-table">
                            <tbody>
                            <tr class="result-tr">
                              <td>Job №:</td>
                              <td class="estimate-job error--text">
                                {{
                                  estimateDate + "-" + id
                                }}
                              </td>
                            </tr>
                            <tr class="result-tr">
                              <td>Estimate Date:</td>
                              <td class="estimate-date">
                                {{ data.searchParam["estimateDate"] }}
                              </td>
                            </tr>
                            <tr class="result-tr">
                              <td>Move Type:</td>
                              <td class="move-type">
                                {{ getTypeOfMove }},
                                {{ data.searchParam.range }} mile
                              </td>
                            </tr>
                            <tr class="result-tr">
                              <td>Estimated Volume:</td>
                              <td class="volume">
                                {{ data.searchParam.volume }}
                              </td>
                            </tr>
                            <tr class="result-tr">
                              <td>Move Day:</td>
                              <td class="error--text">
                                {{ getWeekDay(data.searchParam.datepicker) }}
                              </td>
                            </tr>
                            <tr class="result-tr">
                              <td>Move Date:</td>
                              <td class="move-date">
                                {{ data.searchParam.datepicker }}
                              </td>
                            </tr>
                            <tr class="result-tr">
                              <td>Move Time:</td>
                              <td class="move-time">
                                {{ data.searchParam.arrivalTime }}
                              </td>
                            </tr>
                            <tr class="result-tr">
                              <td>Delivery Date:</td>
                              <td class="move-time">
                                up to {{ deliveryDays }} business days
                              </td>
                            </tr>
                            </tbody>
                          </table>
                        </div>
                        <div class="title-wrap mobile-moving-title">
                          <h2 class="result-title right-element">
                            Relocation Rate
                          </h2>
                        </div>
                        <div class="result-about b0">
                          <table class="result-table table--for--render">
                            <tbody>
                            <tr class="result-tr">
                              <td class="result-total-moving sum-price">
                                Moving:
                              </td>
                              <td class="result-total-moving sum-price">
                                {{ calculateMovingPrice }} $
                              </td>
                            </tr>
                            <tr v-if="checkCOI" class="result-tr">
                              <td class="result-total-travel sum-price">
                                COI:
                              </td>
                              <td class="result-total-travel sum-price">
                                {{ calculateCOI }} $
                              </td>
                            </tr>
                            <tr
                                v-if="
                                  calculateItemsVolume < price.cfLocal &&
                                  +data.searchParam.range <=
                                    +price['local-max-distance']
                                "
                                class="result-tr"
                            >
                              <v-tooltip bottom max-width="400">
                                <template v-slot:activator="{ on, attrs }">
                                  <td
                                      v-bind="attrs"
                                      v-on="on"
                                      class="minimum-feet"
                                  >
                                    Minimum cubic feet surcharge:
                                  </td>
                                </template>
                                <span
                                >We charges for a minimum of
                                    {{ price.cfLocal }} cubic feet.</span
                                >
                              </v-tooltip>
                              <td class="sum-price">
                                {{
                                  (
                                      (price.cfLocal - calculateItemsVolume) *
                                      price.costByVol
                                  ).toFixed(2)
                                }}
                                $
                              </td>
                            </tr>
                            <tr
                                v-if="
                                  calculateItemsVolume < price.cfLong &&
                                  +data.searchParam.range >
                                    +price['local-max-distance']
                                "
                                class="result-tr"
                            >
                              <v-tooltip bottom max-width="400">
                                <template v-slot:activator="{ on, attrs }">
                                  <td
                                      v-bind="attrs"
                                      v-on="on"
                                      class="minimum-feet"
                                  >
                                    Minimum cubic feet surcharge:
                                  </td>
                                </template>
                                <span
                                >We charges for a minimum of
                                    {{ price.cfLong }} cubic feet.</span
                                >
                              </v-tooltip>
                              <td class="sum-price">
                                {{
                                  (
                                      (price.cfLong - calculateItemsVolume) *
                                      price.costByVol
                                  ).toFixed(2)
                                }}
                                $
                              </td>
                            </tr>
                            <tr
                                v-if="data.searchParam.pack"
                                class="result-tr"
                            >
                              <td class="result-total-travel sum-price">
                                Special Packing:
                              </td>
                              <td class="result-total-travel sum-price">
                                {{ calculateSpecialPacking }} $
                              </td>
                            </tr>
                            <tr v-if="data.special" class="result-tr">
                              <v-tooltip bottom max-width="400">
                                <template v-slot:activator="{ on, attrs }">
                                  <td
                                      v-bind="attrs"
                                      v-on="on"
                                      class="minimum-feet"
                                  >
                                    Special Handling:
                                  </td>
                                </template>
                                <span
                                >This includes wall dismounting /
                                    disassembly and assembly for a minimum of
                                    {{ price["hoursDis"] }} hour. If more than
                                    {{ price["hoursDis"] }} hour of work is
                                    required, additional fees may be incurred at
                                    the same rate.</span
                                >
                              </v-tooltip>
                              <td class="result-total-handling sum-price">
                                {{ price["costDis"] }} $
                              </td>
                            </tr>
                            <tr class="result-tr">
                              <td class="result-total-travel sum-price">
                                Travel:
                              </td>
                              <td class="result-total-travel sum-price">
                                {{ calculateTravelPrice }} $
                              </td>
                            </tr>
                            <tr class="result-tr result-total-text">
                              <td class="result-total-total">Total:</td>
                              <td class="result-total-total">
                                {{ calculateFinalPrice }} $
                              </td>
                            </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    <div class="result-estimate">
                      <div class="title-wrap title-block">
                        <h2 class="result-title centered-element">
                          Understanding Your Estimate
                        </h2>
                      </div>
                      <div class="estimate-block result-block request px-2">
                        <p>
                          Moving price is based on inventory list only. The
                          total cost of the move may increase if additional
                          items are moved. Should there be any other services
                          requested, additional costs will be charged.
                          <v-spacer></v-spacer>
                          This is an agreement for your upcoming move. Please
                          review the details below including your address and
                          inventory list. Please notify us if you have any
                          changes.
                          <v-spacer></v-spacer>
                          We wold like to thank you for choosing Always
                          Professional Moving for your upcoming move. The Always
                          Professional Moving is designed to help you, our
                          valued customer avoid any hidden charges. We truly
                          believe that when you are moving, you need to deal
                          with a Company that does it all! Please take a few
                          moments to visit us at
                          <a href="http://www.alwayspromove.com">
                            www.alwayspromove.com</a
                          >
                        </p>
                      </div>
                    </div>
                    <div
                        v-if="data.searchParam['details-request']"
                        class="result-estimate"
                    >
                      <div class="title-wrap">
                        <h2 class="result-title centered-element">
                          Special request & instructions
                        </h2>
                      </div>
                      <div class="result-block request">
                        {{ data.searchParam["details-request"] }}
                      </div>
                    </div>
                    <div v-if="data.searchParam.volume" class="result-estimate">
                      <div class="title-wrap title-block">
                        <h2 class="result-title centered-element">
                          Inventory & Boxes
                        </h2>
                      </div>
                      <div class="result-about inventory-block-email b0">
                        <table class="result-inventory">
                          <thead>
                          <tr>
                            <th colspan="2">Item</th>
                            <th>Handling Fee</th>
                            <th>Volume Fee</th>
                            <th>QTY</th>
                            <th>Total Price</th>
                          </tr>
                          </thead>
                          <tbody>
                          <template v-for="item in itemsForRender">
                            <tr v-if="item.room" :key="item.id * 2">
                              <td class="title__handling" colspan="6">
                                {{ item.room }}
                              </td>
                            </tr>
                            <tr :key="item.id">
                              <td>
                                <div
                                    :class="item.class + '_small'"
                                    class="inventory-img"
                                ></div>
                              </td>
                              <td>
                                <div class="inventory-row-text">
                                  {{
                                    item.name
                                        .replace(/u0026/g, "\&")
                                        .replace(/u0022/g, '"')
                                        .replace(/u0027/g, "'")
                                  }}
                                </div>
                                <div
                                    v-if="item.subname"
                                    class="inventory-row-subtext"
                                >
                                  {{
                                    item.subname
                                        .replace(/u0022/g, '"')
                                        .replace(/u0027/g, '"')
                                        .replace(/u0026/g, "\&")
                                  }}
                                </div>
                              </td>
                              <td>
                                <div class="inventory-row-text">
                                  {{ item.handlingFee }}
                                </div>
                              </td>
                              <td>
                                <div class="inventory-row-text">
                                  {{ item.volumeFee }}
                                </div>
                              </td>
                              <td>
                                <div class="inventory-row-text">
                                  {{ item.qty }}
                                </div>
                              </td>
                              <td>
                                <div class="inventory-row-text item-total">
                                  {{ item.totalPrice }}
                                </div>
                              </td>
                            </tr>
                          </template>
                          <template v-if="data.special">
                            <tr>
                              <td class="title__handling" colspan="6">
                                Special Handling
                              </td>
                            </tr>
                            <tr>
                              <th colspan="2">Item</th>
                              <th colspan="2">Assembly & Disassembly</th>
                              <th colspan="2">Wall Dismounting</th>
                            </tr>
                            <tr
                                v-for="item in data.special"
                                :key="item.id * 1.21"
                                class="inventory-row"
                            >
                              <td>
                                <div
                                    :class="item.class + '_small'"
                                    class="inventory-img"
                                ></div>
                              </td>
                              <td>
                                <div class="inventory-row-text">
                                  {{ item.name }}
                                </div>
                                <div class="inventory-row-subtext">
                                  {{
                                    item.subname
                                        ? item.subname
                                            .replace(/u0022/g, '"')
                                            .replace(/u0027/g, '"')
                                            .replace(/u0026/g, "\&")
                                        : ""
                                  }}
                                </div>
                              </td>

                              <td colspan="2">
                                <div
                                    v-if="item.disassembly"
                                    class="inventory-row-text available"
                                >
                                  ✓
                                </div>
                                <div
                                    v-else
                                    class="inventory-row-text disabled"
                                >
                                  ✘
                                </div>
                              </td>

                              <td colspan="2">
                                <div
                                    v-if="item.wall"
                                    class="inventory-row-text available"
                                >
                                  ✓
                                </div>
                                <div
                                    v-else
                                    class="inventory-row-text disabled"
                                >
                                  ✘
                                </div>
                              </td>
                            </tr>
                          </template>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </template>
                  <template v-else>
                    <div class="result-estimate">
                      <div class="title-wrap">
                        <h2 class="result-title left-element">Moving From</h2>
                        <h2
                            class="result-title desktop-moving-title right-element"
                        >
                          Moving To
                        </h2>
                      </div>
                      <div class="result-block">
                        <div class="result-about local-wrap">
                          <div class="result-about-text">
                            <div class="result-client">
                              <p class="result-about-title">
                                <b>{{ data.entryParams.nameFromInfo }}</b>
                              </p>
                              <p
                                  class="result-about-title"
                                  v-html="
                                  parseAddress(
                                    data.entryParams.addressFromInfo,
                                    true
                                  )
                                "
                              ></p>
                              <span
                                  v-if="data.entryParams.locationFromInfo"
                                  class="result-about-title"
                              >
                                {{ data.entryParams.locationFromInfo }}
                              </span>
                              <span
                                  v-if="data.entryParams.levelFromInfo"
                                  class="result-about-title"
                              >
                                {{ "/ " + data.entryParams.levelFromInfo }}
                              </span>
                              <p
                                  v-if="data.entryParams.aptFromInfo"
                                  class="result-about-title"
                              >
                                Apt: {{ data.entryParams.aptFromInfo }}
                              </p>
                              <p
                                  v-if="data.entryParams.floorFromInfo"
                                  class="result-about-title"
                              >
                                Stairs, Floor:
                                {{ data.entryParams.floorFromInfo }}
                              </p>
                              <p
                                  v-if="data.entryParams.phoneFromInfo"
                                  class="result-about-title"
                              >
                                <a
                                    class="client-phone"
                                    v-bind:href="`tel:${data.entryParams.phoneFromInfo}`"
                                >
                                  <u>Phone:</u>
                                  {{ data.entryParams.phoneFromInfo }}
                                </a>
                              </p>
                              <p
                                  v-if="data.entryParams.phoneFrom2Info"
                                  class="result-about-title"
                              >
                                <a
                                    class="client-phone"
                                    v-bind:href="`tel:${data.entryParams.phoneFrom2Info}`"
                                >
                                  <u>Phone:</u>
                                  {{ data.entryParams.phoneFrom2Info }}
                                </a>
                              </p>
                              <p class="result-about-title">
                                <a
                                    class="client-email"
                                    v-bind:href="`mailto:${data.entryParams.emailInfo}`"
                                ><u>Email:</u>
                                  {{ data.entryParams.emailInfo }}</a
                                >
                              </p>
                            </div>
                          </div>
                          <div class="from-img">
                            <img
                                :src="setImgAddress('addressFromInfo')"
                                alt="Image From"
                            />
                          </div>
                        </div>
                        <div class="title-wrap mobile-moving-title">
                          <h2 class="result-title">Moving To</h2>
                        </div>
                        <div class="result-about local-wrap b0">
                          <div class="result-about-text">
                            <div class="result-client">
                              <p
                                  v-if="data.entryParams.nameToInfo"
                                  class="result-about-title"
                              >
                                <b>{{ data.entryParams.nameToInfo }}</b>
                              </p>
                              <div
                                  class="result-about-title"
                                  v-html="
                                  parseAddress(
                                    data.entryParams.addressToInfo,
                                    true
                                  )
                                "
                              ></div>
                              <span
                                  v-if="data.entryParams.locationToInfo"
                                  class="result-about-title"
                              >
                                {{ data.entryParams.locationToInfo }}
                              </span>
                              <span
                                  v-if="data.entryParams.levelToInfo"
                                  class="result-about-title"
                              >
                                {{ "/ " + data.entryParams.levelToInfo }}
                              </span>
                              <p
                                  v-if="data.entryParams.aptToInfo"
                                  class="result-about-title"
                              >
                                Apt: {{ data.entryParams.aptToInfo }}
                              </p>
                              <p
                                  v-if="data.entryParams.floorToInfo"
                                  class="result-about-title"
                              >
                                Stairs, Floor:
                                {{ data.entryParams.floorToInfo }}
                              </p>
                              <p
                                  v-if="data.entryParams.phoneToInfo"
                                  class="result-about-title"
                              >
                                <a
                                    class="client-phone"
                                    v-bind:href="`tel:${data.entryParams.phoneToInfo}`"
                                >
                                  <u>Phone:</u>
                                  {{ data.entryParams.phoneToInfo }}
                                </a>
                              </p>
                              <p
                                  v-if="data.entryParams.faxInfo"
                                  class="result-about-title"
                              >
                                <a
                                    class="client-phone"
                                    v-bind:href="`tel:${data.entryParams.faxInfo}`"
                                >
                                  <u>Fax:</u>
                                  {{ data.entryParams.phoneFrom2Info }}
                                </a>
                              </p>
                            </div>
                          </div>

                          <div class="to-img">
                            <img
                                :src="setImgAddress('addressToInfo')"
                                alt="Image To"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div v-if="data.entryParams.extraAddressInfo" class="result-estimate">
                      <div class="title-wrap">
                        <h2 class="result-title left-element">Extra Stop</h2>
                      </div>
                      <div class="result-block">
                        <div class="result-about local-wrap">
                          <div class="result-about-text">
                            <div class="result-client">
                              <p
                                  class="result-about-title"
                                  v-html="
                                  parseAddress(
                                    data.entryParams.extraAddressInfo,
                                    true
                                  )
                                "
                              ></p>
                            </div>
                          </div>
                          <div class="from-img">
                            <img
                                :src="setImgAddress('extraAddressInfo')"
                                alt="Image From"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="result-estimate">
                      <div class="title-wrap">
                        <h2 class="result-title left-element">
                          Relocation Details
                        </h2>
                        <h2
                            class="result-title desktop-moving-title right-element"
                        >
                          Relocation Rate
                        </h2>
                      </div>
                      <div class="result-block">
                        <div class="result-about">
                          <table class="result-table">
                            <tbody>
                            <tr class="result-tr">
                              <td>Job №:</td>
                              <td class="estimate-job error--text">
                                {{ estimateDate + "-" + id }}
                              </td>
                            </tr>
                            <tr class="result-tr">
                              <td>Estimate Date:</td>
                              <td class="estimate-date">
                                {{ data.entryParams.estimateDate }}
                              </td>
                            </tr>
                            <tr class="result-tr">
                              <td>Move Type:</td>
                              <td  class="move-type">
                                {{ data.entryParams.typeOfMoveInfo + ',' }}{{data.entryParams.movingType}}
                              </td>
                            </tr>
                            <tr class="result-tr">
                              <td>Distance:</td>
                              <td class="move-type">
                                {{ data.entryParams.rangeInfo }} mi
                              </td>
                            </tr>
                            <tr class="result-tr">
                              <td>Estimated Volume:</td>
                              <td class="volume">
                                {{ data.entryParams.volumeInfo ? data.entryParams.volumeInfo : '---' }} cf. ({{
                                  data.entryParams.volumeInfo ? data.entryParams.volumeInfo * 7 : '---'
                                }}
                                lbs.)
                              </td>
                            </tr>
                            <tr v-if="data.entryParams.movingType=== 'Long Distance' && data.entryParams.longCost" class="result-tr">
                              <td>Estimated Rate:</td>
                              <td class="volume">
                                ${{data.entryParams.longCost}} per cf
                              </td>
                            </tr>
                            <tr class="result-tr">
                              <td>Move Day:</td>
                              <td class="error--text">
                                {{
                                  getWeekDay(data.entryParams.datepickerInfo)
                                }}
                              </td>
                            </tr>
                            <tr class="result-tr">
                              <td>Move Date:</td>
                              <td class="move-date">
                                {{ data.entryParams.datepickerInfo }}
                              </td>
                            </tr>
                            <tr class="result-tr">
                              <td>Reference By:</td>
                              <td class="move-date">
                                {{ data.entryParams.informationInfo }}
                              </td>
                            </tr>
                            <tr class="result-tr">
                              <td>Move Time:</td>
                              <td class="move-time">
                                {{ data.entryParams.arrivalTimeInfo }}
                              </td>
                            </tr>
                            <tr class="result-tr">
                              <td>Delivery Date:</td>
                              <td class="move-time">
                                up to {{ deliveryDays }} business days
                              </td>
                            </tr>
                            </tbody>
                          </table>
                        </div>
                        <div class="title-wrap mobile-moving-title">
                          <h2 class="result-title right-element">
                            Relocation Rate
                          </h2>
                        </div>
                        <div class="result-about b0">
                          <table class="result-table table--for--render">
                            <tbody>
                            <tr v-if="data.entryParams.vansLaborInfo!=0 && data.entryParams.workersLaborInfo!=0 && data.entryParams.flatrate" class="result-tr">
                              <td class="result-total-moving sum-price">
                                  <span
                                  v-if="data.entryParams.flatrate"
                              >
                                    Flat Rate:</span
                              >
                              </td>
                              <td class="result-total-moving sum-price">
                                ${{ (data.entryParams.hrsLaborInfo? data.entryParams.hrsLaborInfo : 1) * (data.entryParams.perHrsLaborInfo ? data.entryParams.perHrsLaborInfo : 0)}}
                              </td>
                            </tr>
                            <tr v-if="data.entryParams.vansLaborInfo!=0 && data.entryParams.workersLaborInfo!=0 && !data.entryParams.flatrate" class="result-tr">
                              <td class="result-total-moving sum-price">
                                  <span v-if="data.entryParams.vansLaborInfo"
                                  >{{
                                      data.entryParams.vansLaborInfo
                                    }}
                                    Truck/s,</span
                                  ><span
                                  v-if="data.entryParams.workersLaborInfo"
                              >
                                    {{ data.entryParams.workersLaborInfo }}
                                    Workers, </span
                              >
                                <span v-if="data.entryParams.perHrsLaborInfo"
                                >${{
                                    data.entryParams.perHrsLaborInfo
                                  }}/hrs, </span
                                ><span
                                  v-if="data.entryParams.hrsLaborInfo"
                              >
                                    {{ data.entryParams.hrsLaborInfo }}
                                    hours</span
                              >
                              </td>
                              <td class="result-total-moving sum-price">
                                  ${{ (data.entryParams.hrsLaborInfo? data.entryParams.hrsLaborInfo : 1) * (data.entryParams.perHrsLaborInfo ? data.entryParams.perHrsLaborInfo : 0)}}
                              </td>
                            </tr>
                            <tr v-if="data.entryParams.movingType== 'Long Distance' && data.entryParams.longCost" class="result-tr">
                              <td class="result-total-moving sum-price">
                                Basic Estimate Price
                              </td>
                              <td class="result-total-moving sum-price">
                                ${{data.entryParams.longCost * data.entryParams.volumeInfo}}
                              </td>
                            </tr>
                            <tr v-if="data.entryParams.movingType== 'Long Distance' && data.entryParams.longCost && data.entryParams.fuelCharge" class="result-tr">
                              <td class="result-total-moving sum-price">
                                Fuel Surcharge: {{data.entryParams.fuelCharge}} %
                              </td>
                              <td class="result-total-moving sum-price">
                                ${{ (data.entryParams.longCost * data.entryParams.volumeInfo)*(data.entryParams.fuelCharge/100)}}
                              </td>
                            </tr>
                            <tr v-if="data.entryParams.movingType== 'Local Moving' && data.entryParams.fuelMileInfo" class="result-tr">
                              <td class="result-total-moving sum-price">
                                Fuel & Mileage:
                              </td>
                              <td class="result-total-moving sum-price">
                                ${{data.entryParams.fuelMileInfo}}
                              </td>
                            </tr>
                            <tr v-if="data.entryParams.hrsTravelInfo!=0 && data.entryParams.perHrsTravelInfo!=0 && !data.entryParams.flatrate" class="result-tr">
                              <td class="result-total-moving sum-price">
                                Estimated Travel Time:
                              </td>
                              <td class="result-total-moving sum-price">
                                ${{ (data.entryParams.hrsTravelInfo? data.entryParams.hrsTravelInfo : 1) * (data.entryParams.perHrsTravelInfo ? data.entryParams.perHrsTravelInfo : 0)}}
                              </td>
                            </tr>
                            <tr
                                v-if="data.entryParams.infoInfo"
                                class="result-tr"
                            >
                              <td class="result-total-moving sum-price">
                                {{ data.entryParams.infoInfo }}
                              </td>
                              <td class="result-total-moving sum-price">
                                ${{ data.entryParams.infoPriceInfo }}
                              </td>
                            </tr>
                            <tr
                                v-if="data.entryParams.info2Info"
                                class="result-tr"
                            >
                              <td class="result-total-moving sum-price">
                                {{ data.entryParams.info2Info }}
                              </td>
                              <td class="result-total-moving sum-price">
                                ${{ data.entryParams.infoPrice2Info }}
                              </td>
                            </tr>
                            <tr
                                v-if="data.entryParams.info3Info"
                                class="result-tr"
                            >
                              <td class="result-total-moving sum-price">
                                {{ data.entryParams.info3Info }}
                              </td>
                              <td class="result-total-moving sum-price">
                                ${{ data.entryParams.infoPrice3Info }}
                              </td>
                            </tr>
                            <tr
                                v-if="data.entryParams.liableInfo"
                                class="result-tr"
                            >
                              <td
                                  class="result-total-total"
                                  style="color: #ff0000"
                              >
                                {{
                                  data.entryParams.liableInfo
                                }}
                              </td>
                              <td
                                  class="result-total-total"
                                  style="color: #ff0000"
                              >
                                -${{
                                  data.entryParams.liablePriceInfo
                                }}
                              </td>
                            </tr>
                            <tr
                                v-if="data.entryParams.discountInfo"
                                class="result-tr"
                            >
                              <td
                                  class="result-total-total"
                                  style="color: #ff0000"
                              >
                                {{
                                  data.entryParams.discountInfo
                                }}
                              </td>
                              <td
                                  class="result-total-total"
                                  style="color: #ff0000"
                              >
                                -${{
                                  data.entryParams.discountPriceInfo
                                }}
                              </td>
                            </tr>
                            <tr class="result-tr result-total-text">
                              <td class="result-total-total">
                                Total:
                              </td>
                              <td class="result-total-total">
                                ${{ totalPriceEntry }}
                              </td>
                            </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    <div  class="result-estimate">
                      <div class="title-wrap title-block">
                        <h2 class="result-title centered-element">
                          Understanding Your Estimate
                        </h2>
                      </div>
                      <div v-if="data.entryParams.movingType==='Long Distance' && (data.entryParams.binding == 'Non-Binding' || data.entryParams.binding == 'None')" class="estimate-block result-block request px-2">
                        <p>
                          Always Professional Movers only uses 16 foot Sprinter Van or 26 foot moving trucks for East Coast long distance moves. This is more economical for residents as your items don't have to be placed into storage until a truck can be filled to go with it - this eliminates missing or broken items. Our long distance moving services are regarded as the best long distance moving services available on the East Coast. Please note that the inventory items listed below are not guaranteed volume cubic feet. The inventory provided by you on this Estimate Cost for Service only used as a tool for the carrier to generate your approximately cubic feet. Any additional cubic feet added on move-out day will result in an additional cost based on the Estimate Cost for Service (once booked) and our companies full Tariff.
                          <v-spacer></v-spacer>
                          This is an agreement for your upcoming move. Please
                          review the details below including your address and
                          inventory list. Please notify us if you have any
                          changes.
                          <v-spacer></v-spacer>
                          We wold like to thank you for choosing Always
                          Professional Moving for your upcoming move. The Always
                          Professional Moving is designed to help you, our
                          valued customer avoid any hidden charges. We truly
                          believe that when you are moving, you need to deal
                          with a Company that does it all! Please take a few
                          moments to visit us at
                          <a href="http://www.alwayspromove.com">
                            www.alwayspromove.com</a
                          >
                        </p>
                      </div>
                      <div v-if="data.entryParams.movingType==='Long Distance' && data.entryParams.binding == 'Binding'" class="estimate-block result-block request px-2">
                        <p>
                          Moving price is based on inventory list only. The total cost of the move may increase if additional items are moved. Should there be any other services requested, additional costs will be charged.
                          <v-spacer></v-spacer>
                          This is an agreement for your upcoming move. Please
                          review the details below including your address and
                          inventory list. Please notify us if you have any
                          changes.
                          <v-spacer></v-spacer>
                          We wold like to thank you for choosing Always
                          Professional Moving for your upcoming move. The Always
                          Professional Moving is designed to help you, our
                          valued customer avoid any hidden charges. We truly
                          believe that when you are moving, you need to deal
                          with a Company that does it all! Please take a few
                          moments to visit us at
                          <a href="http://www.alwayspromove.com">
                            www.alwayspromove.com</a
                          >
                        </p>
                      </div>
                      <div v-if="data.entryParams.movingType==='Local Moving' &&  data.entryParams.binding == 'None'" class="estimate-block result-block request px-2">
                        <h5>
                          THE PRICE ABOVE IS AN HOURLY RATE ONLY, 3 HOURS
                          MINIMUM CHARGE, ANY ADDITIONAL HOUR WILL BE CHARGED
                          PER THE RATE ABOVE.
                        </h5>
                        <p>
                          Should there be any other services requested,
                          additional costs will be charged. All fragile items
                          that require special packing will incur additional
                          charges (Glass, Mirrors, T.V.'s, Paintings,
                          Washer/Dryer, Refrigerators, Piano, Grand Father
                          Clock). If any special packaging is rejected, company
                          will NOT be held liable for any damages. Toll prices
                          are not included in estimate.
                          <v-spacer></v-spacer>
                          This is an agreement for your upcoming move. Please
                          review the details below including your address and
                          inventory list. Please notify us if you have any
                          changes.
                          <v-spacer></v-spacer>
                          Once again we wold like to thank you for choosing
                          Always Professional Moving for your upcoming move. The
                          Always Professional Moving is designed to help you,
                          our valued customer avoid any hidden charges. We truly
                          believe that when you are moving, you need to deal
                          with a Company that does it all! Please take a few
                          moments to visit us at
                          <a href="http://www.alwayspromove.com"
                          >www.alwayspromove.com</a
                          >
                        </p>
                      </div>
                      <div v-if="data.entryParams.movingType==='Local Moving' && data.entryParams.binding == 'Binding'" class="estimate-block result-block request px-2">
                        <p>
                          Moving price is based on inventory list only. The total cost of the move may increase if additional items are moved. Should there be any other services requested, additional costs will be charged. All fragile items that require special packing will incur additional charges (Glass, Mirrors, Pianos, TV's or Paintings). If any special packaging is rejected, company will NOT be held liable for any damages. Toll prices are not included in estimate.
                        </p>
                      </div>
                      <div v-if="data.entryParams.movingType==='Local Moving' && data.entryParams.binding == 'Non-Binding'" class="estimate-block result-block request px-2">
                        <p>
                          Thank you!
                        </p>
                      </div>
                    </div>
                    <div
                        v-if="data.entryParams.infoTextInfo"
                        class="result-estimate"
                    >
                      <div class="title-wrap">
                        <h2 class="result-title">
                          Special request & instructions
                        </h2>
                      </div>
                      <div class="result-block request">
                        {{ data.entryParams.infoTextInfo }}
                      </div>
                    </div>
                    <div
                        v-if="
                        data.entryParams.roomsInfo &&
                        data.entryParams.volumeInfo &&
                        !data.entryParams.inventory
                      "
                        class="result-estimate"
                    >
                      <div class="title-wrap title-block">
                        <h2 class="result-title centered-element">
                          Inventory & Boxes
                        </h2>
                      </div>
                      <div class="result-about inventory-block-email b0">
                        <table class="result-inventory result-inventory-entry">
                          <thead>
                          <tr>
                            <th>Item</th>
                            <th>QTY</th>
                            <th>Cu.FT</th>
                          </tr>
                          <tr>
                            <td>Bedroom/s</td>
                            <td>{{ data.entryParams.roomsInfo }}</td>
                            <td>{{ data.entryParams.volumeInfo }}</td>
                          </tr>
                          </thead>
                        </table>
                      </div>
                    </div>
                    <div
                        v-else-if="data.entryParams.inventory"
                        class="result-estimate"
                    >
                      <div class="title-wrap title-block">
                        <h2 class="result-title">Inventory & Boxes</h2>
                      </div>
                      <div class="result-about b0">
                        <table class="result-inventory result-inventory-entry">
                          <thead>
                          <tr>
                            <th colspan="2">Item</th>
                            <th>QTY</th>
                            <th>CuFT</th>
                          </tr>
                          </thead>
                          <tbody>
                          <template
                              v-for="(room, name) in data.entryParams.inventory"
                          >
                            <tr :key="room">
                              <td class="title__handling" colspan="6">
                                {{ name }}
                              </td>
                            </tr>
                            <tr v-for="item in room" :key="item.id">
                              <td>
                                <div
                                    :class="item.class + '_small'"
                                    class="inventory-img"
                                ></div>
                              </td>
                              <td>
                                <div class="inventory-row-text">
                                  {{
                                    item.name
                                        .replace(/u0026/g, "\&")
                                        .replace(/u0022/g, '"')
                                        .replace(/u0027/g, "'")
                                  }}
                                </div>
                                <div
                                    v-if="item.subname"
                                    class="inventory-row-subtext"
                                >
                                  {{
                                    item.subname
                                        .replace(/u0022/g, '"')
                                        .replace(/u0027/g, '"')
                                        .replace(/u0026/g, "\&")
                                  }}
                                </div>
                              </td>
                              <td>
                                <div class="inventory-row-text">
                                  {{ item.qty }}
                                </div>
                              </td>
                              <td>
                                <div class="inventory-row-text">
                                  {{ item.size * item.qty }}
                                </div>
                              </td>
                            </tr>
                          </template>
                          <template v-if="Object.keys(data.entryParams.specialInventory).length">
                            <tr>
                              <td class="title__handling" colspan="6">
                                Special Handling
                              </td>
                            </tr>
                            <tr>
                              <th colspan="2">Item</th>
                              <th colspan="2">Assembly & Disassembly</th>
                              <th colspan="2">Wall Dismounting</th>
                            </tr>
                            <tr
                                v-for="item in data.entryParams
                                  .specialInventory"
                                :key="item.id * 1.21"
                                class="inventory-row"
                            >
                              <td>
                                <div
                                    :class="item.class + '_small'"
                                    class="inventory-img"
                                ></div>
                              </td>
                              <td>
                                <div class="inventory-row-text">
                                  {{ item.name }}
                                </div>
                                <div class="inventory-row-subtext">
                                  {{
                                    item.subname
                                        ? item.subname
                                            .replace(/u0022/g, '"')
                                            .replace(/u0027/g, '"')
                                            .replace(/u0026/g, "\&")
                                        : ""
                                  }}
                                </div>
                              </td>

                              <td colspan="2">
                                <div
                                    v-if="item.disassembly"
                                    class="inventory-row-text available"
                                >
                                  ✓
                                </div>
                                <div
                                    v-else
                                    class="inventory-row-text disabled"
                                >
                                  ✘
                                </div>
                              </td>

                              <td colspan="2">
                                <div
                                    v-if="item.wall"
                                    class="inventory-row-text available"
                                >
                                  ✓
                                </div>
                                <div
                                    v-else
                                    class="inventory-row-text disabled"
                                >
                                  ✘
                                </div>
                              </td>
                            </tr>
                          </template>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </template>
                </div>
                <div class="result-sticky-block">
                  <div class="result-sticky-sign">
                    <div class="sticky-sign">Customer Name</div>
                    <div class="sticky-sign">Customer Signature</div>
                    <div class="sticky-sign sign__date">Date</div>
                  </div>
                </div>
                <v-dialog v-model="emailsList" max-width="600">
                  <v-card>
                    <v-card-title class="headline">
                     Emails
                    </v-card-title>

                    <v-card-text>
                      Previous emails:
                    </v-card-text>
                    <v-card-text>
                      <table v-if="emailsSend" class="modal-info-email">
                        <thead>
                        <tr class="modal-list">
                          <th>Number</th>
                          <th>Date</th>
                          <th>Emailed To</th>
                          <th>Subject</th>
                        </tr>
                        </thead>
                        <tbody class="modal-email-body">
                          <tr class="emails--list" :key="item.id" v-for="(item,index) in emailsSend">
                            <td>{{index + 1}}</td>
                            <td>{{emailDate(item.date)}}</td>
                            <td>{{item.email}}</td>
                            <td><a target="_blank" :href="'/php/previewEmail.php?id='+item.id">Order: {{ estimateDate }}-{{ id }}</a></td>
                          </tr>
                        </tbody>

                      </table>
                      <div v-else>No emails send.</div>
                    </v-card-text>
                    <v-card-actions>
                      <v-spacer></v-spacer>

                      <v-btn color="primary"
                        @click="sendOrderToUserEmail()"
                      >
                        <v-progress-circular
                            v-if="sending"
                            size="20"
                            :width="3"
                            color="red"
                            indeterminate
                        ></v-progress-circular>
                        <template v-else>
                          <v-icon left>mdi-email</v-icon>
                          Send Email
                        </template>
                      </v-btn>
                      <v-btn color="primary" @click="emailsList = false">
                        Cancel
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
                <v-footer class="disableForPrint d-flex justify-end">
                  <v-card-actions class="d-flex justify-end">
                    <v-btn color="primary" @click="emailsList = true">
                      <v-icon left>mdi-email</v-icon>
                      Send Email {{ emailsSend ? "- " + emailsSend.length : '- 0' }}
                    </v-btn>
                    <v-btn color="primary" @click="printSection">
                      <v-icon left>mdi-printer</v-icon>
                      Print
                    </v-btn>

                    <v-btn
                        v-if="!data.entryParams"
                        color="error"
                        href="http://test.alwayspromove.com/profile-admin"
                        target="_blank"
                    >
                      <v-icon left>mdi-pencil</v-icon>
                      Edit
                    </v-btn>
                    <v-btn v-else color="error" @click="editCurrentOrder()">
                      <v-icon left>mdi-pencil</v-icon>
                      Edit
                    </v-btn>
                  </v-card-actions>
                </v-footer>
              </div>
            </div>
          </div>
        </div>
      </v-card>
    </v-dialog>
  </v-col>
</template>

<script>
import {mapActions, mapGetters, mapMutations} from "vuex";

export default {
  name: "modalWindow",
  data() {
    return {
      emailsList: false,
      sending:false
    };
  },
  methods: {
    ...mapActions(["getEmails"]),
    ...mapMutations([
      "openModal",
      "addItemPrices",
      "addTotalPrice",
      "setInfo",
      "saveInventoryInfo",
      "saveOrderItems",
        'saveOrderName',
        'setOrder'
    ]),
    printSection() {
      this.$htmlToPaper("modal1");
    },
    getWeekDay(date) {
      let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      date = new Date(date);
      return days[date.getDay()];
    },
    parseAddress(address = "", type) {
      let result = address.split(",", 3);
      let data = "";
      if (type) {
        data = `${result[0]}, <br>${result[1]}, <br><b>${result[2]}</b>`;
      } else {
        data = `${result[0]},${result[1]},<b>${result[2]}</b>`;
      }
      return data;
    },
    setImgAddress(type) {
      if (this.data.searchParam) {
        return `https://maps.googleapis.com/maps/api/staticmap?markers=color:blue%7C${this.data.searchParam[type]}&size=200x150&zoom=15&maptype=roadmap&key=AIzaSyAwWXleWh8d8A2lS2TbRAqqGp5-HLKyTh4`;
      } else if (this.data.modalName) {
        return `https://maps.googleapis.com/maps/api/staticmap?markers=color:blue%7C${this.data[type]}&size=200x150&zoom=15&maptype=roadmap&key=AIzaSyAwWXleWh8d8A2lS2TbRAqqGp5-HLKyTh4`;
      } else {
        return `https://maps.googleapis.com/maps/api/staticmap?markers=color:blue%7C${this.data.entryParams[type]}&size=200x150&zoom=15&maptype=roadmap&key=AIzaSyAwWXleWh8d8A2lS2TbRAqqGp5-HLKyTh4`;
      }
    },
    calculateHandlingFee(item) {
      let handlingFee = 0;
      let percent = 0;
      if (this.data.searchParam.percent) {
        percent = +this.data.searchParam.percent;
      }
      if (item.class === "default_icon") {
        handlingFee = item.cat
            ? +this.price[item.cat] + +this.price[item.cat] * percent
            : 0;
      } else {
        handlingFee = this.price[item.cat]
            ? +this.price[item.cat] + +this.price[item.cat] * percent
            : 0;
      }
      if (item.box) {
        if (this.data.searchParam.order__box) {
          handlingFee =
              +this.price[
                  `${item.name.replace(/\s+/g, "").toLowerCase()}-cardboard`
                  ] +
              +this.price[
                  `${item.name.replace(/\s+/g, "").toLowerCase()}-cardboard`
                  ] *
              percent;
        } else {
          handlingFee = item.cat
              ? +this.price[item.cat] + +this.price[item.cat] * percent
              : 0;
        }
      }
      return handlingFee;
    },
    calculateVolumeFee(item) {
      let percent = 0;
      if (this.data.searchParam.percent) {
        percent = this.data.searchParam.percent;
      }
      // Additional check for packing items
      if (item.pack) {
        this.data.searchParam.pack = true;
      }
      // **********

      const volumeFee = (
          item.size * this.price.costByVol +
          item.size * this.price.costByVol * percent
      ).toFixed(2);

      return volumeFee;
    },
    calculateTotalPrice(item, index, length) {
      const totalItemPrice = (
          (+item.handlingFee + +item.volumeFee) *
          +item.qty
      ).toFixed(2);
      this.addItemPrices({totalItemPrice, index, length});
      return totalItemPrice;
    },
    editCurrentOrder() {
      this.saveOrderName(this.getDataForModal.idForModal)
      let info = Object.entries(this.data.entryParams);
      info.forEach((value) => {
        let name = value[0].includes("Info")
            ? value[0].replace("Info", "")
            : value[0];
        let data = value[1];
        if (value[0].includes("inventory") && data) {
          this.saveOrderItems(data);
        }
        this.setInfo({type: `${name}`, info: data});
        this.saveInventoryInfo({
          type: `orderNumber`,
          info: this.getDataForModal.idForModal,
        });
      });
      this.saveOrderName(this.getDataForModal.idForModal)
      this.openModal(false);
      this.$router.push("/new");
    },
    sendOrderToUserEmail() {
      this.sending = true
      let container = document.querySelector(".result-container").innerHTML;
      let block = container.replaceAll('"', "'");
      let email = null;
      let orderNumber = null;
      if (this.data.entryParams) {
        email = this.data.entryParams.emailInfo;
        orderNumber = `${this.data.entryParams.estimateDate} - ${this.id}`;
      } else if (this.data.searchParams) {
        email = this.data.searchParams["details-email"];
        orderNumber = `${this.data.searchParams.estimateDate} - ${this.id}`;
      } else if (this.data.modalEmail) {
        email = this.data.modalEmail;
        orderNumber = `${this.data.estimateDate} - ${this.id}`;
      }
      const formData = new FormData()
      formData.append('email', email)
      formData.append('orderNumber', orderNumber)
      formData.append('orderId', this.getDataForModal.idForModal)
      formData.append('block', block)
      formData.append('date', new Date())
      fetch("/php/sendEmailWithOrder.php", {
        method: "POST",
        body: formData,
      }).then((response) => {
        if (response.status == 200) {
          this.sending = false
          this.getEmails(this.getDataForModal.idForModal);
        } else {
          alert('Error! Update Page and try again!')
        }

      });
    },
    emailDate(date){
      let emailDate = new Date(date)
      return emailDate.toLocaleString()
    }
  },
  computed: {
    ...mapGetters([
      "checkOpenModal",
      "getDataForModal",
      "getItemPrices",
      "getTotalPrice",
      "calculateItemsVolume",
      "calculateMovingPrice",
      "orderNumberInfo",
      "emailsSend",
    ]),
    statusOfModal: {
      get() {
        return this.checkOpenModal;
      },
      set(value) {
        this.openModal(value);
      },
    },
    id() {
      return this.getDataForModal.dataForModal["№"];
    },
    data() {
      return this.getDataForModal.dataForModal.data;
    },
    price() {
      return this.getDataForModal.priceForModal;
    },

    deliveryDays() {
      let stateDays = null;
      let deliveryDate = null;
      if (this.data.searchParam) {
        stateDays = `${this.data.searchParam.stateTo}__days`;
        deliveryDate = this.price[stateDays].split("-")[1];
      } else {
        stateDays = `${this.data.entryParams.stateTo}__days`;
        deliveryDate = this.price[stateDays].split("-")[1];
      }

      return deliveryDate;
    },
    checkStandardMove() {
      return this.price.name.includes("bedroom");
    },
    checkLongMove() {
      return !!this.data.range + 1;
    },
    getTypeOfMove() {
      return +this.data.range >
      +(+this.price["local-max-distance"] + +this.price["freeMile"])
          ? "Long Distance Moving"
          : "Local Moving";
    },
    itemsForRender() {
      let items = this.data.choisedItems;
      for (let value in items) {
        items[value].handlingFee = this.calculateHandlingFee(items[value]);
        items[value].volumeFee = this.calculateVolumeFee(items[value]);
      }

      let sortedArray = Object.values(items).sort((a, b) => {
        if (a.room < b.room) {
          return -1;
        }
        if (a.room < b.room) {
          return 1;
        }
        return 0;
      });

      let titleElement = null;
      sortedArray.forEach((value, index) => {
        value.totalPrice = this.calculateTotalPrice(
            value,
            index,
            sortedArray.length
        );
        value.room == titleElement
            ? delete value.room
            : (titleElement = value.room);
      });

      return sortedArray;
    },
    calculateSpecialPacking() {
      let sumOfPacking = 0;
      let percent = 0;
      if (this.data.searchParam.percent) {
        percent = this.data.searchParam.percent;
      }
      for (let item of this.itemsForRender) {
        if (item.pack && item.subname && item.subname == "Packing") {
          sumOfPacking +=
              (+this.price[
                      `${item.name.replace(/\s+/g, "").toLowerCase()}-cardboard-pack`
                      ] +
                  +this.price[
                      `${item.name.replace(/\s+/g, "").toLowerCase()}-cardboard-pack`
                      ] *
                  percent) *
              item.qty;
        }
        if (
            item.pack &&
            item.subname &&
            item.subname.replace(/u0026/g, "&") === "Packing & Unpacking"
        ) {
          sumOfPacking +=
              (+this.price[
                      `${item.name
                          .replace(/\s+/g, "")
                          .toLowerCase()}-cardboard-pack-unpack`
                      ] +
                  +this.price[
                      `${item.name
                          .replace(/\s+/g, "")
                          .toLowerCase()}-cardboard-pack-unpack`
                      ] *
                  percent) *
              item.qty;
        }
      }
      return +sumOfPacking;
    },
    checkFloorFrom() {
      return (
          this.data.searchParam["select-stairs-from"] != "e" &&
          this.data.searchParam["select-stairs-from"] != "0"
      );
    },
    checkFloorTo() {
      return (
          this.data.searchParam["select-stairs-to"] != "e" &&
          this.data.searchParam["select-stairs-to"] != "0"
      );
    },
    checkCOI() {
      return (
          this.data.searchParam["coi-building-from"] ||
          this.data.searchParam["coi-building-to"] ||
          this.data.searchParam["coi-building-add-pick-up"] ||
          this.data.searchParam["coi-building-add-drop"]
      );
    },
    calculateCOI() {
      let coiPrice = 0;
      let locations = [
        this.data.searchParam["coi-building-from"],
        this.data.searchParam["coi-building-to"],
        this.data.searchParam["coi-building-add-pick-up"],
        this.data.searchParam["coi-building-add-drop"],
      ];
      locations.forEach((location) => {
        if (location) {
          coiPrice += +this.price[`COI`];
        }
      });
      return +coiPrice;
    },
    calculateTravelPrice() {
      let travelPrice = 0;
      if (
          +this.data.searchParam.range <= +this.price["local-max-distance"] &&
          +this.data.searchParam.range >= +this.price["freeMile"]
      ) {
        travelPrice += +(
            +this.price["truckCharges"] +
            +this.price["localTollCharge"] +
            +this.price["chargesPerMile"] *
            (+this.data.searchParam.range - +this.price["freeMile"])
        );
      } else if (
          +this.data.searchParam.range > +this.price["local-max-distance"]
      ) {
        travelPrice += +(
            +this.price["truckCharges"] +
            +(
                +this.price["chargesPerMile"] *
                (+this.data.searchParam.range - +this.price["freeMile"])
            ) +
            this.calculateItemsVolume *
            +this.price[`${this.data.searchParam.stateTo}__price`]
        );
      } else {
        travelPrice += +(
            +this.price["truckCharges"] + +this.price["localTollCharge"]
        );
      }

      if (this.data.searchParam["inputAdd-pick-up"] != "") {
        travelPrice += +this.price["costExtraStop"];
      }
      if (this.data.searchParam["inputAdd-drop"] != "") {
        travelPrice += +this.price["costExtraStop"];
      }
      return +travelPrice;
    },

    checkAdditionalAddress() {
      return (
          this.data.searchParam["add-checkbox"] ||
          this.data.searchParam["add-drop-checkbox"]
      );
    },
    calculateFinalPrice() {
      return (
          +this.calculateTravelPrice +
          +this.calculateMovingPrice +
          +this.calculateCOI +
          +this.calculateSpecialPacking +
          (this.data.special ? +this.price["costDis"] : 0)
      );
    },
    totalPriceEntry() {
      let result =
          +this.data.entryParams.subTotalPrice -
          (this.data.entryParams.liablePriceInfo
              ? this.data.entryParams.liablePriceInfo
              : 0) -
          (this.data.entryParams.discountPriceInfo
              ? this.data.entryParams.discountPriceInfo
              : 0);
      return result;
    },
    estimateDate(){
      if(this.data.searchParam){
        return this.data.searchParam["estimateDate"]
      } else if(this.data.entryParams){
        return this.data.entryParams.estimateDate
      } else {
        return this.data["estimateDate"]
      }
    }
  },

};
</script>

<style>
@import "../assets/css/2.css";

:root {
  --first-color: #2626b6;
}

.result-container {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: space-around;
}

.result-wrap {
  border: 1px #2626b6 solid;
  border-radius: 10px;
}

.send-email {
  width: 150px;
}

.result-sticky-block {
  margin: 0 auto;
  max-width: 1100px;
}

.result-estimate {
  position: relative;
  margin: 10px;
  border: 1px #2626b6 solid;
  border-radius: 10px;
  font-size: 18px;
}

.result-title {
  color: #2626b6;
  font-size: 22px;
  text-align: center;
  padding: 10px 0;
}

.result-title-job {
  position: absolute;
  right: 15px;
  top: 11px;
  font-size: 20px;
}

.result-client {
  margin-bottom: 10px;
}

.result-form {
  margin: 0 10px;
  transition: 1.5s;
  display: flex;
  justify-content: flex-end;
}

.result-form button.ok {
  cursor: default;
  background: #195312;
}

.result-total-text {
  font-weight: 600;
}

.result-inventory {
  width: 100%;
  border-top: 1px #2626b6 solid;
  border-collapse: collapse;
}

.result-inventory th,
.result-inventory td {
  border-top: 1px #808080 solid;
  border-bottom: 1px #808080 solid;
  border-radius: 10px;
}

.result-inventory th {
  padding: 10px;
  text-align: left;
}

.result-inventory td {
  padding: 0 10px;
}

.result-job-number {
  color: red;
}

.result-block {
  border-top: 1px #2626b6 solid;
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.result-info {
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 10px;
}

.result-info-text {
  padding: 10px;
  display: flex;
  border-left: 1px #2626b6 solid;
}

.result-info-title {
  padding: 10px;
}

.result-about {
  border-right: 1px #2626b6 solid;
  padding: 10px;
}

.result-about-title {
  line-height: 22px;
}

.result-about-text {
  display: inline-block;
}

.result-table {
  width: 100%;
}

.result-tr {
  line-height: 25px;
  margin: 5px 0;
  border: 1px grey solid;
  border-left: none;
  border-right: none;
}

.result-tr:last-child {
  padding-left: 5px;
}

.result-sticky-button {
  margin-top: 20px;
}

.result-sticky-button button {
  cursor: pointer;
  color: #ffffff;
  font-size: 22px;
  line-height: 100%;
  height: 45px;
  background: #35c1f4;
  border: 1px solid #d6d6d6;
  border-radius: 3px;
  padding: 5px 15px;
  margin: 0 15px 15px;
}

.result-save-info {
  padding: 10px;
  text-align: center;
}

.result-logo {
  text-align: center;
  margin: 20px 0 0;
}

.result-logo img {
  width: 350px;
}

.save-link {
  color: #2626b6;
  text-decoration: none;
}

.client-email {
  text-decoration: none;
  color: #2626b6;
}

.client-phone {
  text-decoration: none;
  color: #000000;
}

.local-wrap {
  display: flex;
  justify-content: space-between;
}

.title-wrap {
  display: flex;
  justify-content: space-around;
}

.title-text {
  margin-bottom: 4px;
  line-height: 24px;
}

.text-head {
  font-size: 22px;
}

.b0 {
  border: none;
}

.result-tr td:last-child {
  padding-left: 5px;
}

.inventory-row td {
  vertical-align: middle;
}

.inventory-img {
  width: 40px;
  height: 40px;
}

.inventory-row-text {
  display: inline-block;
  font-size: 14px;
}

.inventory-row-subtext {
  display: inline-block;
  margin-left: 8px;
  color: #808080;
  font-size: 12px;
}

.job {
  color: red;
  font-size: 18px;
}

.tooltip {
  position: relative;
}

.tooltip:before {
  content: attr(data-description);
  box-sizing: border-box;
  display: block;
  background: rgba(0, 0, 0, 0.88);
  color: white;
  padding: 10px;
  position: absolute;
  left: 50%;
  top: -30px;
  margin-left: -100px;
  font-size: 12px;
  border-radius: 5px;
  opacity: 0;
  transition: 0.25s ease-in-out;
}

.tooltip:hover:before {
  opacity: 1;
  top: -55px;
}

.minimum-feet {
  color: #808080;
  cursor: pointer;
}

.info-wrap {
  justify-content: flex-end;
  margin: 0 5px;
  display: flex;
  flex-direction: column;
}

.request {
  display: block;
  padding: 10px;
}

.request h4 {
  margin-bottom: 10px;
}

.head__block {
  display: flex;
  justify-content: center;
  position: relative;
}

#head__number {
  position: absolute;
  right: 5px;
  font-size: 18px;
}

.result-sticky-sign {
  display: none;
}

.title__box,
.title__custom,
.title__handling {
  width: 100%;
  text-align: center;
  background: #35c1f4;
  font-size: 20px;
  padding: 5px 0;
}

.mobile-moving-title {
  display: none;
}

.available {
  color: green;
  font-size: 20px;
  font-weight: bold;
}
.modal-info-email{
  width: 100%;
}
.emails--list{
  text-align: center;
}
.emails--list td {
  padding: 5px 0 ;
}
.disabled {
  color: #ff0000;
}

.windows8 {
  position: relative;
  width: 18px;
  height: 18px;
  margin: auto;
  padding: 10px;
}

.windows8 .wBall {
  position: absolute;
  width: 17px;
  height: 17px;
  opacity: 0;
  transform: rotate(225deg);
  -o-transform: rotate(225deg);
  -ms-transform: rotate(225deg);
  -webkit-transform: rotate(225deg);
  -moz-transform: rotate(225deg);
  animation: orbit 4.8425s infinite;
  -o-animation: orbit 4.8425s infinite;
  -ms-animation: orbit 4.8425s infinite;
  -webkit-animation: orbit 4.8425s infinite;
  -moz-animation: orbit 4.8425s infinite;
}

.windows8 .wBall .wInnerBall {
  position: absolute;
  width: 2px;
  height: 2px;
  background: #ffffff;
  left: 0px;
  top: 0px;
  border-radius: 2px;
}

.windows8 #wBall_1 {
  animation-delay: 1.056s;
  -o-animation-delay: 1.056s;
  -ms-animation-delay: 1.056s;
  -webkit-animation-delay: 1.056s;
  -moz-animation-delay: 1.056s;
}

.windows8 #wBall_2 {
  animation-delay: 0.203s;
  -o-animation-delay: 0.203s;
  -ms-animation-delay: 0.203s;
  -webkit-animation-delay: 0.203s;
  -moz-animation-delay: 0.203s;
}

.windows8 #wBall_3 {
  animation-delay: 0.4265s;
  -o-animation-delay: 0.4265s;
  -ms-animation-delay: 0.4265s;
  -webkit-animation-delay: 0.4265s;
  -moz-animation-delay: 0.4265s;
}

.windows8 #wBall_4 {
  animation-delay: 0.6295s;
  -o-animation-delay: 0.6295s;
  -ms-animation-delay: 0.6295s;
  -webkit-animation-delay: 0.6295s;
  -moz-animation-delay: 0.6295s;
}

.windows8 #wBall_5 {
  animation-delay: 0.843s;
  -o-animation-delay: 0.843s;
  -ms-animation-delay: 0.843s;
  -webkit-animation-delay: 0.843s;
  -moz-animation-delay: 0.843s;
}

@keyframes orbit {
  0% {
    opacity: 1;
    z-index: 99;
    transform: rotate(180deg);
    animation-timing-function: ease-out;
  }
  7% {
    opacity: 1;
    transform: rotate(300deg);
    animation-timing-function: linear;
    origin: 0%;
  }
  30% {
    opacity: 1;
    transform: rotate(410deg);
    animation-timing-function: ease-in-out;
    origin: 7%;
  }
  39% {
    opacity: 1;
    transform: rotate(645deg);
    animation-timing-function: linear;
    origin: 30%;
  }
  70% {
    opacity: 1;
    transform: rotate(770deg);
    animation-timing-function: ease-out;
    origin: 39%;
  }
  75% {
    opacity: 1;
    transform: rotate(900deg);
    animation-timing-function: ease-out;
    origin: 70%;
  }
  76% {
    opacity: 0;
    transform: rotate(900deg);
  }
  100% {
    opacity: 0;
    transform: rotate(900deg);
  }
}

@-o-keyframes orbit {
  0% {
    opacity: 1;
    z-index: 99;
    -o-transform: rotate(180deg);
    -o-animation-timing-function: ease-out;
  }
  7% {
    opacity: 1;
    -o-transform: rotate(300deg);
    -o-animation-timing-function: linear;
    -o-origin: 0%;
  }
  30% {
    opacity: 1;
    -o-transform: rotate(410deg);
    -o-animation-timing-function: ease-in-out;
    -o-origin: 7%;
  }
  39% {
    opacity: 1;
    -o-transform: rotate(645deg);
    -o-animation-timing-function: linear;
    -o-origin: 30%;
  }
  70% {
    opacity: 1;
    -o-transform: rotate(770deg);
    -o-animation-timing-function: ease-out;
    -o-origin: 39%;
  }
  75% {
    opacity: 1;
    -o-transform: rotate(900deg);
    -o-animation-timing-function: ease-out;
    -o-origin: 70%;
  }
  76% {
    opacity: 0;
    -o-transform: rotate(900deg);
  }
  100% {
    opacity: 0;
    -o-transform: rotate(900deg);
  }
}

@-ms-keyframes orbit {
  0% {
    opacity: 1;
    z-index: 99;
    -ms-transform: rotate(180deg);
    -ms-animation-timing-function: ease-out;
  }
  7% {
    opacity: 1;
    -ms-transform: rotate(300deg);
    -ms-animation-timing-function: linear;
    -ms-origin: 0%;
  }
  30% {
    opacity: 1;
    -ms-transform: rotate(410deg);
    -ms-animation-timing-function: ease-in-out;
    -ms-origin: 7%;
  }
  39% {
    opacity: 1;
    -ms-transform: rotate(645deg);
    -ms-animation-timing-function: linear;
    -ms-origin: 30%;
  }
  70% {
    opacity: 1;
    -ms-transform: rotate(770deg);
    -ms-animation-timing-function: ease-out;
    -ms-origin: 39%;
  }
  75% {
    opacity: 1;
    -ms-transform: rotate(900deg);
    -ms-animation-timing-function: ease-out;
    -ms-origin: 70%;
  }
  76% {
    opacity: 0;
    -ms-transform: rotate(900deg);
  }
  100% {
    opacity: 0;
    -ms-transform: rotate(900deg);
  }
}

@-webkit-keyframes orbit {
  0% {
    opacity: 1;
    z-index: 99;
    -webkit-transform: rotate(180deg);
    -webkit-animation-timing-function: ease-out;
  }
  7% {
    opacity: 1;
    -webkit-transform: rotate(300deg);
    -webkit-animation-timing-function: linear;
    -webkit-origin: 0%;
  }
  30% {
    opacity: 1;
    -webkit-transform: rotate(410deg);
    -webkit-animation-timing-function: ease-in-out;
    -webkit-origin: 7%;
  }
  39% {
    opacity: 1;
    -webkit-transform: rotate(645deg);
    -webkit-animation-timing-function: linear;
    -webkit-origin: 30%;
  }
  70% {
    opacity: 1;
    -webkit-transform: rotate(770deg);
    -webkit-animation-timing-function: ease-out;
    -webkit-origin: 39%;
  }
  75% {
    opacity: 1;
    -webkit-transform: rotate(900deg);
    -webkit-animation-timing-function: ease-out;
    -webkit-origin: 70%;
  }
  76% {
    opacity: 0;
    -webkit-transform: rotate(900deg);
  }
  100% {
    opacity: 0;
    -webkit-transform: rotate(900deg);
  }
}

@-moz-keyframes orbit {
  0% {
    opacity: 1;
    z-index: 99;
    -moz-transform: rotate(180deg);
    -moz-animation-timing-function: ease-out;
  }
  7% {
    opacity: 1;
    -moz-transform: rotate(300deg);
    -moz-animation-timing-function: linear;
    -moz-origin: 0%;
  }
  30% {
    opacity: 1;
    -moz-transform: rotate(410deg);
    -moz-animation-timing-function: ease-in-out;
    -moz-origin: 7%;
  }
  39% {
    opacity: 1;
    -moz-transform: rotate(645deg);
    -moz-animation-timing-function: linear;
    -moz-origin: 30%;
  }
  70% {
    opacity: 1;
    -moz-transform: rotate(770deg);
    -moz-animation-timing-function: ease-out;
    -moz-origin: 39%;
  }
  75% {
    opacity: 1;
    -moz-transform: rotate(900deg);
    -moz-animation-timing-function: ease-out;
    -moz-origin: 70%;
  }
  76% {
    opacity: 0;
    -moz-transform: rotate(900deg);
  }
  100% {
    opacity: 0;
    -moz-transform: rotate(900deg);
  }
}

@media screen and (max-width: 700px) {
  .result-logo img {
    display: none;
  }

  .result-title {
    font-size: 18px;
  }

  .desktop-moving-title {
    display: none;
  }

  .mobile-moving-title {
    border-bottom: 1px #2626b6 solid;
    border-top: 1px #2626b6 solid;
    display: block;
  }

  .head__block {
    flex-direction: column;
  }

  #head__number {
    position: static;
  }

  .title-text {
    font-size: 16px;
  }

  .text-head {
    font-size: 18px;
  }

  .result-info-text {
    border-left: none;
  }

  .result-block {
    display: block;
    padding: 0 2px;
  }

  .result-estimate {
    font-size: 16px;
  }

  .from-img {
    display: flex;
    align-self: center;
  }

  .from-img img,
  .to-img img {
    width: 150px;
    border-radius: 5px;
  }

  .result-about {
    padding: 0;
  }

  .result-inventory th {
    font-size: 14px;
    padding: 5px;
  }

  .result-inventory td {
    padding: 0;
  }

  .inventory-img {
    transform: scale(0.7);
  }

  .inventory-row-text {
    font-size: 13px;
  }

  .inventory-row-subtext {
    display: block;
  }

  .result-about {
    border-right: none;
  }

  .title-wrap {
    flex-direction: column;
  }

  .result-sticky-button button {
    width: 50%;
    margin: 5px 0;
  }

  .result-form {
    flex-wrap: wrap;
  }
}

@media print {
  .site-header {
    display: none;
  }

  .result-title {
    font-size: 18px;
  }

  html,
  body {
    height: 297mm;
    width: 210mm;
  }

  .result-logo {
    margin-top: 0;
  }

  .result-logo img {
    width: 200px;
  }

  .result-sticky-button {
    display: none;
  }

  .result-sticky-sign {
    width: 80%;
    margin: 30px auto 0;
    display: flex;
    justify-content: space-between;
  }

  .sticky-sign {
    width: 35%;
    padding: 5px 0;
    border-top: 1px solid #000000;
  }

  .sticky-sign.sign__date {
    width: 20%;
  }

  *,
  *:before,
  *:after {
    color: #000;
    box-shadow: none;
    text-shadow: none;
  }
}
</style>