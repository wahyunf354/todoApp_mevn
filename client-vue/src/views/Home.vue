<template>
  <div class="home">
    <NavBar :isDisplay="isDisplayBtnAdd"/>
    <AllTodos/>
    <router-view/>
  </div>
</template>

<script>
import NavBar from '../components/NavBar'
import AllTodos from '../components/AllTodos'

export default {
  name: 'home',
  data () {
    return {
      isDisplayBtnAdd: true
    }
  },
  components: {
    NavBar,
    AllTodos
  }
}
</script>
