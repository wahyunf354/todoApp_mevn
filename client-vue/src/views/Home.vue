<template>
  <div class="home">
    <NavBar :isDisplay="isDisplayBtnAdd"/>
    <div class="home__container">
      <router-view/>
      <div class="home__illustration">
        <img src="../assets/illustration/illustrationhome4.svg" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '../components/NavBar'

export default {
  name: 'home',
  data () {
    return {
      isDisplayBtnAdd: true
    }
  },
  components: {
    NavBar
  }
}
</script>

<style lang="scss">
.home__container {
  padding: 10px 30px;
  display: flex;
  justify-content: space-between;

  .home__illustration {
    flex: 1;
    display: flex;
    justify-content: center;
    align-content: flex-start;
    padding: 30px 0;
    box-sizing: border-box;

    img {
      width: 75%;
      height: auto;
    }
  }
}

@media screen and (max-width: 768px) {

  .home__container {
    padding: 10px 30px;
    display: flex;
    justify-content: space-between;

    .home__illustration {
      display: none;
    }
  }
}
</style>
