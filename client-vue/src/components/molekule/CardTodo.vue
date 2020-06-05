<template>
  <div class="card__container">
    <div class="card__text" @click="getDelete()">
      <p class="card__title">{{ title }}</p>
      <p class="card__time">{{ updatedAt }}</p>
      <p class="card__desc">{{ description }}</p>
    </div>
    <div class="card__btn">
      <Button title="View" />
      <!-- <div class="card__btn_delete">
        <img src="../../assets/icon/delete.svg" alt="">
      </div>
      <div class="helper"> -->
      </div>
    </div>
  </div>
</template>

<script>
import Button from '../atom/Button'

export default {
  name: 'CardTodo',
  components: {
    Button
  },
  props: ['title', 'description', 'updatedAt'],
  methods: {
    getDelete () {
      document.querySelectorAll('.helper').forEach((e, i) => {
        e.classList.add('space')
      })
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

  .card__container {
    width: 100%;
    border-bottom: 1px solid $text-dark;
    display: flex;
    align-items: center ;
    justify-content: space-between;
    margin-bottom: 12px;

    .card__btn {
      position: relative;
      width: 30%;
      display: flex;
      justify-content: flex-end;
      align-items: center;

      .card__btn_delete {
        width: 69px;
        height: 69px;
        background: rgba(85, 98, 150, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        opacity: 0;
      }

      .space {
        width: 75px;
        height: 69px;
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
