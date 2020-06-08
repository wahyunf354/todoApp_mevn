<template>
  <div class="card__container" @click="isDelete = !isDelete">
    <div class="card__text">
      <p class="card__title">{{ title }}</p>
      <p class="card__time">{{ updatedAt }}</p>
      <p class="card__desc">{{ description }}</p>
    </div>
    <div class="card__btn"  >
      <router-link :to="{ name: 'edit', params: { id } }">
        <Button title="View"/>
      </router-link>
      <transition name="fade">
        <div class="card__btn_delete" v-if="isDelete" @click="handleDelete(id)">
          <img src="../../assets/icon/delete.svg" alt="">
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import Button from '../atom/Button'

export default {
  name: 'CardTodo',
  data () {
    return {
      isDelete: false
    }
  },
  components: {
    Button
  },
  props: ['title', 'description', 'updatedAt', 'handleDelete', 'id']
}
</script>

<style lang="scss">
  $bg: #273054;
  $blue: #6268F1;
  $red: #EE5C8D;
  $black: #070A19;
  $text-smout: #A0B3F4;
  $text-dark: #556296;

  .fade-enter-active, .fade-leave-active {
    transition: opacity 700ms;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active di bawah versi 2.1.8 */ {
    opacity: 0;
  }

  .card__container {
    width: 100%;
    border-bottom: 1px solid $text-dark;
    display: flex;
    align-items: center ;
    justify-content: space-between;
    margin-bottom: 12px;
    overflow: hidden;
    padding-right: 5px;

    .card__btn {
      position: relative;
      width: 30%;
      display: flex;
      justify-content: flex-end;
      align-items: center;

      .card__btn_delete {
        width: 65.5px;
        height: 65.5px;
        margin-left: 8px;
        background: rgba(85, 98, 150, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        transition: all 300ms;
        img {
          transition: all 300ms;
        }
        &:hover img {
          transform: scale(1.3);
        }
      }
    }

    .card__text {
      width: 70%;
      .card__title {
        font-family: Poppins;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 30px;
        color: white
      }

      .card__time {
        font-family: Poppins;
        font-style: normal;
        font-weight: 500;
        font-size: 10px;
        line-height: 15px;
        color: $text-dark;
      }

      .card__desc {
        font-family: Poppins;
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 18px;
        color: $text-smout;
        margin-bottom: 3.5px;
      }
    }
  }

  @media screen and (max-width: 544px) {
    .card__container {
      width: 100%;
    }
  }
</style>
