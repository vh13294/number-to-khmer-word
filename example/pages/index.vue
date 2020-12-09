<template>
  <div class="container">
    <div>
      <h1>Number to Khmer words</h1>
      <div style="height: 20px;"></div>
      <InputDecimalNumber v-model="inputValue" />
      <div style="height: 20px;"></div>
      <h2>{{khmerWords}}</h2>
    </div>
  </div>
</template>

<script>
import { numberToWord } from 'number_to_khmer_word';

export default {
  data () {
    return {
      inputValue: 0
    }
  },
  computed: {
    khmerWords() {
      return numberToWord(this.inputValue)
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
