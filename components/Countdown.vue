<script setup lang="ts">
import { Ref } from "vue"
import intervalToDuration from "date-fns/intervalToDuration"

const months: Ref<number> = ref(0)
const days: Ref<number> = ref(0)
const hours: Ref<number> = ref(0)
const minutes: Ref<number> = ref(0)

const getDifference = (): void => {
  const difference: Duration = intervalToDuration({
    start: new Date(),
    end: new Date(2022, 11, 28, 11)
  });

  months.value = difference.months
  days.value = difference.days
  hours.value = difference.hours
  minutes.value = difference.minutes
}

onMounted(() => {
  getDifference();
  setInterval(() => {
    getDifference();
  }, 60000)
})
</script>

<template>
  <section class="simply-countdown simply-countdown-one">
    <div class="simply-section simply-days-section">
      <div><span class="simply-amount">{{months}}</span><span class="simply-word">mesi</span></div>
    </div>
    <div class="simply-section simply-days-section">
      <div><span class="simply-amount">{{days}}</span><span class="simply-word">giorni</span></div>
    </div>
    <div class="simply-section simply-days-section">
      <div><span class="simply-amount">{{hours}}</span><span class="simply-word">ore</span></div>
    </div>
    <!-- <div class="simply-section simply-days-section">
      <div><span class="simply-amount">{{minutes}}</span><span class="simply-word">minuti</span></div>
    </div> -->
  </section>
</template>

<style lang="scss">
@import "assets/sass/overrides.scss";


.simply-countdown {
  margin-bottom: 2em;
}

.simply-countdown>.simply-section {
  /* coutndown blocks */
  display: inline-block;
  width: 100px;
  height: 100px;
  background: rgba($brand-primary, .5);
  margin: 0 4px;
  @include border-radius(50%);
  position: relative;

  animation: pulse 1s ease infinite,
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.05);
  }

  100% {
    transform: scale(1);
  }
}

.simply-countdown>.simply-section>div {
  /* countdown block inner div */
  display: table-cell;
  vertical-align: middle;
  height: 100px;
  width: 100px;
}

.simply-countdown>.simply-section .simply-amount,
.simply-countdown>.simply-section .simply-word {
  display: block;
  color: rgba($brand-white, 1);
  /* amounts and words */
}

.simply-countdown>.simply-section .simply-amount {
  font-size: 30px;
  /* amounts */
}

.simply-countdown>.simply-section .simply-word {
  color: rgba($brand-white, .7);
  text-transform: uppercase;
  font-size: 12px;
  /* words */
}
</style>