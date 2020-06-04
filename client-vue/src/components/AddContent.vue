<template>
  <div class="add__content">
    <div class="add__form">
      <p class="add__title">Create Todo</p>
      <input class="add__input" name="title" type="text" placeholder="Title">
      <textarea class="add__textarea" name="description" id="" cols="30" rows="8" placeholder="Add Todo Here"></textarea>
      <div class="add__radio-group">
        <input type="radio" class="add__radio" name="priority" value="low">Low
      </div>
      <div class="add__radio-group">
        <input type="radio" class="add__radio" name="priority" value="medium">Medium
      </div>
      <div class="add__radio-group">
        <input type="radio" class="add__radio" name="priority" value="high">High
      </div>
      <div class="add__btn-create">
        <img src="../assets/icon/btn+40x40.svg" alt="create">
      </div>
    </div>
    <div class="add__illustration">
      <img src="../assets/illustration/illustrationadd.svg" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'addcontent'
}
</script>

<style lang="scss">
  .add__content {
    display: flex;
    .add__form {
      padding: {
        top: 30px;
        left: 30px;
      };
      flex: 1;
      display: flex;
      flex-direction: column;
      .add__title {
        font-family: Poppins;
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 36px;
        margin-bottom: 41px;
      }
      .add__input {
        background-color: rgba($color: #000000, $alpha: 0);
        border: 1px solid rgba($color: #000000, $alpha: 0);
        font-family: Poppins;
        font-size: 20px;
        outline: none;
        padding: 5px 0;
        color: #A0B3F4;
      }
      .add__textarea {
        background-color: rgba($color: #000000, $alpha: 0);
        border: 1px solid rgba($color: #000000, $alpha: 0);
        font-size: 14px;
        padding: 5px 0;
        color: #A0B3F4;
        outline: none;
        font-family: Poppins;
      }
      .add__radio-group {
        padding: {
          top: 10px;
        };
        .add__radio {
          margin-right: 10px;
        }
      }
      .add__btn-create {
        width: 40px;
        height: 40px;
        right: 40px;
        bottom: 40px;
        position: absolute;
        cursor: pointer;
        z-index: -2;
      }
    }
    .add__illustration {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 30px 0;
      box-sizing: border-box;

      img {
        width: 75%;
        height: auto;
      }
    }
  }

  @media screen and (max-width: 765px) {
    .add__content {
      margin: {
        top: 20px;
      };
      display: flex;
      .add__form {
        padding: {
          top: 0;
          left: 30px;
          right: 30px;
        };
        flex: 1;
        display: flex;
        flex-direction: column;
      }
      .add__illustration {
        display: none;
      }
    }
  }
</style>
