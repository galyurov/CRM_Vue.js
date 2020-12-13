<template>

  <!--  <v-container fluid>-->
  <!--    <v-form ref="mainForm" v-model="valid" lazy-validation>-->
  <!--      <v-row class="d-flex justify-center">-->
  <!--        <v-col class="cols&#45;&#45;mob" cols="4">-->
  <!--          <div class="d-flex justify-center text-lg-h6">-->
  <!--            Moving From-->
  <!--          </div>-->
  <!--          <div>-->
  <!--            <template>-->
  <!--              <v-container>-->
  <!--                <v-row class="d-flex flex-column">-->
  <!--                  <v-col class="py-1" cols="12">-->
  <!--                    <v-text-field-->
  <!--                        class="pt-0"-->
  <!--                        v-model="nameFrom"-->
  <!--                        ref="nameFrom"-->
  <!--                        :rules="nameRules"-->
  <!--                        :counter="30"-->
  <!--                        label="Name"-->
  <!--                        required-->
  <!--                    ></v-text-field>-->
  <!--                  </v-col>-->
  <!--                  <v-col class="py-1" cols="12">-->
  <!--                    <v-text-field-->
  <!--                        class="pt-0"-->
  <!--                        id="addressFrom"-->
  <!--                        label="Address From"-->
  <!--                        :rules="[v=> !!v || 'Enter Address']"-->
  <!--                        ref="addressFrom"-->
  <!--                        v-model="addressFrom"-->
  <!--                        placeholder=""-->
  <!--                        required-->
  <!--                    ></v-text-field>-->
  <!--                  </v-col>-->
  <!--                  <v-row class="py-1 px-3">-->
  <!--                    <v-col class="py-0">-->
  <!--                      <v-select-->
  <!--                          class="pt-0 py-0"-->
  <!--                          :items="locations"-->
  <!--                          label="Location"-->
  <!--                          v-model="locationFrom"-->
  <!--                      ></v-select>-->
  <!--                    </v-col>-->
  <!--                    <v-col class="py-0">-->
  <!--                      <v-select-->
  <!--                          class="pt-0 py-0"-->
  <!--                          :items="levels"-->
  <!--                          label="Level"-->
  <!--                          v-model="levelFrom"-->
  <!--                      ></v-select>-->
  <!--                    </v-col>-->
  <!--                  </v-row>-->
  <!--                  <v-row class="py-1 px-3">-->
  <!--                    <v-col class="py-1">-->
  <!--                      <v-text-field-->
  <!--                          class="pt-0"-->
  <!--                          v-model="floorFrom"-->
  <!--                          label="Floor"-->
  <!--                          required-->
  <!--                      ></v-text-field>-->
  <!--                    </v-col>-->
  <!--                    <v-col class="py-1">-->
  <!--                      <v-text-field-->
  <!--                          class="pt-0"-->
  <!--                          v-model="aptFrom"-->
  <!--                          label="APT.#"-->
  <!--                          required-->
  <!--                      ></v-text-field>-->
  <!--                    </v-col>-->
  <!--                  </v-row>-->
  <!--                  <v-col class="py-1" cols="12">-->
  <!--                    <v-text-field-->
  <!--                        class="pt-0"-->
  <!--                        v-model="phoneFrom"-->
  <!--                        v-mask="'(###) ###-####'"-->
  <!--                        label="Phone"-->
  <!--                    ></v-text-field>-->
  <!--                  </v-col>-->
  <!--                  <v-col class="py-1" cols="12">-->
  <!--                    <v-text-field-->
  <!--                        class="pt-0"-->
  <!--                        v-model="phoneFrom2"-->
  <!--                        v-mask="'(###) ###-####'"-->
  <!--                        label="Phone#2"-->
  <!--                    ></v-text-field>-->
  <!--                  </v-col>-->
  <!--                  <v-col class="py-1" cols="12">-->
  <!--                    <v-text-field-->
  <!--                        class="pt-0"-->
  <!--                        v-model="email"-->
  <!--                        :rules="emailRules"-->
  <!--                        label="E-mail"-->
  <!--                        required-->
  <!--                    ></v-text-field>-->
  <!--                  </v-col>-->
  <!--                </v-row>-->
  <!--              </v-container>-->
  <!--            </template>-->
  <!--          </div>-->
  <!--        </v-col>-->
  <!--        <v-divider vertical></v-divider>-->
  <!--        <v-col class="cols&#45;&#45;mob" cols="4">-->
  <!--          <div class="d-flex justify-center text-lg-h6">-->
  <!--            Moving To-->
  <!--          </div>-->
  <!--          <div>-->
  <!--            <template>-->
  <!--              <v-container>-->
  <!--                <v-row class="d-flex flex-column">-->
  <!--                  <v-col class="py-1" cols="12">-->
  <!--                    <v-text-field-->
  <!--                        class="pt-0"-->
  <!--                        v-model="nameTo"-->
  <!--                        :counter="30"-->
  <!--                        ref="nameTo"-->
  <!--                        label="Name"-->
  <!--                    ></v-text-field>-->
  <!--                  </v-col>-->
  <!--                  <v-col class="py-1" cols="12">-->
  <!--                    <v-text-field-->
  <!--                        class="pt-0"-->
  <!--                        id="addressTo"-->
  <!--                        ref="addressTo"-->
  <!--                        v-model="addressTo"-->
  <!--                        label="Address To"-->
  <!--                        :rules="[v=> !!v || 'Enter Address']"-->
  <!--                        placeholder=""-->
  <!--                        required-->
  <!--                    ></v-text-field>-->
  <!--                  </v-col>-->
  <!--                  <v-row class="py-1 px-3">-->
  <!--                    <v-col class="py-0">-->
  <!--                      <v-select-->
  <!--                          class="pt-0 py-0"-->
  <!--                          :items="locations"-->
  <!--                          label="Location"-->
  <!--                          v-model="locationTo"-->
  <!--                      ></v-select>-->
  <!--                    </v-col>-->
  <!--                    <v-col class="py-0">-->
  <!--                      <v-select-->
  <!--                          class="pt-0 py-0"-->
  <!--                          :items="levels"-->
  <!--                          label="Level"-->
  <!--                          v-model="levelTo"-->
  <!--                      ></v-select>-->
  <!--                    </v-col>-->
  <!--                  </v-row>-->
  <!--                  <v-row class="py-1 px-3">-->
  <!--                    <v-col class="py-1">-->
  <!--                      <v-text-field-->
  <!--                          class="pt-0"-->
  <!--                          v-model="floorTo"-->
  <!--                          label="Floor"-->
  <!--                          required-->
  <!--                      ></v-text-field>-->
  <!--                    </v-col>-->
  <!--                    <v-col class="py-1">-->
  <!--                      <v-text-field-->
  <!--                          class="pt-0"-->
  <!--                          v-model="aptTo"-->
  <!--                          label="APT.#"-->
  <!--                          required-->
  <!--                      ></v-text-field>-->
  <!--                    </v-col>-->
  <!--                  </v-row>-->
  <!--                  <v-col class="py-1" cols="12">-->
  <!--                    <v-text-field-->
  <!--                        class="pt-0"-->
  <!--                        v-model="phoneTo"-->
  <!--                        v-mask="'(###) ###-####'"-->
  <!--                        label="Phone"-->
  <!--                    ></v-text-field>-->
  <!--                  </v-col>-->
  <!--                  <v-col class="py-1" cols="12">-->
  <!--                    <v-text-field-->
  <!--                        class="pt-0"-->
  <!--                        v-model="fax"-->
  <!--                        v-mask="'(###) ###-####'"-->
  <!--                        label="Fax"-->
  <!--                    ></v-text-field>-->
  <!--                  </v-col>-->
  <!--                </v-row>-->
  <!--              </v-container>-->
  <!--            </template>-->
  <!--          </div>-->
  <!--        </v-col>-->
  <!--      </v-row>-->
  <!--      <v-row class="d-flex justify-center">-->
  <!--        <v-col cols="4" class="cols&#45;&#45;mob cols&#45;&#45;mob&#45;&#45;maxwidth d-flex justify-center py-0">-->
  <!--          <v-col cols="7" class="cols&#45;&#45;mob cols&#45;&#45;mob&#45;&#45;maxwidth py-0">-->
  <!--            <v-menu-->
  <!--                ref="menu"-->
  <!--                v-model="menu"-->
  <!--                :close-on-content-click="true"-->
  <!--                transition="scale-transition"-->
  <!--                offset-y-->
  <!--                min-width="290px"-->
  <!--            >-->
  <!--              <template v-slot:activator="{ on, attrs }">-->
  <!--                <v-text-field-->
  <!--                    v-model="editedDate"-->
  <!--                    label="Expected Move Date"-->
  <!--                    prepend-icon="mdi-calendar"-->
  <!--                    readonly-->
  <!--                    v-bind="attrs"-->
  <!--                    v-on="on"-->
  <!--                ></v-text-field>-->
  <!--              </template>-->
  <!--              <v-date-picker-->
  <!--                  v-model="datepicker"-->
  <!--                  color="primary"-->
  <!--                  no-title-->
  <!--                  ref="datepicker"-->
  <!--                  scrollable-->
  <!--              >-->
  <!--              </v-date-picker>-->
  <!--            </v-menu>-->

  <!--          </v-col>-->

  <!--        </v-col>-->
  <!--        <v-col cols="4" class="cols&#45;&#45;mob cols&#45;&#45;mob&#45;&#45;maxwidth d-flex justify-center  py-0">-->
  <!--          <v-col cols="6" class="py-0 cols&#45;&#45;mob cols&#45;&#45;mob&#45;&#45;maxwidth">-->
  <!--            <v-select-->
  <!--                :items="times"-->
  <!--                v-model="arrivalTime"-->
  <!--                label="Arrival time"-->
  <!--            ></v-select>-->
  <!--          </v-col>-->

  <!--        </v-col>-->
  <!--      </v-row>-->
  <!--      <v-row class="d-flex justify-center py-0 align-center">-->
  <!--        <v-col cols="4" class="cols&#45;&#45;mob cols&#45;&#45;mob&#45;&#45;maxwidth d-flex justify-center py-0">-->
  <!--          <v-col cols="8" class="py-0">-->
  <!--            <v-select-->
  <!--                class="py-0"-->
  <!--                :items="informationItems"-->
  <!--                v-model="information"-->
  <!--                label="How did you hear about us?"-->
  <!--            ></v-select>-->
  <!--          </v-col>-->
  <!--        </v-col>-->
  <!--        <v-col cols="2" class="cols&#45;&#45;mob cols&#45;&#45;mob&#45;&#45;maxwidth d-flex justify-center py-0">-->
  <!--          <v-col cols="10" class="py-0">-->
  <!--            <v-select-->
  <!--                class="py-0"-->
  <!--                :items="roomsItems"-->
  <!--                v-model="rooms"-->
  <!--                label="Rooms"-->
  <!--            ></v-select>-->
  <!--          </v-col>-->
  <!--        </v-col>-->
  <!--        <v-col cols="2" class="cols&#45;&#45;mob cols&#45;&#45;mob&#45;&#45;maxwidth d-flex justify-center py-0">-->
  <!--          <v-col cols="10" class="py-0">-->
  <!--            <v-radio-group v-model="typeOfMove">-->
  <!--              <template v-slot:label>-->
  <!--                <div>Type of Move:</div>-->
  <!--              </template>-->
  <!--              <v-radio value="Residential">-->
  <!--                <template v-slot:label>-->
  <!--                  <div>Residential</div>-->
  <!--                </template>-->
  <!--              </v-radio>-->
  <!--              <v-radio value="Commercial">-->
  <!--                <template v-slot:label>-->
  <!--                  <div>Commercial</div>-->
  <!--                </template>-->
  <!--              </v-radio>-->
  <!--            </v-radio-group>-->
  <!--          </v-col>-->
  <!--        </v-col>-->
  <!--      </v-row>-->
  <!--      <v-row class="d-flex justify-center py-0 align-center">-->
  <!--        <v-btn @click="selectTab(1)" class="mx-4 entry&#45;&#45;button">Continue to inventory</v-btn>-->
  <!--        <v-btn @click="selectTab(2)" class="mx-4 entry&#45;&#45;button">Continue to charges</v-btn>-->
  <!--      </v-row>-->
  <!--      <v-snackbar-->
  <!--          v-model="snackbar"-->
  <!--          :timeout="timeout"-->
  <!--      >-->
  <!--        {{ text }}-->

  <!--        <template v-slot:action="{ attrs }">-->
  <!--          <v-btn-->
  <!--              color="blue"-->
  <!--              text-->
  <!--              v-bind="attrs"-->
  <!--              @click="snackbar = false"-->
  <!--          >-->
  <!--            Close-->
  <!--          </v-btn>-->
  <!--        </template>-->
  <!--      </v-snackbar>-->
  <!--    </v-form>-->
  <!--    <v-tooltip left>-->
  <!--      <template v-slot:activator="{ on, attrs }">-->
  <!--        <v-btn style='z-index: 55'-->
  <!--               v-bind="attrs"-->
  <!--               v-on="on"-->
  <!--               class="mx-2"-->
  <!--               fab-->
  <!--               elevation="6"-->
  <!--               fixed-->
  <!--               bottom-->
  <!--               right-->
  <!--               large-->
  <!--               color="error"-->
  <!--               @click="clearStore()"-->
  <!--        >-->
  <!--          <v-icon dark>-->
  <!--            mdi-backspace-->
  <!--          </v-icon>-->
  <!--        </v-btn>-->
  <!--      </template>-->
  <!--      <span>Clear All Values</span>-->
  <!--    </v-tooltip>-->
  <!--  </v-container>-->

  <table border="0" cellpadding="0" cellspacing="0" style="border-collapse: collapse;margin: 20px auto"
         bordercolor="#111111" width="800" align="center">
    <tbody>
    <tr>
      <td width="95%" bgcolor="#008000" align="center" height="17"><b><font face="Verdana" size="4" color="#FFFFFF">Entry
        Form</font></b></td>
      <td width="5%" bgcolor="#008000" align="center" height="22"><a href="javascript:window.close()">
        <img border="0" src="/img/x.gif" align="right"></a></td>
    </tr>
    <tr>
      <td width="100%" bgcolor="#FFFFFF" colspan="2">
        <table border="0" cellpadding="0" cellspacing="0" style="border-collapse: collapse" bordercolor="#111111"
               width="100%">
          <tbody>
          <tr>
            <td width="100%"><br>
              <form name="theForm" method="post">
                <table border="1" width="98%" cellspacing="0" align="center"
                       style="border-collapse: collapse;margin: 0 7px;" bordercolor="#CCCCCC">
                  <tbody>
                  <tr>
                    <td bgcolor="#008000" align="center" height="20" width="49%"><font color="#FFFFFF"
                                                                                       face="Verdana"><b>Moving From</b></font>
                    </td>
                    <td bgcolor="#008000" align="center" height="20" width="49%"><font color="#FFFFFF"
                                                                                       face="Verdana"><b>Moving
                      To</b></font></td>
                  </tr>
                  <tr>
                    <td valign="top" width="49%">
                      <table border="0" align="center" width="389"
                             style="border-collapse: collapse;line-height:23px;margin-left: 5px" bordercolor="#111111">
                        <tbody>
                        <tr>
                          <td width="79" height="19"><font size="2" face="Arial" color="#0000FF">Name:<font
                              color="#FF0000">*</font></font></td>
                          <td width="256" colspan="3" height="19">
                            <input v-model="nameFrom"
                                   ref="nameFrom"
                                   :rules="nameRules" id="txtSNAME" type="text" name="SNAME" size="30"
                                   style="background-color: #FFFFCC; font-size:9pt;width: 95%;" value="" tabindex="1"
                                   onload="window.btnSNAME.focus()"></td>
                        </tr>
                        <tr>
                          <td width="79" height="21"><font size="2" face="Arial">Address:</font></td>
                          <td width="256" colspan="3" height="21">
                            <input id="addressFrom"
                                   :rules="[v=> !!v || 'Enter Address']"
                                   ref="addressFrom"
                                   v-model="addressFrom" type="text" name="SADD1" size="30" value="" tabindex="2"
                                   style="font-size: 9pt;width: 95%;"></td>
                        </tr>
                        <tr>
                          <td width="79" height="19"><font face="Arial" size="2">Location:</font></td>
                          <td width="130" height="19">
                            <select
                                v-model="locationFrom" size="1" name="SLEVEL" tabindex="4"
                                style="font-size: 9pt;width: 80%">
                              <option selected value=""></option>
                              <option>House</option>
                              <option>Townhouse</option>
                              <option>Apartment</option>
                              <option>Condo</option>
                              <option>Storage</option>
                              <option>Mobile Home</option>
                              <option>Garage</option>
                              <option>Warehouse</option>
                              <option>Office</option>
                            </select></td>
                          <td width="42" height="19"><font face="Arial" size="2">Level:</font></td>
                          <td width="130" height="19">
                            <select v-model="levelFrom" size="1" name="SSUBLEVEL" tabindex="4"
                                    style="font-size: 9pt;width: 80%">
                              <option selected value=""></option>
                              <option>Ground</option>
                              <option>Elevator</option>
                              <option>Stairs</option>
                              <option>Basement</option>
                            </select>
                          </td>
                        </tr>
                        <tr>
                          <td width="79" height="19"><font face="Arial" size="2">Floor:</font></td>
                          <td width="95" height="19"><input v-model="floorFrom" type="text" name="SFLOOR" size="2"
                                                            value="" maxlength="3" tabindex="5"
                                                            style="font-size: 9pt;width: 20%;"></td>
                          <td width="42" height="19"><font face="Arial" size="1">APT. #</font></td>
                          <td width="115" height="19">
                            <input v-model="aptFrom" type="text" name="SAPT" size="2" value="" tabindex="6"
                                   style="font-size: 9pt;width: 20%;"></td>
                        </tr>

                        <tr>
                          <td width="79" height="19"><font size="2" face="Arial" color="#0000FF">Phone:</font><font
                              color="#FF0000">*</font></td>
                          <td width="256" colspan="3" height="19">
                            <input v-model="phoneFrom"
                                   type="text" name="STELH" size="25"
                                   style="background-color: #FFFFCC; font-size:9pt" value="" tabindex="11"></td>
                        </tr>
                        <tr>
                          <td width="79" height="19"><font face="Arial" size="2">Phone:</font></td>
                          <td width="256" colspan="3" height="19">
                            <input v-model="phoneFrom2"
                                   type="text" name="STELO" size="25" value="" tabindex="12"
                                   style="font-size: 9pt"></td>
                        </tr>
                        <tr>
                          <td width="79" height="19"><font size="2" face="Arial" color="#0000FF">Email:</font><font
                              color="#FF0000">*</font></td>
                          <td width="256" colspan="3" height="19">
                            <input v-model="email" type="text" name="EMAIL" size="25" value="" tabindex="13"
                                   style="background-color: #FFFFCC; font-size:9pt"></td>
                        </tr>
                        </tbody>
                      </table>
                    </td>
                    <td valign="top" width="49%">
                      <table border="0" align="center" width="390" cellspacing="0"
                             style="border-collapse: collapse;line-height:23px;margin-left: 5px">
                        <tbody>
                        <tr>
                          <td width="84" height="19"><font size="2" face="Arial" color="#000000">Name:</font></td>
                          <td width="252" colspan="3" height="19">
                            <input v-model="nameTo" type="text" name="RNAME" size="30" value="" tabindex="14"
                                   style="font-size: 9pt;width: 95%;"></td>
                        </tr>
                        <tr>
                          <td width="84" height="19"><font size="2" face="Arial" color="#000000">Address:</font></td>
                          <td width="252" colspan="3" height="19">
                            <input id="addressTo"
                                   ref="addressTo"
                                   v-model="addressTo" type="text" name="RADD1" size="30" value="" tabindex="15"
                                   style="font-size: 9pt;width: 95%;"></td>
                        </tr>
                        <tr>
                          <td width="84" height="19"><font face="Arial" size="2">Location:</font></td>
                          <td width="91" height="19">
                            <select v-model="locationTo" size="1" name="RLEVEL" tabindex="17" style="font-size: 9pt">
                              <option selected value=""></option>
                              <option>House</option>
                              <option>Townhouse</option>
                              <option>Apartment</option>
                              <option>Condo</option>
                              <option>Storage</option>
                              <option>Mobile Home</option>
                              <option>Garage</option>
                              <option>Warehouse</option>
                              <option>Office</option>
                            </select></td>
                          <td width="45" height="19"><font face="Arial" size="2">Level:</font></td>
                          <td width="112" height="19">
                            <select v-model="levelTo" size="1" name="RSUBLEVEL" tabindex="4" style="font-size: 9pt">
                              <option selected=""></option>
                              <option>Ground</option>
                              <option>Elevator</option>
                              <option>Stairs</option>
                              <option>Basement</option>
                            </select>
                          </td>
                        </tr>
                        <tr>
                          <td width="84" height="19"><font face="Arial" size="2">Floor:</font></td>
                          <td width="91" height="19">
                            <input v-model="floorTo" type="text" name="RFLOOR" size="2" value="" maxlength="3"
                                   tabindex="18" style="font-size: 9pt"></td>
                          <td width="45" height="19"><font face="Arial" size="1">APT. #</font></td>
                          <td width="112" height="19">
                            <input v-model="aptTo" type="text" name="RAPT" size="2" value="" tabindex="19"
                                   style="font-size: 9pt"></td>
                        </tr>

                        <tr>
                          <td width="84" height="19"><font size="2" face="Arial" color="#0000FF">Cell Phone:</font></td>
                          <td width="252" colspan="3" height="19">
                            <input v-model="phoneTo"
                                   type="text" name="RTELH" size="25" value="" tabindex="24"
                                   style="font-size: 9pt"></td>
                        </tr>
                        <tr>
                          <td width="84" height="19"><font face="Arial" size="2">Fax:</font></td>
                          <td width="252" colspan="3" height="19">
                            <input v-model="fax"
                                   type="text" name="SFAX" size="25" value="" tabindex="26"
                                   style="font-size: 9pt"></td>
                        </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                  </tbody>
                </table>
                <br>
                <table border="1" width="98%" cellspacing="0" align="center"
                       style="border-collapse: collapse;margin-left: 5px" bordercolor="#CCCCCC">
                  <tbody>
                  <tr>
                    <td valign="top" width="67%">
                      <table border="0" width="100%" align="center" cellspacing="0"
                             style="border-collapse: collapse;line-height:30px;margin-left: 5px" bordercolor="#111111"
                             cellpadding="0">


                        <tbody>
                        <tr>
                          <td width="38%"><font face="Arial" size="2" color="#0000FF">Expected Move Date</font><font
                              color="#FF0000">:*</font></td>
                          <td width="30%">
                            <v-menu
                                ref="menu"
                                v-model="menu"
                                :close-on-content-click="true"
                                transition="scale-transition"
                                offset-y
                                min-width="290px"
                            >
                              <template v-slot:activator="{ on, attrs }">
                                <input v-bind="attrs"
                                       v-on="on" v-model="editedDate" type="text" autocomplete="off" id="Date1"
                                       name="LBOOKDTE" size="13" value=""
                                       style="background-color:#FFFFCC;text-align:center;font-weight:bold;"
                                       tabindex="28"
                                       class="hasDatepicker">
                              </template>
                              <v-date-picker
                                  v-model="datepicker"
                                  color="primary"
                                  no-title
                                  ref="datepicker"
                                  scrollable
                              >
                              </v-date-picker>
                            </v-menu>


                          </td>
                          <td width="27%"><font face="Arial" size="2">Time:
                            <select v-model="arrivalTime"
                                    style="cursor:pointer; font-size:9pt">
                              <option value=""></option>
                              <option>7:00 AM</option>
                              <option>8:00 AM</option>
                              <option>9:00 AM</option>
                              <option>10:00 AM</option>
                              <option>11:00 AM</option>
                              <option>12:00 AM</option>
                              <option>1:00 PM</option>
                              <option>2:00 PM</option>
                              <option>3:00 PM</option>
                              <option>4:00 PM</option>
                              <option>5:00 PM</option>
                              <option>6:00 PM</option>
                              <option>7:00 PM</option>
                              <option>8:00 PM</option>
                            </select>
                          </font></td>
                        </tr>


                        <tr>
                          <td width="38%"><font face="Arial" size="2" color="#0000FF">How did you hear about
                            us?</font><font color="#FF0000">*</font></td>
                          <td width="62%" colspan="2">
                            <select v-model="information" name="REF" style="background-color: #FFFFCC;cursor: pointer;font-size:9pt">
                              <option value=""></option>
                              <option>Google</option>
                              <option>Unpakt</option>
                              <option>HireaHelper</option>
                              <option>Other</option>
                            </select>
                          </td>
                        </tr>


                        <tr>
                          <td width="38%"><font face="Arial" size="2" color="#0000FF">Select Number of Rooms:</font>
                          </td>
                          <td width="62%" colspan="2">
                            <select v-model="rooms" size="1" name="ROOMS" tabindex="31" style="font-size:9pt;">
                              <option disabled  value="">&lt; Select Number of Rooms &gt;</option>

                              <option value="1">One Bedroom</option>
                              <option value="2">Two Bedrooms</option>
                              <option value="3">Three Bedrooms</option>
                              <option value="4">Four Bedrooms</option>
                              <option value="5">Five and more</option>
                            </select>
                          </td>
                        </tr>


                        </tbody>
                      </table>
                    </td>
                    <td valign="top" width="32%">
                      <table border="0" width="100%" cellspacing="1"
                             style="border-collapse: collapse;line-height:20px;font-family:Arial;font-size:10pt;margin-left: 5px"
                             bordercolor="#111111" cellpadding="2">


                        <tbody>
                        <tr>
                          <td><b>Type of Move: <font color="red">{{typeOfMove}}</font><br>
                            &nbsp;<input v-model="typeOfMove" type="radio" name="RC" value="Residential" checked="" tabindex="34" style="cursor: pointer">Residential<br>
                            &nbsp;<input v-model="typeOfMove" type="radio" name="RC" value="Commercial" tabindex="35" style="cursor: pointer">Commercial

                          </b></td>
                        </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                  </tbody>
                </table>
                <br>
                <table border="0" width="80%" align="center">
                  <tbody>
                  <tr>
                    <td width="100%"><b><font color="#FF0000"> </font></b></td>
                  </tr>
                  </tbody>
                </table>
              </form>
            </td>
          </tr>
          <tr>
            <td width="100%" align="center">
              <table border="0" width="70%" cellpadding="0" cellspacing="0"
                     style="border-collapse: collapse;margin-left: 5px" bordercolor="#111111">
                <tbody>
                <tr>
                  <td width="49%" align="center">
                    <input type="button" class="SUBOFF1" name="CONTINUEINV"
                           onmouseover="this.style.background='#993366'" onmouseout="this.style.background='#5A79A5'"
                           tabindex="36" value="Continue to Inventory"
                           style="background-color: rgb(90, 121, 165); background-position: initial initial; background-repeat: initial initial;">
                  </td>


                  <td width="49%" align="center">
                    <input type="button" class="SUBOFF" name="CONTINUECRG" onmouseover="this.style.background='#993366'"
                           onmouseout="this.style.background='#008000'" tabindex="37" value="Continue to Charges"></td>
                </tr>


                </tbody>
              </table>

              <br>
            </td>
          </tr>
          </tbody>
        </table>
        <!-- frame table -->
      </td>
    </tr>
    <tr>
      <td width="100%" bgcolor="#993366" colspan="2" height="19">&nbsp;</td>
    </tr>
    </tbody>
  </table>


