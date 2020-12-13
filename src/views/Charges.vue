<template>
  <div class="charges--container">
    <table border="0" align="center"
           style="border-collapse: collapse;margin: 0 auto;background-repeat: repeat;margin-top: 10px" width="800"
           height="50"
           background="/img/bgup.gif">
      <tbody>
      <tr style="text-align: center">
        <td @click="$router.push('/new')" width="119" class="TDNAV" height="25">Entry
          Form
        </td>


        <td width="14" class="TDNAV" height="25">|</td>
        <td @click="$router.push('/inventory')" width="120" class="TDNAV" height="25">Inventory
        </td>


        <td width="14" class="TDNAV" height="25">|</td>
        <td width="189" class="TDNAV" @click="openModal({item:{data:parametersData,price:JSON.parse(order.prices),'№':order.id},id:order.id})"
            height="25">Printed Estimate
        </td>
        <td width="16" class="TDNAV" height="25">|</td>
        <td @click="$router.push('/charges')" width="106" class="TDNAV" height="25">Charges
        </td>


      </tr>
      <tr>
        <td width="100%" height="25" colspan="15">

        </td>
      </tr>
      </tbody>
    </table>
    <table border="0" cellpadding="0" cellspacing="0" style="border-collapse: collapse;margin-top: 15px"
           bordercolor="#111111"
           width="850" align="center">
      <tbody>
      <tr>
        <td width="850">
          <div class="tabberlive">
            <ul class="tabbernav">
              <li class="tabberactive"><a href="" title="Long Distance Charges">{{ movingTypeInfo }}</a></li>
            </ul><!--TAB 1-->
            <div class="tabbertab " title="">
              <table border="0" cellpadding="0" cellspacing="0" style="border-collapse: collapse;margin: 0 auto;"
                     bordercolor="#111111"
                     width="850" align="center">
                <tbody>
                <tr>
                  <td width="850" height="23">
                    <table border="0" bgcolor="#008000" height="23" style="border-collapse: collapse"
                           bordercolor="#111111" width="850">
                      <tbody>
                      <tr>
                        <td width="180"><font face="Verdana" color="#FFFF00"><b> </b></font></td>
                        <td width="378" align="CENTER" height="20"><font size="4" color="#FFFFFF"
                                                                         face="Verdana"><b>{{
                            movingTypeInfo
                          }}</b></font>
                        </td>
                        <td width="186" align="right"><font face="Verdana" color="#FFFF00"><b></b></font>&nbsp;</td>
                      </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td width="850" valign="top" bgcolor="#FFFFFF">
                    <table border="0" cellpadding="0" cellspacing="0" style="border-collapse: collapse"
                           bordercolor="#111111" width="100%">
                      <tbody>
                      <tr>
                        <td width="100%" valign="top">
                          <form name="theForm" method="post"><br>
                            <table border="0" cellpadding="0" cellspacing="0" style="border-collapse: collapse"
                                   bordercolor="#111111" width="100%">
                              <tbody>
                              <tr>
                                <td width="66%" valign="top" align="center">
                                  <table border="1" align="center" cellpadding="0" cellspacing="0"
                                         style="border-collapse: collapse" bordercolor="#C0C0C0" width="98%">
                                    <tbody>
                                    <tr>
                                      <td width="50%"><b><font face="Verdana" size="2">View Map:</font> <a
                                          :href="'http://www.google.com/maps?q='+addressFromInfo+'&amp;sa=X&amp;oi=map&amp;ct=title'"
                                          target="_BLANK"><font face="Verdana" size="2">Google</font></a></b></td>
                                      <td width="50%"><b><font face="Verdana" size="2">View Map:</font> <a
                                          :href="'http://www.google.com/maps?q='+addressToInfo+'&amp;sa=X&amp;oi=map&amp;ct=title'"
                                          target="_BLANK"><font face="Verdana" size="2">Google</font></a></b></td>
                                    </tr>
                                    <tr>
                                      <td width="50%" align="center" bgcolor="#008000"><b><font face="Verdana"
                                                                                                color="FFFFFF">Moving
                                        From</font></b></td>
                                      <td width="50%" align="center" bgcolor="#008000"><b><font face="Verdana"
                                                                                                color="FFFFFF">Moving
                                        To</font></b></td>
                                    </tr>
                                    <tr>
                                      <td width="50%" bgcolor="#EFEFDF" valign="top">
                                        <!--Moving from -->


                                        <table border="0" cellpadding="0" cellspacing="1"
                                               style="border-collapse: collapse;line-height:20px;" bordercolor="#111111"
                                               width="100%" bgcolor="#EFEFDF">
                                          <tbody>
                                          <tr>
                                            <td width="100%" colspan="3"><font face="Verdana" color="#31557B"
                                                                               size="4"><b>{{ nameFromInfo }}</b></font>&nbsp;
                                            </td>
                                          </tr>
                                          <tr>
                                            <td width="100%" class="FROMTO" colspan="3">
                                              <span class="mb-0" v-if="locationFromInfo">{{ locationFromInfo }}/ </span>
                                              <span class="mb-0" v-if="levelFromInfo">{{ levelFromInfo }}  </span>
                                              <span class="mb-0" v-if="floorFromInfo">Floor: {{
                                                  floorFromInfo
                                                }}, </span>
                                              <span class="mb-0" v-if="aptFromInfo">Apt: {{ aptFromInfo }}</span>
                                            </td>
                                          </tr>


                                          <tr ref="addressFrom">
                                            {{ parseAddress(addressFromInfo, 'addressFrom') }}
                                          </tr>


                                          <tr>
                                            <td width="100%" class="FROMTO" colspan="3">
                                              {{ phoneFromInfo }}
                                            </td>
                                          </tr>
                                          <tr v-if="phoneFrom2Info">
                                            <td width="100%" class="FROMTO" colspan="3">
                                              {{ phoneFrom2Info }}
                                            </td>
                                          </tr>

                                          </tbody>
                                        </table>
                                        <!--end Moving from -->
                                      </td>
                                      <td width="50%" bgcolor="#EFEFDF" valign="top">
                                        <!--Moving To -->


                                        <table border="0" cellpadding="0" cellspacing="1"
                                               style="border-collapse: collapse;line-height:20px;" bordercolor="#111111"
                                               width="100%" bgcolor="#EFEFDF">
                                          <tbody>
                                          <tr>
                                            <td width="100%" colspan="3"><font face="Verdana" color="#31557B"
                                                                               size="4"><b>{{ nameToInfo }}</b></font>&nbsp;
                                            </td>
                                          </tr>
                                          <tr>
                                            <td width="100%" class="FROMTO" colspan="3">
                                              <span class="mb-0" v-if="locationToInfo">{{ locationToInfo }}/ </span>
                                              <span class="mb-0" v-if="levelToInfo">{{ levelToInfo }}  </span>
                                              <span class="mb-0" v-if="floorToInfo">Floor: {{
                                                  floorToInfo
                                                }}, </span>
                                              <span class="mb-0" v-if="aptToInfo">Apt: {{ aptToInfo }}</span>
                                            </td>
                                          </tr>

                                          <tr ref="addressTo">
                                            {{ parseAddress(addressToInfo, "addressTo") }}
                                          </tr>
                                          <tr>
                                            <td width="100%" class="FROMTO" colspan="3">
                                              {{ phoneToInfo }}
                                            </td>
                                          </tr>
                                          <tr v-if="faxInfo">
                                            <td width="100%" class="FROMTO" colspan="3">
                                              Fax: {{ faxInfo }}
                                            </td>
                                          </tr>

                                          </tbody>
                                        </table>
                                        <!--end Moving To -->
                                      </td>
                                    </tr>
                                    <tr>
                                      <td style="cursor: pointer;" width="100%" bgcolor="#EFEFDF" colspan="2">


                                        &nbsp;<p href=""><font face="Verdana" @click="openModal({item:{data:parametersData,price:JSON.parse(order.prices),'№':order.id},id:order.id})"
                                                               size="2"><b>{{ emailInfo }}
                                        <img
                                            border="0" src="/img/email1.gif" alt="Email Center" width="18"
                                            height="11"></b></font></p>
                                        &nbsp;&nbsp;<font v-if="emailsSend" face="Arial" size="2"><b>2</b>&nbsp;emails
                                        sent</font>


                                      </td>
                                      </tr>


                                    <tr>
                                      <td width="100%" colspan="2">
                                        <table border="0" cellpadding="0" cellspacing="0"
                                               style="border-collapse: collapse" bgcolor="#FFFFFF" bordercolor="#111111"
                                               width="100%">
                                          <tbody>
                                          <tr style="font-family:Arial;font-size:10pt;">
                                            <td width="7%">
                                            </td>
                                            <td width="25%" valign="top">

                                            </td>
                                            <td width="33%" valign="top">

                                            </td>
                                            <td width="31%" valign="top">

                                            </td>
                                          </tr>
                                          </tbody>
                                        </table>
                                      </td>
                                    </tr>


                                    </tbody>
                                  </table>


                                  <table border="0" align="center" style="border-collapse: collapse"
                                         bordercolor="#111111" width="98%">
                                    <tbody>
                                    <tr>
                                      <td width="15%" align="center">
                                        <a
                                            target="_blank"
                                            :href="'https://www.google.com/maps/dir/' + addressFromInfo + '/' + addressToInfo"
                                        >
                                          <img border="0" src="/img/google-map.gif" style="cursor:pointer;"
                                               alt="Google Direction" width="78" height="26">
                                        </a>
                                      </td>
                                      <td width="22%" align="center">
                                        <input type="button" class="SUBMIT1" name="btnDir" @click="addExtraStop"
                                               style="background-color: #A54939;" value="Extra Stop/Notes"></td>
                                      <td width="19%" align="center"><input type="button" class="SUBMIT" name="SUBMIT_1"
                                                                            @click="updateOrder()"
                                                                            style="background-color: #7B96B5;"
                                                                            value="Submit Charges"></td>
                                      <td width="12%" align="center">

                                      </td>
                                    </tr>
                                    </tbody>
                                  </table>
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
                                          <v-btn color="error" text @click="dialog = false"> Cancel</v-btn>
                                          <v-btn color="primary" text @click="saveExtraStop"> Save</v-btn>
                                        </v-card-actions>
                                      </v-card>
                                    </v-dialog>
                                  </div>

                                  <table border="1" width="98%" cellspacing="0" bordercolor="#CCCCCC"
                                         style="border-collapse: collapse">


                                    <tbody>
                                    <tr v-if="movingTypeInfo === 'Local Moving'">
                                      <td width="22%" height="19" class="TD6">Labor:
                                        <select v-model="vansLabor" size="1" name="LVAN">
                                          <option value="1" selected="">1</option>
                                          <option>0</option>
                                          <option>1</option>
                                          <option>2</option>
                                          <option>3</option>
                                          <option>4</option>
                                          <option>5</option>
                                          <option>6</option>
                                          <option>7</option>
                                          <option>8</option>
                                          <option>9</option>
                                          <option>10</option>
                                        </select> Van
                                      </td>
                                      <td width="22%" height="19" class="TD6">
                                        <select v-model="workersLabor" size="1" name="LMEN">
                                          <option value="2" selected="">2</option>
                                          <option>0</option>
                                          <option>1</option>
                                          <option>2</option>
                                          <option>3</option>
                                          <option>4</option>
                                          <option>5</option>
                                          <option>6</option>
                                          <option>7</option>
                                          <option>8</option>
                                          <option>9</option>
                                          <option>10</option>
                                          <option>11</option>
                                          <option>12</option>
                                          <option>13</option>
                                          <option>14</option>
                                          <option>15</option>
                                        </select> Workers
                                      </td>
                                      <td width="17%" height="19" class="TD6">
                                        <input v-model="hrsLabor" name="LHRS" size="3" value="2.00"
                                               style="background-color: #FFFFCC;text-align: CENTER;"> <font
                                          size="1">hrs</font></td>
                                      <td width="20%" height="19" class="TD6">
                                        <input v-model="perHrsLabor" name="LPERHRS" size="4" value="115.00"
                                               style="text-align: CENTER;"> <font size="1">per hrs</font></td>
                                      <td width="12%" height="19" align="right"><font size="2" face="Verdana"
                                                                                      color="#008000"><b>{{
                                          hrsLabor * perHrsLabor
                                        }}</b></font></td>
                                    </tr>
                                    <tr v-else>
                                      <td width="20%" height="19" class="TD6">
                                        Initial Price:
                                      </td>
                                      <td width="22%" class="TD6">
                                        <input v-model="volume" type="text" name="CFLBS"
                                               style="text-align: center; color: #008000;" size="4">
                                        <b><font face="Verdana" size="1">cf</font></b>
                                      </td>
                                      <td width="42%" height="19" class="TD6" colspan="2">
                                        <input v-model="costByVolume" type="text" name="I1PERCFLBS"
                                               style="text-align: center; color: #008000;" size="3">
                                        per cf
                                      </td>
                                      <td width="13%" height="19" align="right"><input type="text"
                                                                                       v-model="initialPrice"
                                                                                       name="I1TOTAL" size="7"
                                                                                       style="text-align: Right; color:#008000">

                                      </td>
                                    </tr>
                                    <tr v-if="movingTypeInfo === 'Local Moving'">
                                      <td width="22%" height="19" class="TD6">Travel:
                                        <select v-model="vansTravel" size="1" name="FTVAN">
                                          <option value="1" selected="">1</option>
                                          <option>0</option>
                                          <option>1</option>
                                          <option>2</option>
                                          <option>3</option>
                                          <option>4</option>
                                          <option>5</option>
                                          <option>6</option>
                                          <option>7</option>
                                          <option>8</option>
                                          <option>9</option>
                                          <option>10</option>
                                        </select> Van
                                      </td>
                                      <td width="22%" height="19" class="TD6">
                                        <select v-model="workersTravel" size="1" name="FTMEN">
                                          <option value="2" selected="">2</option>
                                          <option>0</option>
                                          <option>1</option>
                                          <option>2</option>
                                          <option>3</option>
                                          <option>4</option>
                                          <option>5</option>
                                          <option>6</option>
                                          <option>7</option>
                                          <option>8</option>
                                          <option>9</option>
                                          <option>10</option>
                                          <option>11</option>
                                          <option>12</option>
                                          <option>13</option>
                                          <option>14</option>
                                          <option>15</option>
                                        </select> Workers
                                      </td>
                                      <td width="17%" height="19" class="TD6">
                                        <input v-model="hrsTravel" name="FTHRS" size="3" value="1.00"
                                               style="background-color: #FFFFCC;text-align: CENTER;"> <font
                                          size="1">hrs</font></td>
                                      <td width="20%" height="19" class="TD6">
                                        <input v-model="perHrsTravel" name="FTPERHRS" size="4" value="115.00"
                                               style="text-align: CENTER;"> <font size="1">per hrs</font></td>
                                      <td width="12%" height="19" align="right"><font size="2" face="Verdana"
                                                                                      color="#008000"><b>{{
                                          hrsTravel * perHrsTravel
                                        }}</b></font></td>
                                    </tr>
                                    <tr v-else>
                                      <td width="99%" height="17" class="TD6" colspan="4">Fuel Surcharge:
                                        <input v-model="fuelCharge" type="text" name="DIESELP" size="2" value="0.00"
                                               style="text-align: right"><b>%</b></td>
                                      <td width="1%" align="RIGHT" height="17"><b><font face="Verdana" size="2"
                                                                                        color="#008000">{{ (initialPrice * (fuelCharge / 100)).toFixed(2) }}</font></b>
                                      </td>
                                    </tr>

                                    <tr v-if="movingTypeInfo === 'Local Moving'">
                                      <td width="78%" height="19" class="TD6" colspan="4">Fuel &amp; Mileage:</td>
                                      <td width="13%" height="19" align="right"><input v-model="fuelMile" type="text"
                                                                                       name="OTOTAL" size="7"
                                                                                       value="0.00"
                                                                                       style="text-align: Right; color:#008000">
                                      </td>
                                    </tr>


                                    <tr>
                                      <td width="78%" height="19" class="TD6" colspan="4">Others:&nbsp;<input
                                          v-model="info" type="text" name="OTHERS" size="52" value=""></td>
                                      <td width="1%" height="19" align="right"><font face="Verdana">
                                        <input v-model="infoPrice" type="text" name="OTHERSAMT" size="7" value="0.00"
                                               style="text-align: Right; color:#008000"></font></td>
                                    </tr>
                                    <tr>
                                      <td width="78%" height="19" class="TD6" colspan="4">Others:&nbsp;<input
                                          v-model="info2" type="text" name="OTHERS1" size="52" value=""></td>
                                      <td width="1%" height="19" align="right"><font face="Verdana">
                                        <input v-model="infoPrice2" type="text" name="OTHERS1AMT" size="7" value="0.00"
                                               style="text-align: Right; color:#008000"></font></td>
                                    </tr>
                                    <tr>
                                      <td width="78%" height="16" class="TD6" colspan="4">Others:&nbsp;<input
                                          v-model="info3" type="text" name="OTHERS2" size="52" value=""></td>
                                      <td width="1%" height="16" align="right"><input v-model="infoPrice3" type="text"
                                                                                      name="OTHERS2AMT" size="7"
                                                                                      value="0.00"
                                                                                      style="text-align: Right; color:#008000">
                                      </td>
                                    </tr>
                                    <tr>
                                      <td width="78%" height="18" class="TD7" align="right" colspan="4">Subtotal:</td>
                                      <td width="1%" height="18" bgcolor="#F5F5F5" align="right">
                                        <b>{{ subTotalPrice }}</b></td>
                                    </tr>


                                    <tr>
                                      <td width="78%" height="16" class="TD6" colspan="4">Liable:&nbsp;<input
                                          v-model="liable" type="text" name="INS" size="52" value=""></td>
                                      <td width="1%" height="16" align="right"><input v-model="liablePrice" type="text"
                                                                                      name="INSAMT" size="7"
                                                                                      value="0.00"
                                                                                      style="text-align: Right; color:#008000">
                                      </td>
                                    </tr>


                                    <tr>
                                      <td width="78%" height="16" class="TD6" colspan="4">Discount: <input
                                          v-model="discount" type="text" name="DISCTXT" size="50" value=""></td>
                                      <td width="1%" height="16" align="right"><input v-model="discountPrice"
                                                                                      name="DISCOUNT" size="7"
                                                                                      value="10.00"
                                                                                      style="text-align: Right; color:#FF0000">
                                      </td>
                                    </tr>
                                    <tr>
                                      <td width="78%" height="14" colspan="4"><b><font face="Verdana">Total
                                        Estimate</font></b></td>
                                      <td width="1%" height="14" bgcolor="#F5F5F5" align="right"><font
                                          size="4"><b>{{ totalPrice }}</b></font></td>
                                    </tr>


                                    <!--BUDGETVAN enter acttotal -->


                                    <!--end BUDGETVAN enter acttotal -->


                                    </tbody>
                                  </table>
                                  <!---Pricing Finish Here-->

                                </td>
                                <td width="34%" valign="top">
                                  <div align="center">
                                    <center>
                                      <table border="0" cellpadding="2"
                                             style="border-collapse: collapse;line-height:20px;" bgcolor="#EFEFDF"
                                             width="98%">


                                        <tbody>
                                        <tr>
                                          <td width="100%" class="TD2" colspan="4">Job No:&nbsp;<b><font color="#993366"
                                                                                                         size="3">{{
                                              getOrderNumber
                                            }}</font></b>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td width="100%" class="TD2" colspan="4">Status:&nbsp;<b><font color="#993366"
                                                                                                         size="3">{{
                                              status
                                            }}</font></b>&nbsp;
                                          </td>
                                        </tr>


                                        <tr>
                                          <td width="50%" bgcolor="#FFFFE0" class="TD6" colspan="2">

                                            <input v-model="volume" type="text" id="CFLBS1" name="CFLBS" value="290"
                                                   style="text-align: CENTER; color: #008000;" size="5">
                                            cf.
                                          </td>
                                          <td width="50%" bgcolor="#FFFFE0" class="TD6" colspan="2" v-if="volume">
                                            {{ volume * 7 }} lbs
                                          </td>
                                        </tr>
                                        <tr>
                                          <td width="100%" bgcolor="#FFFFE0" colspan="4"><b><font face="Verdana"
                                                                                                  size="1">

                                            Show Flat Rate: <input style="cursor: pointer" v-model="flatrate"
                                                                   type="checkbox" name="VIEWFLAT" value="ON">
                                          </font></b></td>
                                        </tr>
                                        <tr>
                                          <td width="100%" align="center" colspan="4"><font
                                              @click.stop="switchMovingType()" face="Verdana" style="cursor:pointer;"
                                              color="#0000FF">
                                            <b><u>Switch to {{ reverseMovingType }}</u></b></font>&nbsp;
                                          </td>
                                        </tr>


                                        <tr>
                                          <td width="100%" align="center" colspan="4">

                                            <input type="button" name="BOOK" @click="updateWithStatus()" class="SUBMIT"
                                                   style="background-color:#EF3821;margin: 10px 0;"
                                                   value="Book This Job">
                                            &nbsp;
                                          </td>
                                        </tr>


                                        <tr>
                                          <td width="46%" class="TD2" colspan="2">Binding Type:&nbsp;</td>
                                          <td width="54%" colspan="2">
                                            <select v-model="binding" size="1" name="BINDING">
                                              <option selected="" value="2">Non-Binding</option>
                                              <option value='None'>None</option>
                                              <option value='Binding'>Binding</option>
                                              <option value='Non-Binding'>Non-Binding</option>
                                            </select>
                                          </td>
                                        </tr>


                                        </tbody>
                                      </table>
                                    </center>
                                  </div>
                                  <br>
                                  <table border="0" align="center" cellpadding="2" style="border-collapse: collapse"
                                         bgcolor="#EFEFDF" width="98%">
                                    <tbody>
                                    <tr>
                                      <td width="30%" colspan="2"><b></b>

                                      </td>
                                      <td width="32%" class="TD2">Date</td>
                                      <td width="36%" class="TD2">Time</td>
                                    </tr>


                                    <tr>
                                      <td width="27%" bgcolor="#FF0000" class="TD2">
                                        <b><font color="#FFFFFF" size="2">Pick-Up</font></b>
                                      </td>
                                      <td width="34%" bgcolor="#FF0000" colspan="2">
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
                                                   v-on="on" v-model="editedDate" type="text" autocomplete="off"
                                                   id="Date1"
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
                                          >
                                          </v-date-picker>
                                        </v-menu>

                                      </td>
                                      <td width="37%" bgcolor="#FF0000"><select v-model="arrivalTime"
                                                                                style="cursor:pointer; font-size:9pt; background-color:#FFFFCC">
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
                                      </select></td>
                                    </tr>


                                    <tr>
                                      <td width="98%" align="center" bgcolor="#FFFFFF" colspan="4">&nbsp;<input
                                          type="button" class="SUBMIT" name="SUBMIT_2" @click="updateOrder()"
                                          style="background-color: #7B96B5;margin-top: 15px" value="Submit Charges">
                                      </td>
                                    </tr>


                                    </tbody>
                                  </table>


                                  <br>
                                  <table border="0" align="center" cellpadding="2" style="border-collapse: collapse"
                                         bgcolor="#EFEFDF" width="95%">


                                    <tbody>


                                    <tr>
                                      <td width="44%" class="TD2" colspan="2" height="14">Reference:</td>
                                      <td width="56%" class="TD2" height="14"><font
                                          color="#31557B">{{ informationInfo }} </font>&nbsp;
                                      </td>
                                    </tr>

                                    <tr>
                                      <td width="44%" class="TD2" colspan="2" height="12">Type:</td>
                                      <td width="56%" class="TD2" height="12"><font
                                          color="#993366">{{ typeOfMoveInfo }}&nbsp;</font></td>
                                    </tr>
                                    <tr>
                                      <td width="44%" class="TD2" colspan="2" height="14">Distance:&nbsp;</td>
                                      <td width="56%" class="TD2" height="14"><font color="#993366">{{ rangeInfo }}&nbsp;<font
                                          size="1">&nbsp;Miles</font></font></td>
                                    </tr>
                                    <tr>
                                      <td width="20%" class="TD2" height="14">Open:</td>
                                      <td width="80%" class="TD2" colspan="2" height="14">&nbsp;{{ estimate }}
                                      </td>
                                    </tr>


                                    <tr>
                                      <td width="100%" bgcolor="#FFFFFF" align="CENTER" colspan="3" height="52"><input
                                          type="button" class="SUBMIT" name="SUBMIT_3" @click="updateOrder()"
                                          style="background-color: #7B96B5;" value="Submit Charges"></td>
                                    </tr>


                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                              </tbody>
                            </table>
                            <table border="0" align="center" cellpadding="0" cellspacing="0"
                                   style="border-collapse: collapse" bordercolor="#111111" width="98%">
                              <tbody>
                              <tr>
                                <td width="100%" align="center" colspan="2"><font size="1">&nbsp;</font></td>
                              </tr>
                              <tr>
                                <td width="46%" align="center"><b><font
                                    style="font-family:Verdana;font-size:11pt;color:#000;">Add Free Text to
                                  Remarks</font></b></td>
                              </tr>
                              <tr>
                                <td width="46%" valign="top" align="center">
                                  <textarea v-model="infoText" rows="4" name="REM" cols="40"
                                            style="color: #FF0000;border: 1px solid #767676;"></textarea><br>
                                </td>

                              </tr>


                              </tbody>
                            </table>
                            <br>
                          </form>
                        </td>
                      </tr>
                      </tbody>
                    </table>
                    <!-- frame table -->
                  </td>
                </tr>
                <tr>
                  <td width="850" bgcolor="#FFFFFF">
                    <table border="0" align="center" style="border-collapse: collapse" bordercolor="#111111"
                           width="98%">
                      <tbody>
                      <tr>


                        <td width="20%" align="center"><input type="button" class="SUBMIT" name="SUBMIT_4"
                                                              @click="updateOrder()" style="background-color: #7B96B5;"
                                                              value="Submit Charges"></td>


                        <td width="20%" align="center"><input type="button" class="SUBMIT" name="B33"
                                                              @click="deleteOrder()"
                                                              style="background-color: #FFFF00; color:#0000FF"
                                                              value="Cancel Estimate"></td>


                        <td width="2%">&nbsp;</td>


                      </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td width="850" bgcolor="#993366">&nbsp;</td>
                </tr>
                <tr>
                  <td width="850" bgcolor="#EFEFDF">
                    <table border="0" width="98%" align="center" cellspacing="0" cellpadding="2"
                           style="border-collapse: collapse" bordercolor="#111111">
                      <tbody>
                      <tr>
                        <td width="100%" bgcolor="#008000" align="center"><font color="#FFFFFF" face="Verdana"><b>Article
                          List Volume By&nbsp;
                          <font color="#EFFFC6">Cu. Ft.</font></b>
                        </font></td>
                      </tr>
                      </tbody>
                    </table>
                    <table v-if="inventoryInfo" border="1" width="99%" align="center" cellspacing="0"
                           style="border-collapse: collapse"
                           bordercolor="#C0C0C0">
                      <thead>
                      <tr>
                        <th colspan="2">Item</th>
                        <th>QTY</th>
                        <th>CuFT</th>
                      </tr>
                      </thead>
                      <tbody>
                      <template
                          v-for="(room,name) in inventoryInfo"
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

                      <template v-if="Object.keys(specialInventory).length">
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
                            v-for="item in specialInventory"
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
                    <table v-else-if="roomsInfo" class="result-inventory result-inventory-entry">
                      <thead>
                      <tr>
                        <th>Item</th>
                        <th>QTY</th>
                        <th>Cu.FT</th>
                      </tr>
                      <tr>
                        <td>Bedroom/s</td>
                        <td>{{ roomsInfo }}</td>
                        <td>{{ volumeInfo }}</td>
                      </tr>
                      </thead>
                    </table>
                    <!--bottom table-->
                    <table border="0" cellpadding="0" cellspacing="0" style="border-collapse: collapse"
                           bordercolor="#111111" width="100%">
                      <tbody>
                      <tr>
                        <td width="100%" height="18">&nbsp;<font face="Arial" style="font-size: 9pt">Always Professional
                          Moving Company</font>
                        </td>
                      </tr>
                      </tbody>
                    </table>
                    <!--end bottom table-->
                  </td>
                </tr>

                </tbody>
              </table>
            </div>
            <modal-window/>

          </div>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import {mapActions, mapGetters, mapMutations} from "vuex";
