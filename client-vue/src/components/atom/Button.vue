<template>
  <button> {{ title }} </button>
</template>

<script>
export default {
  name: 'Button',
  props: [
    'title'
  ]
}
</script>

<style lang="scss">
  button {
    padding: 2px 13px;
    background: #6268F1;
    outline: none;
    border-radius: 8px;
    border: 1px solid #6268F1;
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 21px;
    color: white
  }
</style>
