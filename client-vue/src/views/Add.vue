<template>
  <div class="add__container">
    <NavBar :isDisplay="isDisplayBtnAdd" />
    <AddContent/>
  </div>
</template>

<script>
import NavBar from '../components/NavBar'
import AddContent from '../components/AddContent'

export default {
  name: 'Add',
  data () {
    return {
      isDisplayBtnAdd: false
    }
  },
  components: {
    NavBar,
    AddContent
  }
}
</script>
