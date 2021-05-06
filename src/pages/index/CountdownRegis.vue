<template>
  <div>
    <div v-if="this.seconds > 0 || this.minutes > 0 || this.hours > 0 || this.days > 0">
      <!-- <div class="margin-bottom-1 text-muted font-14">CLOSE IN</div> -->
      <div class="margin-bottom-1 text-muted font-14">
        <!-- <div style="display: inline-block;"> -->
        <div style="display: inline-block;" v-show="this.days > 0">
          <div class="text-center">{{ days }} {{ this.days != 1 ? 'days' : 'day' }}</div>
        </div>

        <div style="display: inline-block;" v-if="this.hours > 0 && this.days === 0">
          <div class="text-center">{{ hours }} :</div>
          <!--<div class="text">Hours</div>-->
        </div>
        <div style="display: inline-block;" v-else-if="this.hours === 0 && this.days === 0">
          <div class="text-center">0 :</div>
          <!--<div class="text">Hours</div>-->
        </div>

        <div style="display: inline-block;" v-if="this.minutes > 0 && this.days === 0">
          <div class="text-center">{{ minutes }} :</div>
          <!--<div class="text">Minutes</div>-->
        </div>
        <div style="display: inline-block;" v-else-if="this.minutes === 0 && this.days === 0">
          <div class="text-center">0 :</div>
          <!--<div class="text">Minutes</div>-->
        </div>

        <div style="display: inline-block;" v-show="this.seconds >= 0 && this.days === 0">
          <div class="text-center">{{ seconds }}</div>
          <!--<div class="text">Seconds</div>-->
        </div>
        <!-- </div> -->
        <!-- <div style="display: inline-block;" v-else>
			    	<h5>{{timeout_msg}}</h5>
        </div>-->
      </div>
    </div>
    <div v-else>
      <div class="margin-bottom-1 text-white font-14">CLOSED</div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['start', 'end', 'timeout_msg'],
  data () {
    return {
      now: this.start,
      date: this.end
    }
  },
  mounted () {
    // this.ind_time = this.date_now;
    let timer = window.setInterval(() => {
      this.now++
      if (
        this.seconds < 0 &&
        this.minutes < 0 &&
        this.hours < 0 &&
        this.days < 0
      ) {
        window.clearInterval(timer)
      }
    }, 1000)
  },
  computed: {
    seconds () {
      return (this.date - this.now) % 60
    },

    minutes () {
      return Math.trunc((this.date - this.now) / 60) % 60
    },

    hours () {
      return Math.trunc((this.date - this.now) / 60 / 60) % 24
    },

    days () {
      return Math.trunc((this.date - this.now) / 60 / 60 / 24)
    }
  }
}
</script>