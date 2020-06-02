<template>
  <div class="home">
    <NavBar/>
    <AllTodos/>
    <router-view/>
  </div>
</template>

<script>
import NavBar from '../components/NavBar'
import AllTodos from '../components/AllTodos'

export default {
  name: 'Home',
  components: {
    NavBar,
    AllTodos
  }
}
</script>