import modalWindow from "@/components/modalWindow";
export default {
  name: "charges",
  data() {
    return {
      emailsList: false,
      sending: false,
      dialog: false,
      extraAutocomplete: null,
      extr: null,
      menu: null,
    };
  },
  components:{
    modalWindow
  },
  methods: {
    ...mapActions(["getEmails", 'loadOrder','openModal']),
    ...mapMutations(["setInfo",  "clearStore"]),
    parseAddress(address = "", ref) {
      let result = address.split(",", 3);
      setTimeout(() => {
        this.$refs[ref].innerHTML = `<td>${result[0]},${result[1]},<br><b>${result[2]}</b>`
      }, 1000)

    },
    switchMovingType() {
      if (this.movingTypeInfo == 'Local Moving') {
        this.setInfo({type: 'movingType', info: 'Long Distance'})
        return
      }
      if (this.movingTypeInfo == 'Long Distance') {
        this.setInfo({type: 'movingType', info: 'Local Moving'})
        return
      }
    },
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
            {types: ["geocode"], options}
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
    deleteOrder() {
      const handleImageUpload = () => {
        fetch('/php/removeOrder.php?id=' + this.order.id, {
          method: 'DELETE'
        })
            .then(response => {
              if (response.status == 200) {
                setTimeout(() => {
                  this.$router.push('/')
                }, 500)
              }
            })
            .catch(error => {
              console.error(error)
            })
      }
      handleImageUpload()
    },
    updateWithStatus() {
      this.setInfo({type: 'status', info: 'Accepted'})
      this.updateOrder()
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
          infoInfo: this.infoInfo,
          info2Info: this.info2Info,
          info3Info: this.info3Info,
          liablePriceInfo: this.liablePriceInfo,
          discountInfo: this.discountInfo,
          discountPriceInfo: this.discountPriceInfo,
          infoTextInfo: this.infoTextInfo,
          stateTo: this.stateToInfo,
          estimateDate: this.estimate,
          subTotalPrice: this.subTotalPriceInfo,
          inventory: this.inventoryInfo,
          specialInventory: this.specialInventory,
          binding: this.bindingInfo,
          flatrate: this.flatrateInfo,
          movingType: this.movingTypeInfo,
          longCost: this.longCostInfo,
          fuelCharge: this.fuelChargeInfo
        },
      };
      let prices = this.getPrices;
      let updateOrder = (obj, prices, order, name, email) => {
        fetch("/php/updateUserOrder.php", {
          method: "POST",
          body: JSON.stringify({obj, prices, order, name, email}),
        }).then((promise) => {
          if (promise.status !== 200) {
            console.error(promise.status);
          }
        });
      };
      updateOrder(
          obj,
          prices,
          this.orderName,
          this.nameFromInfo,
          this.emailInfo
      );
    },
    calculateSubtotalPrice() {
      if (this.movingTypeInfo === 'Local Moving') {
        let result =
            this.hrsTravel * this.perHrsTravel +
            +(this.hrsLabor * this.perHrsLabor) +
            +this.fuelMile +
            +this.infoPrice +
            +this.infoPrice2 +
            +this.infoPrice3;
        this.setInfo({type: "subTotalPrice", info: result});
        return result;
      } else {
        let result =
            this.initialPrice +
            +(this.initialPrice * (this.fuelCharge / 100)) +
            +this.infoPrice +
            +this.infoPrice2 +
            +this.infoPrice3;
        this.setInfo({type: "subTotalPrice", info: result});
        return result;
      }

    },
    formatDate(date) {
      if (!date) return null

      return new Date(date).toLocaleString("en-US", {
        month: "numeric",
        day: "numeric",
        year: "numeric",
      });
    },
  },
  mounted() {
    this.loadOrder(this.orderName)
    this.getEmails(this.orderName)
  },
  computed: {
    ...mapGetters([
      'infoInfo',
      'info2Info',
      'info3Info',
      'order',
      "orderName",
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
      "bindingInfo",
      'orderName',
      'getOrderNumber',
      'emailsSend',
      'flatrateInfo',
      'movingTypeInfo',
      'longCostInfo',
      'fuelChargeInfo','dataOrder','estimate'
    ]),
    editedDate() {
      return this.formatDate(this.datepicker)
    },
    reverseMovingType() {
      if (this.movingTypeInfo === 'Local Moving') {
        return 'Long Distance'
      }
      if (this.movingTypeInfo === 'Long Distance') {
        return 'Local Moving'
      }
      return ''
    },
    checkinputData() {
      return this.addressFromInfo && this.addressToInfo && this.nameFromInfo;
    },
    flatrate: {
      get() {
        return this.flatrateInfo
      },
      set(value) {
        this.setInfo({type: 'flatrate', info: value})
      }
    },
    info: {
      get() {
        return this.infoInfo
      },
      set(value) {
        this.setInfo({type: 'info', info: value})
      }
    },
    info2: {
      get() {
        return this.info2Info
      },
      set(value) {
        this.setInfo({type: 'info2', info: value})
      }
    },
    info3: {
      get() {
        return this.info3Info
      },
      set(value) {
        this.setInfo({type: 'info3', info: value})
      }
    },
    volume: {
      get() {
        return this.volumeInfo;
      },
      set(value) {
        this.setInfo({type: "volume", info: value});
      },
    },
    vansLabor: {
      get() {
        return this.vansLaborInfo;
      },
      set(value) {
        this.setInfo({type: "vansLabor", info: value});
      },
    },
    workersLabor: {
      get() {
        return this.workersLaborInfo;
      },
      set(value) {
        this.setInfo({type: "workersLabor", info: value});
      },
    },
    hrsLabor: {
      get() {
        return this.hrsLaborInfo;
      },
      set(value) {
        this.setInfo({type: "hrsLabor", info: value});
      },
    },
    perHrsLabor: {
      get() {
        return this.perHrsLaborInfo;
      },
      set(value) {
        this.setInfo({type: "perHrsLabor", info: value});
      },
    },
    vansTravel: {
      get() {
        return this.vansTravelInfo;
      },
      set(value) {
        this.setInfo({type: "vansTravel", info: value});
      },
    },
    workersTravel: {
      get() {
        return this.workersTravelInfo;
      },
      set(value) {
        this.setInfo({type: "workersTravel", info: value});
      },
    },
    hrsTravel: {
      get() {
        return this.hrsTravelInfo;
      },
      set(value) {
        this.setInfo({type: "hrsTravel", info: value});
      },
    },
    perHrsTravel: {
      get() {
        return this.perHrsTravelInfo;
      },
      set(value) {
        this.setInfo({type: "perHrsTravel", info: value});
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
        this.setInfo({type: "fuelMile", info: value});
      },
    },
    liable: {
      get() {
        return this.liableInfo;
      },
      set(value) {
        this.setInfo({type: "liable", info: value});
      },
    },
    liablePrice: {
      get() {
        return this.liablePriceInfo;
      },
      set(value) {
        this.setInfo({type: "liablePrice", info: value});
      },
    },
    discount: {
      get() {
        return this.discountInfo;
      },
      set(value) {
        this.setInfo({type: "discount", info: value});
      },
    },
    discountPrice: {
      get() {
        return this.discountPriceInfo;
      },
      set(value) {
        this.setInfo({type: "discountPrice", info: value});
      },
    },
    infoPrice: {
      get() {
        return this.infoPriceInfo;
      },
      set(value) {
        this.setInfo({type: "infoPrice", info: value});
      },
    },
    infoPrice2: {
      get() {
        return this.infoPrice2Info;
      },
      set(value) {
        this.setInfo({type: "infoPrice2", info: value});
      },
    },
    infoPrice3: {
      get() {
        return this.infoPrice3Info;
      },
      set(value) {
        this.setInfo({type: "infoPrice3", info: value});
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
        this.setInfo({type: "infoText", info: value});
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
        this.setInfo({type: "binding", info: value});
      },
    },
    arrivalTime: {
      get() {
        return this.arrivalTimeInfo
      },
      set(value) {
        this.setInfo({type: 'arrivalTime', info: value})
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
    costByVolume: {
      get() {
        if (this.longCostInfo) {
          return this.longCostInfo
        } else {
          this.setInfo({type: 'longCost', info: this.getPrices.costByVol})
          return this.getPrices.costByVol
        }
      },
      set(value) {
        this.setInfo({type: 'longCost', info: value})
      }

    },
    fuelCharge: {
      get() {
        return this.fuelChargeInfo
      },
      set(value) {
        this.setInfo({type: 'fuelCharge', info: value})
      }
    },
    initialPrice() {
      if (this.volume * this.costByVolume) {
        return this.volume * this.costByVolume
      }
      return 0
    },
    parametersData(){
      return {
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
          infoInfo: this.infoInfo,
          info2Info: this.info2Info,
          info3Info: this.info3Info,
          liablePriceInfo: this.liablePriceInfo,
          discountInfo: this.discountInfo,
          discountPriceInfo: this.discountPriceInfo,
          infoTextInfo: this.infoTextInfo,
          stateTo: this.stateToInfo,
          estimateDate: this.estimate,
          subTotalPrice: this.subTotalPriceInfo,
          inventory: this.inventoryInfo,
          specialInventory: this.specialInventory,
          binding: this.bindingInfo,
          flatrate: this.flatrateInfo,
          movingType: this.movingTypeInfo,
          longCost: this.longCostInfo,
          fuelCharge: this.fuelChargeInfo
        },
      };
    }
  },
};
</script>

