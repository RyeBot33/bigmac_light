<template>
  <div id="clock">
    <v-row>
      <v-col>
        <p class="date">{{ date }}</p>
      </v-col>
      <v-col>
        <p class="time">{{ time }}</p>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: "",
      time: "",
    };
  },
  mounted() {
    var that = this;
    var week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    setInterval(updateTime, 1000);
    updateTime();
    function updateTime() {
      var cd = new Date();
      that.time =
        zeroPadding(cd.getHours(), 2) +
        ":" +
        zeroPadding(cd.getMinutes(), 2) +
        ":" +
        zeroPadding(cd.getSeconds(), 2);
      that.date =
        zeroPadding(cd.getFullYear(), 4) +
        "-" +
        zeroPadding(cd.getMonth() + 1, 2) +
        "-" +
        zeroPadding(cd.getDate(), 2) +
        " " +
        week[cd.getDay()];
    }
    function zeroPadding(num, digit) {
      var zero = "";
      for (var i = 0; i < digit; i++) {
        zero += "0";
      }
      return (zero + num).slice(-digit);
    }
  },
};
</script>

<style>
/* p {
  margin: 0;
  padding: 0;
}
#clock {
  font-family: "Share Tech Mono", monospace;
  text-align: center;
  position: absolute;
  left: 75%;
  top: 2%;
  color: #071824;
  text-shadow: 0 0 10px rgb(230, 190, 10), 0 0 20px rgba(10, 175, 230, 0);
  .time {
    letter-spacing: 0.05em;
    font-size: 20px;
    // padding: 20px 25px;
  }
  .date {
    letter-spacing: 0.1em;
    font-size: 15px;
  }
  .text {
    letter-spacing: 0.1em;
    font-size: 18px;
    // padding: 20px 0 0;
  }
} */
</style>
