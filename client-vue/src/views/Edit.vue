<template>
  <div class="add__container">
    <NavBar :isDisplay="isDisplayBtnAdd" />
    <EditContent/>
  </div>
</template>

<script>
import NavBar from '../components/NavBar'
import EditContent from '../components/EditContent'

export default {
  name: 'Add',
  data () {
    return {
      isDisplayBtnAdd: false
    }
  },
  components: {
    NavBar,
    EditContent
  }
}
</script>