<style scoped>
.charges--container {
  max-width: 875px;
  margin: 0 auto;
}

.TDNAV {
  color: #ffffff;
  font-weight: bold;
  cursor: pointer;
}

.tabberlive .tabbertabhide {
  display: none;
}

.tabber {
}

.tabberlive {
  margin-top: 0.1em;
  width: 857px;
}

ul.tabbernav {
  margin: 0;
  padding: 3px 0;
  border-bottom: 1px solid #FFFFFF;
  font-family: Verdana;
  font-size: 10pt;
  font-weight: 700;
}

ul.tabbernav li {
  list-style: none;
  margin: 0;
  display: inline;
}

ul.tabbernav li a {
  padding: 3px 0.5em;
  margin-left: 3px;
  border: 1px solid #FFFFFF;
  border-bottom: none;
  background: #FFFFFF;
  text-decoration: none;
}

ul.tabbernav li a:link {
  color: #0000FF;
}

ul.tabbernav li a:visited {
  color: #0000FF;
}

ul.tabbernav li a:hover {
  color: #000;
  background: #FFFFFF;
  border-color: #FFFFFF;
}

ul.tabbernav li.tabberactive a {
  background-color: #FFCF63;
  border-bottom: 1px solid #FFFFFF;
}

ul.tabbernav li.tabberactive a:hover {
  color: #000000;
  background: #FFFFFF;
  border-bottom: 1px solid #FFFFFF;
}

