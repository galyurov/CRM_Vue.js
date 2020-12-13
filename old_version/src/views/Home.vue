<template>
  <div class="wrap--home">
    <table border="0" cellpadding="0" cellspacing="0" style="border-collapse: collapse" bordercolor="#111111"
           width="500" align="center">
      <tbody>
      <tr class="table-size-row">
        <td width="100%" height="14"><img src="/img/topBar.gif" width="100%" height="14"></td>
      </tr>
      <tr>
        <td width="100%" height="14" style="background-color: #008000">&nbsp;</td>
      </tr>
      <tr>
        <td width="100%" bgcolor="#FBFBFC">
          <!-- frame table -->
          <table border="0" align="center" cellpadding="0" cellspacing="0"
                 style="border-collapse:collapse;font-family:Verdana;" width="95%">
            <tbody>
            <tr>
              <td width="43%" style="line-height:25px;"><img style="padding-left: 15px" border="0"
                                                             src="/img/logo_order.png" width="126" height="37">
              </td>
              <td  width="58%" style="line-height:25px;padding-top: 10px" align="right"><b><font style="font-size:10pt;">Welcome <font
                  color="#0078D7">{{userName}}</font>&nbsp;<span :data-letters="letter"></span>
                <br>{{day}},&nbsp;{{date}}<br><font @click="logout()"
                                                      style="font-size:10pt;color:#0078D7;cursor:pointer;"><u>Log
                  Out</u></font></font></b></td>
            </tr>
            <tr>
              <td width="100%" height="35" colspan="2" align="center"><font face="Verdana" size="3"
                                                                            color="#000000"><b><u>Menu:</u></b></font>&nbsp;
              </td>
            </tr>
            </tbody>
          </table>
          <table border="0" align="center" style="border-collapse: collapse; margin: 0 auto;" bordercolor="#111111" width="65%">

            <tbody>
            <tr>
              <td width="10%" height="30" style="text-align: center"><img border="0" src="/img/n-point.gif" width="10"
                                                                          height="10"></td>
              <td  width="90%"  class="list--link" height="30"><a  target="_blank" href="/new" >New Estimate</a></td>
            </tr>

            <tr>
              <td width="10%" height="30" style="text-align: center"><img border="0" src="/img/n-point.gif" width="10"
                                                                          height="10"></td>
              <td  width="90%"  class="list--link" height="30"><a target="_blank" href="/calendar" >Calendar</a></td>
            </tr>

            </tbody>
          </table>
        </td>
      </tr>
      <tr>
        <td width="100%" bgcolor="#993366" height="15">&nbsp;<font size="2" color="white">CRM</font></td>
      </tr>
      <tr class="table-size-row">
        <td width="100%" bgcolor="#FFEFCC" align="center" height="10">
          <br>
        </td>
      </tr>
      <tr class="table-size-row">
        <td width="100%" height="15"><img src="/img/botBar.gif" width="100%" height="14"></td>
      </tr>
      </tbody>
    </table>
    <table border="0" width="500" align="center">
      <tbody>
      <tr>
        <td align="center"><p style="color: #ffffff"><b>©2020 Always Professional Moving Company. All rights
          reserved</b></p></td>
      </tr>
      </tbody>
    </table>
  </div>


</template>

<script>

export default {
  name: 'Home',
  data() {
    return {
      title: "Home",

    }
  },
  methods: {
    logout() {
      localStorage.clear()
      this.$store.state.auth = false
      this.$router.push('/auth?message=logout')
    },
  },
  created() {
    if (localStorage.apHash) {
      this.$store.state.auth = true
    }
  },
  computed:{
    userName(){
      let cookies = getCookie("apuser");
      function getCookie(name) {
        let matches = document.cookie.match(
            new RegExp(
                "(?:^|; )" +
                name.replace(/([.$?*|{}()[\]\\/+^])/g, "\\$1") +
                "=([^;]*)"
            )
        );
        return matches ? decodeURIComponent(matches[1]).replace("+", " ") : undefined;
      }
      return cookies
    },
    letter(){
      return this.userName.charAt(0)
    },
    date(){
      return new Date().toLocaleString("en-US", {
        month: "numeric",
        day: "numeric",
        year: "numeric",
      });
    },
    day() {
      let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];

      return days[new Date().getDay()];
    },
  }
}
</script>
<style>
.wrap--home {
  display: block;
  margin: 0 auto;
  width: 600px;
}

.table-size-row {
  height: 14px;
  line-height: 14px;
}
[data-letters]:before {
  content: attr(data-letters);
  display: inline-block;
  font-size: 1.5em;
  width: 1.9em;
  height: 1.9em;
  line-height: 1.9em;
  text-align: center;
  border-radius: 50%;
  background: #0078D7;
  color: white;
}
.list--link:hover{
  text-decoration: underline;
  cursor: pointer;
}
</style>
