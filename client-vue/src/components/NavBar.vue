<template>
  <div id="nav">

      <!-- Mobile Nav -->
      <div class="menu" @click="getSideBar()" v-if="isDisplay" >
        <img  src="../assets/icon/menu.png" alt="">
      </div>
      <div class="menu" v-else @click="pushBack()">
        <img  src="../assets/icon/back.svg" alt="">
      </div>

      <div class="sidebar hidden">
        <div class="btnx" @click="hiddenSideBar()">
          <img src="../assets/icon/btnx.svg" alt="">
        </div>
        <router-link to="/">All Todos</router-link>
        <router-link to="/">Todos Uncompleted</router-link>
        <router-link to="/">Todos Completed</router-link>
        <router-link to="/">Todos Priority High</router-link>
        <router-link to="/">Todos Priority Medium</router-link>
        <router-link to="/">Todos Priority Low</router-link>
      </div>

      <router-link to="/add" v-if="isDisplay">
        <div class="add__btn">
          <img src="../assets/icon/btn+.svg" alt="">
        </div>
      </router-link>
      <!-- End Mobile Nav -->

      <!-- Desktop Nav -->
      <div class="navbar">
        <router-link class="navbar__btn" to="/" v-if="!isDisplay">
          <img src="../assets/icon/back.svg" alt="">
        </router-link>
        <div class="navbar__btn" v-else></div>
        <p @click="getSideBarDesktop()" >Menu</p>
        <router-link class="navbar__btn" to="/add" v-if="isDisplay">
          <img src="../assets/icon/btn+.svg" alt="">
        </router-link>
        <div class="navbar__btn" v-else></div>
        <div class="navbar__sidebar hidden">
          <div class="btnx" @click="hiddenSideBarDesktop()">
            <img src="../assets/icon/btnx.svg" alt="">
          </div>
          <router-link to="/">All Todos</router-link>
          <router-link to="/">Todos Uncompleted</router-link>
          <router-link to="/">Todos Completed</router-link>
          <router-link to="/">Todos Priority High</router-link>
          <router-link to="/">Todos Priority Medium</router-link>
          <router-link to="/">Todos Priority Low</router-link>
        </div>
      </div>
      <!-- End Desktop Nav -->
    </div>
</template>

<script>
export default {
  name: 'navbar',
  methods: {
    getSideBar () {
      document.querySelector('.sidebar').classList.remove('hidden')
      document.querySelector('.sidebar').classList.add('show')
    },
    hiddenSideBar () {
      document.querySelector('.sidebar').classList.remove('show')
      document.querySelector('.sidebar').classList.add('hidden')
    },
    getSideBarDesktop () {
      document.querySelector('.navbar__sidebar').classList.remove('hidden')
      document.querySelector('.navbar__sidebar').classList.add('show')
    },
    hiddenSideBarDesktop () {
      document.querySelector('.navbar__sidebar').classList.remove('show')
      document.querySelector('.navbar__sidebar').classList.add('hidden')
    },
    pushBack () {
      this.$router.push('/')
    }
  },
  props: {
    isDisplay: Boolean
  }
}
</script>

<style lang="scss">
$bg: #273054;
$blue: #6268F1;
$red: #EE5C8D;
$black: #070A19;
$text-smout: #A0B3F4;
$text-dark: #556296;

#nav {
  padding: 10px;
  background: $text-dark;
  display: flex;
  justify-content: flex-end;

  a {
    color: white;
    text-decoration: none;
    margin-right: 10px;

    &.router-link-exact-active {
      color: #A0B3F4;
    }
  }

}

@media (min-width: 544px) {
  .menu {
    display: none;
  }

  .sidebar {
    display: none;
  }

  .add__btn {
    display: none;
  }

  .navbar {
    width: 100%;
    margin: 0;
    position: relative;
    padding: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    a.navbar__btn {
      width: 20px;
      height: 20px;
      padding: {
        top: 0;
        left: 20px;
        bottom: 0;
        right: 20px;
      }
    }

    p {
      color: $text-smout;
      cursor: pointer;
      transition: transform 300ms ease-in-out;
      &:hover {
        transform: scale(1.1);
      }
    }
  }

  .navbar__sidebar.hidden {
    right: -1000px;
  }

  .navbar__sidebar.show {
    right: -10px;
  }

  .navbar__sidebar {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    background-color: $text-dark;
    top: -10px;
    padding: 0 50px;
    height: 100vh;
    transition: 400ms;
    box-sizing: border-box;

    .btnx {
      widows: 20px;
      height: 20px;
      cursor: pointer;
      transition: 300ms;
      &:hover {
        transform: scale(1.03);
      }
    }

    a {
      border-bottom: solid 1px $text-smout;
    }
  }
}

@media screen and (max-width: 544px) {
  #nav {
  padding: 30px;
  display: flex;
  background-color: $bg;
  justify-content: space-between;

    a {
      color: white;
      text-decoration: none;
      margin-right: 10px;

      &.router-link-exact-active {
        color: #A0B3F4;
      }
    }

    .menu {
      cursor: pointer;
    }

    .navbar {
      display: none;
    }

    .sidebar.show {
      opacity: 1;
      left: 0;
    }

    .sidebar.hidden {
      opacity: 0;
      left: -300px;
    }

    .sidebar {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      position: absolute;
      background-color: $text-dark;
      top: 0;
      height: 100vh;
      padding: 0 30px;
      width: 50vw;
      transition: 400ms;

      .btnx {
        widows: 20px;
        height: 20px;
        margin-bottom: 30px;
        margin-top: 10px;
      }

      a {
        padding-bottom: 4px;
        border-bottom: solid 1px $text-smout;
        margin-bottom: 27px;
      }
    }

  }
}
</style>