.tabberlive .tabbertab {
  border-left: 1px solid #FFFFFF;
  border-right: 1px solid #FFFFFF;
  border-bottom: 1px solid #FFFFFF;
  padding: 3px;
  border-top: 0px none;

}

.tabberlive .tabbertab h2 {
  display: none;
}

.tabberlive .tabbertab h3 {
  display: none;
}

.tabberlive#tab1 {
}

.tabberlive#tab2 {
}

.tabberlive#tab2 .tabbertab {
  height: 200px;
  overflow: auto;
}

.TDNAV:hover {
  color: #ff0000;
}

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

.SUBOFF {
  color: white;
  font-weight: bold;
  font-family: Arial;
  text-align: center;
  padding: 2px 5px;
  font-size: 10pt;
  cursor: pointer;
}

.TD2 {
  text-align: left;
  color: black;
  font-size: 9pt;
  font-family: Verdana;
  font-weight: bold;
}

.TD6 {
  color: #000000;
  font-size: 8pt;
  font-family: Verdana;
  font-weight: bold;
  text-align: left
}

.TD7 {
  color: #000000;
  font-size: 8pt;
  font-weight: bold;
  font-family: Verdana;
  text-align: right
}

.FROMTO {
  text-align: left;
  color: black;
  font-size: 10pt;
  font-family: Arial;
  font-weight: bold;
}

