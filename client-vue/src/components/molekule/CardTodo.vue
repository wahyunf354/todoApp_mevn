<template>
  <div class="card__container">
    <div class="card__text">
      <p class="card__title">Title Todo</p>
      <p class="card__time">2010/8/8</p>
      <p class="card__desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
    </div>
    <div class="card__btn">
      <Button title="View" />
    </div>
  </div>
</template>

<script>
import Button from '../atom/Button'

export default {
  name: 'CardTodo',
  components: {
    Button
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
    width: 50%;
    border-bottom: 1px solid $text-dark;
    display: flex;
    align-items: center ;
    justify-content: space-between;
    margin-bottom: 12px;

    .card__text {
      .card__title {
        font-family: Poppins;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 27px;
        color: white
      }

      .card__time {
        font-family: Poppins;
        font-style: normal;
        font-weight: 500;
        font-size: 10px;
        line-height: 13px;
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
