<template>
  <div>
    <div class="add__content">
      <div class="add__form">
        <p class="add__title">Edit Todo</p>
        <input v-model="todo.title" class="add__input" name="title" type="text" placeholder="Title">
        <textarea v-model="todo.description" class="add__textarea" name="description" id="" cols="30" rows="8" placeholder="Add Todo Here"></textarea>
        <div class="add__radio-group">
          <label for="low">
            <input id="low" v-model="todo.priority" type="radio" class="add__radio" name="priority" value="low">Low
          </label>
        </div>
        <div class="add__radio-group">
          <label for="medium">
            <input id="medium" v-model="todo.priority" type="radio" class="add__radio" name="priority" value="medium">Medium
          </label>
        </div>
        <div class="add__radio-group">
          <label for="high">
            <input id="high" v-model="todo.priority" type="radio" class="add__radio" name="priority" value="high">High
          </label>
        </div>
        <div @click="updateTodo()" class="add__btn-create">
          <img src="../assets/icon/save.svg" alt="create">
        </div>
      </div>
      <div class="add__illustration">
        <img src="../assets/illustration/illustrationadd.svg" alt="">
      </div>
    </div>
    <transition name="fade">
      <div class="popup" v-if="isDisplayPopup" @click="hiddenPopup()">
        <p v-if="error.isError" class="popup__text_red">{{ error.message }}</p>
        <p v-else class="popup__text">Create Todo Successfully</p>
      </div>
    </transition>
  </div>
</template>

<script>
import TodoService from '../service/TodoService'

export default {
  name: 'addcontent',
  data () {
    return {
      todo: {},
      isDisplayPopup: false,
      error: {
        message: '',
        isError: false
      }
    }
  },
  methods: {
    getTodoById (id) {
      TodoService.getById(id)
        .then((result) => {
          console.log(result)
          this.todo = result.data
        })
        .catch((err) => {
          console.log(err)
        })
    },
    hiddenPopup () {
      this.isDisplayPopup = false
    }
  },
  mounted () {
    this.getTodoById(this.$route.params.id)
  }
}
</script>

<style lang="scss">
  .fade-enter-active, .fade-leave-active {
    transition: .3s;
  }

  .fade-enter, .fade-leave-to  {
    opacity: 0;
    transform: scale(0);
  }

  div {
    .add__content {
      display: flex;
      .add__form {
        padding: {
          top: 30px;
          left: 60px;
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
          transition: all 400ms;
          &:hover {
            transform: scale(1.1);
          }
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
    .popup {
      position: absolute;
      background-color: rgba($color: #273054, $alpha: 0.5);
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      .popup__text {
        background-color: #6268F1;
        padding: 20px;
        border-radius: 8px;
        transition: 300ms;
      }
      .popup__text_red {
        background-color: #EE5C8D;
        padding: 20px;
        border-radius: 8px;
        transition: 300ms;
      }
    }
  }

  @media screen and (max-width: 765px) {
    div {
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
  }
</style>
