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
    cursor: pointer;
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
    color: white;
    transition: all 300ms;

    &:hover {
      transform: scale(1.1);
    }
  }
</style>