.SUBMIT {
  color: #FFFFFF;
  font-size: 10pt;
  font-weight: bold;
  font-family: Verdana;
  width: 130px;
  height: 25px;
  cursor: pointer;
}

.EXPORT1 {
  color: #FFFFFF;
  font-size: 10pt;
  font-weight: bold;
  font-family: Verdana;
  width: 70px;
  height: 25px;
  background-color: #008000;
  cursor: pointer;
}

.SUBMIT1 {
  color: #FFFFFF;
  font-size: 9pt;
  font-weight: bold;
  font-family: Verdana;
  cursor: pointer;
  width: 125px;
  height: 22px;
}

.DIRECTION {
  color: #FFFFFF;
  font-size: 9pt;
  font-weight: bold;
  font-family: Verdana;
  cursor: pointer;
  width: 90px;
  height: 22px;
}

.SUBOFF {
  color: white;
  font-weight: bold;
  font-family: Arial;
  text-align: center;
  width: 65px;
  height: 22px;
  background-color: #FF0000;
  font-size: 10pt;
  cursor: pointer;
}

.ACTLOG {
  color: white;
  font-weight: bold;
  font-family: Verdana;
  font-size: 10pt;
  text-align: center;
  width: 100px;
  height: 25px;
  background-color: #0075AD;
  cursor: pointer;
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