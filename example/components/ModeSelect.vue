<template>
  <div>
    <select v-model="selected" style="font-size: 25px">
      <option
        v-for="option in options"
        :value="option.value"
        :key="option.value"
      >
        {{ option.text }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
    },
  },
  data() {
    return {
      selected: this.value,
      options: [
        { text: 'Currency USD', value: 'usd' },
        { text: 'Currency KHR', value: 'khr' },
        { text: 'Number', value: 'number' },
      ],
    }
  },
  watch: {
    selected() {
      this.$emit('input', this.selected)
    },
  },
}
</script>
