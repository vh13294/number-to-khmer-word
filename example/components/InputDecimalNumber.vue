<template>
  <label style="white-space: nowrap;">
    <span style="font-size: 25px; margin-right: 10px;">Value: </span>
    <input
      v-model="content"
      inputmode="decimal"
      placeholder="ចំនួន"
      style="font-size: 30px"
      @beforeinput="handleKeyPress"
      @paste.prevent
      @input="handleInput"
    />
  </label>
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
    },
  },
  data() {
    return {
      content: this.value.toString(),
    }
  },
  watch: {
    value() {
      if (Number(this.content) === Number(this.value)) {
        // watch to remove leading 0s
        this.content = this.content.replace(/^0+(?=\d)/, '')
      } else {
        this.content = this.value.toString()
      }
    },
  },
  methods: {
    handleKeyPress(event) {
      if (
        !this.isDigitOrDecimalSeperator(event.data) &&
        !this.isDeleteForwardOrBackwardKey(event.inputType)
      ) {
        event.preventDefault()
      } else if (this.doesContentContainDecimalSeperator()) {
        if (this.isDecimalSeperator(event.data)) {
          // stop if see second '.'
          event.preventDefault()
        }
      }
    },
    isDeleteForwardOrBackwardKey(inputType) {
      return inputType.includes('deleteContent')
    },
    isDigitOrDecimalSeperator(val) {
      return /^[0-9,.]$/.test(val)
    },
    isDecimalSeperator(val) {
      return /^[,.]$/.test(val)
    },
    doesContentContainDecimalSeperator(val) {
      return [',', '.'].some(seperator => this.content.includes(seperator))
    },
    handleInput() {
      const output = this.content.replaceAll(',', '.')
      this.$emit('input', Number(output))
    },
  },
}
</script>

<style lang="css" scoped>
input {
  text-align: center;
  background-color: #ffffff;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  box-sizing: border-box;
  color: #606266;
  height: 40px;
  line-height: 40px;
  outline: none;
  padding: 0 15px;
  width: 90%;
}

::placeholder {
  color: rgb(189, 189, 189);
}
</style>
