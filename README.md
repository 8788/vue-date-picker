# vue-date-picker

[![npm version][npm-image]][npm-url] [![david deps][david-image]][david-url] [![npm license][license-image]][download-url]

datepicker component for Vue 2.0

# screenshot

![screenshot](screenshot.png)

# Instllation

```bash
$ npm install vue-date-picker --save
```

# Usage
```html
<template>
  <div class="demo">
    <datepicker :readonly="true" format="YYYY-MM-DD" name="date1"></datepicker>
    <datepicker value="2018-9-5" format="YYYY-M-D" name="date2"></datepicker>
    <datepicker :readonly="true" format="MMM/D/YYYY" name="date3"></datepicker>
  </div>
</template>

<script>
import datepicker from 'datepicker'

export default {
  components: { datepicker }
}
</script>
```

# License

[The MIT License](http://opensource.org/licenses/MIT)

[npm-image]: https://img.shields.io/npm/v/vue-date-picker.svg?style=flat-square
[npm-url]: https://npmjs.org/package/vue-date-picker
[david-image]: https://img.shields.io/david/8788/vue-date-picker.svg?style=flat-square
[david-url]: https://david-dm.org/8788/vue-date-picker
[download-url]: https://npmjs.org/package/vue-date-picker
[license-image]: https://img.shields.io/npm/l/vue-date-picker.svg