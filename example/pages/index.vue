<template>
  <div class="container">
    <div>
      <h1>Number to Khmer words</h1>

      <div style="display: flex; flex-direction: column; align-items: start">
        <div style="height: 20px"></div>
        <ModeSelect v-model="mode" />
        <div style="height: 20px"></div>
        <InputDecimalNumber v-model="inputValue" />
        <div style="height: 20px"></div>
      </div>
    </div>

    <div>
      <h2 v-if="mode === 'usd'">
        {{ usdMode }}
      </h2>
      <h2 v-else-if="mode === 'khr'">
        {{ khrMode }}
      </h2>
      <h2 v-else-if="mode === 'number'">
        {{ numberMode }}
      </h2>
      <h2 v-else>Oh no 😢</h2>
    </div>
  </div>
</template>

<script>
import { numberToWord, currencyToWord } from 'number_to_khmer_word'

export default {
  data() {
    return {
      inputValue: 0,
      mode: 'usd',
    }
  },
  computed: {
    usdMode() {
      return currencyToWord(this.inputValue, 'USD')
    },
    khrMode() {
      return currencyToWord(this.inputValue, 'KHR')
    },
    numberMode() {
      return numberToWord(this.inputValue)
    },
  },
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  overflow: hidden;
}
</style>