</template>

<script>
import {mapGetters, mapMutations} from 'vuex'

export default {
  name: "entryFrom",
  data() {
    return {
      addrF: null,
      addrT: null,
      snackbar: false,
      text: 'Please fill in the field: Name, Address From, Address To, Email',
      timeout: 5000,
      autocompleteFrom: null,
      autocompleteTo: null,
      menu: null,
      times: ['7:00 AM', '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 AM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM'],
      informationItems: ['Google', 'Unpakt', 'HireaHelper', 'Other'],
      roomsItems: ['1', '2', '3', '4', '4+'],
      valid: false,
      nameRules: [
        (v) => !!v || "Name is required",
        (v) => v.length <= 30 || "Name must be less than 30 characters",
      ],
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+/.test(v) || "E-mail must be valid",
      ],

      showDatepicker: false,

    }
  },
  methods: {
    ...mapMutations(['setInfo', 'selectTab', 'clearStore']),
    formatDate(date) {
      if (!date) return null

      return new Date(date).toLocaleString("en-US", {
        month: "numeric",
        day: "numeric",
        year: "numeric",
      });
    },
  },
  computed: {
    ...mapGetters(
        ['nameFromInfo',
          'locationFromInfo',
          'levelFromInfo',
          'floorFromInfo',
          'aptFromInfo',
          'phoneFromInfo',
          'phoneFrom2Info',
          'emailInfo',
          'nameToInfo',
          'locationToInfo',
          'levelToInfo',
          'floorToInfo',
          'aptToInfo',
          'phoneToInfo',
          'faxInfo',
          'datepickerInfo',
          'informationInfo',
          'roomsInfo',
          'arrivalTimeInfo',
          'typeOfMoveInfo',
          'addressFromInfo',
          'addressToInfo',
          'stateToInfo'
        ]),
    editedDate() {
      return this.formatDate(this.datepicker)
    },
    addressFrom: {
      get() {
        return this.addressFromInfo
      },
      set(info) {
        this.addrF = info
      }
    },
    addressTo: {
      get() {
        return this.addressToInfo
      },
      set(info) {
        this.addrT = info
      }
    },
    nameFrom: {
      get() {
        return this.nameFromInfo
      },
      set(value) {
        this.setInfo({type: 'nameFrom', info: value})
      }
    },
    locationFrom: {
      get() {
        return this.locationFromInfo
      },
      set(value) {
        this.setInfo({type: 'locationFrom', info: value})
      }
    },
    levelFrom: {
      get() {
        return this.levelFromInfo
      },
      set(value) {
        this.setInfo({type: 'levelFrom', info: value})
      }
    },
    floorFrom: {
      get() {
        return this.floorFromInfo
      },
      set(value) {
        this.setInfo({type: 'floorFrom', info: value})
      }
    },
    aptFrom: {
      get() {
        return this.aptFromInfo
      },
      set(value) {
        this.setInfo({type: 'aptFrom', info: value})
      }
    },
    phoneFrom: {
      get() {
        return this.phoneFromInfo
      },
      set(value) {
        this.setInfo({type: 'phoneFrom', info: value})
      }
    },
    phoneFrom2: {
      get() {
        return this.phoneFrom2Info
      },
      set(value) {
        this.setInfo({type: 'phoneFrom2', info: value})
      }
    },
    email: {
      get() {
        return this.emailInfo
      },
      set(value) {
        this.setInfo({type: 'email', info: value})
      }
    },
    nameTo: {
      get() {
        return this.nameToInfo
      },
      set(value) {
        this.setInfo({type: 'nameTo', info: value})
      }
    },
    locationTo: {
      get() {
        return this.locationToInfo
      },
      set(value) {
        this.setInfo({type: 'locationTo', info: value})
      }
    },
    levelTo: {
      get() {
        return this.levelToInfo
      },
      set(value) {
        this.setInfo({type: 'levelTo', info: value})
      }
    },
    floorTo: {
      get() {
        return this.floorToInfo
      },
      set(value) {
        this.setInfo({type: 'floorTo', info: value})
      }
    },
    aptTo: {
      get() {
        return this.aptToInfo
      },
      set(value) {
        this.setInfo({type: 'aptTo', info: value})
      }
    },
    phoneTo: {
      get() {
        return this.phoneToInfo
      },
      set(value) {
        this.setInfo({type: 'phoneTo', info: value})
      }
    },
    fax: {
      get() {
        return this.faxInfo
      },
      set(value) {
        this.setInfo({type: 'fax', info: value})
      }
    },
    datepicker: {
      get() {
        let date = this.datepickerInfo
        if (!date) return null

        const [month, day, year] = date.split('/')
        return `${year}-${month}-${day}`
      },
      set(value) {
        this.setInfo({type: 'datepicker', info: this.formatDate(value)})
      }
    },
    information: {
      get() {
        return this.informationInfo
      },
      set(value) {
        this.setInfo({type: 'information', info: value})
      }
    },
    rooms: {
      get() {
        return this.roomsInfo
      },
      set(value) {
        this.setInfo({type: 'rooms', info: value})
      }
    },
    arrivalTime: {
      get() {
        return this.arrivalTimeInfo
      },
      set(value) {
        this.setInfo({type: 'arrivalTime', info: value})
      }
    },
    typeOfMove: {
      get() {
        return this.typeOfMoveInfo
      },
      set(value) {
        this.setInfo({type: 'typeOfMove', info: value})
      }
    },
  },
  mounted() {

    let options = {
      componentRestrictions: {
        country: "us",
      },
    }
// eslint-disable-next-line no-undef
    this.autocompleteFrom = new google.maps.places.Autocomplete(
        document.getElementById("addressFrom"),
        {types: ["geocode"], options},
    );
    this.autocompleteFrom.addListener('place_changed', () => {
      let place = this.autocompleteFrom.getPlace()
      this.$refs.addressFrom.value = place.formatted_address
      this.setInfo({type: 'addressFrom', info: place.formatted_address})
    })
    // eslint-disable-next-line no-undef
    this.autocompleteTo = new google.maps.places.Autocomplete(
        document.getElementById("addressTo"),
        {types: ["geocode"], options},
    );
    this.autocompleteTo.addListener('place_changed', () => {
      let place = this.autocompleteTo.getPlace()
      this.$refs.addressTo.value = place.formatted_address
      place.address_components.forEach(value => {
        if (value.types.includes("administrative_area_level_1")) {
          this.setInfo({type: 'stateTo', info: value.short_name})
        }
      })
      this.setInfo({type: 'addressTo', info: place.formatted_address})
    })
  },
}
</script>

<style scoped>
input {
  -webkit-writing-mode: horizontal-tb !important;
  text-rendering: auto;
  letter-spacing: normal;
  word-spacing: normal;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  display: inline-block;
  text-align: start;
  appearance: auto;
  -webkit-rtl-ordering: logical;
  cursor: text;
  margin: 0em;
  font: 400 13.3333px Arial;
  padding: 1px 2px;
  border-width: 2px;
  border-style: inset;
  border-image: initial;
}

select {
  border: 1px solid grey;
  border-radius: 2px;
  appearance: auto;
}

</style>