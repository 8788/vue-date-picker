<style>
.demo > * {
  margin-right: 10px;
}
</style>

<template>
  <div class="demo">
    <datepicker :readonly="true" format="YYYY-MM-DD" name="date1"></datepicker>
    <datepicker value="2018-9-5" format="YYYY-M-D" name="date2" :input-attr="{ 'data-test': 'value' }"></datepicker>
    <datepicker :readonly="true" format="MMM/D/YYYY" name="date3" :disabled-date="disabledDate"></datepicker>
  </div>
</template>

<script>
import datepicker from '../src/vue-date-picker.vue'

export default {
  components: {
    datepicker
  },
  methods: {
    disabledDate (date) {
      return date.getTime() < Date.now()
    }
  }
}
</script>
