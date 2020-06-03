<template>
  <div class="add__container">
    <NavBar :isDisplay="isDisplayBtnAdd" />
  </div>
</template>

<script>
import NavBar from '../components/NavBar'

export default {
  name: 'Add',
  data () {
    return {
      isDisplayBtnAdd: false
    }
  },
  components: {
    NavBar
  }
}
</script>
