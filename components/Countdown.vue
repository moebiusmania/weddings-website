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
    end: new Date(2022, 11, 28, 12)
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