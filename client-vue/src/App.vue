<template>
  <div id="app">
    <div id="nav">
      <div class="menu" @click="getSideBar()">
        <img  src="./assets/icon/menu.png" alt="">
      </div>

      <div class="sidebar hidden">
        <div class="btnx" @click="hiddenSideBar()">
          <img src="./assets/icon/btnx.png" alt="">
        </div>
        <router-link to="/">All Todos</router-link>
        <router-link to="/">Todos Uncompleted</router-link>
        <router-link to="/">Todos Completed</router-link>
        <router-link to="/">Todos Priority High</router-link>
        <router-link to="/">Todos Priority Medium</router-link>
        <router-link to="/">Todos Priority Low</router-link>
      </div>

      <div class="navbar">
        <router-link to="/">Home</router-link>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
    getSideBar () {
      document.querySelector('.sidebar').classList.remove('hidden')
      document.querySelector('.sidebar').classList.add('show')
    },
    hiddenSideBar () {
      document.querySelector('.sidebar').classList.remove('show')
      document.querySelector('.sidebar').classList.add('hidden')
    }
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

@media screen and (min-width: 544px) {
  .menu {
    display: none;
  }
  .sidebar {
    display: none;
  }
}

@media screen and (max-width: 544px) {
  #nav {
  padding: 30px;
  display: flex;
  background-color: $bg;
  justify-content: flex-start;

    a {
      color: white;
      text-decoration: none;
      margin-right: 10px;

      &.router-link-exact-active {
        color: #A0B3F4;
      }
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
        margin-bottom: 37px;
        margin-top: 20px;
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
