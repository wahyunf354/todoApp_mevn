<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
$bg: #273054;
$blue: #6268F1;
$red: #EE5C8D;
$black: #070A19;
$text-smout: #A0B3F4;
$text-dark: #556296;

* {
  padding: 0;
  margin: 0;
}

body {
  font-family: Poppins, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
  background-color: $bg;
}

</style>
