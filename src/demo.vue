<style scoped>

</style>

<template>
    <datepicker :readonly="true" format="YYYY-MM-DD"></datepicker>
</template>

<script>
import datepicker from './datepicker.vue';

export default {
    components: { datepicker }
};
</script>

