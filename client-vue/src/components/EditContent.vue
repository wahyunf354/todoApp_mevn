<template>
  <div>
    <div class="edit__content"  v-if="!error.isError">
      <div class="edit__form">
        <p class="edit__title">Edit Todo</p>
        <input v-model="todo.title" class="edit__input" name="title" type="text" placeholder="Title">
        <textarea v-model="todo.description" class="edit__textarea" name="description" id="" cols="30" rows="8" placeholder="edit Todo Here"></textarea>
        <div class="edit__radio-group">
          <label for="low">
            <input id="low" v-model="todo.priority" type="radio" class="edit__radio" name="priority" value="low">Low
          </label>
        </div>
        <div class="edit__radio-group">
          <label for="medium">
            <input id="medium" v-model="todo.priority" type="radio" class="edit__radio" name="priority" value="medium">Medium
          </label>
        </div>
        <div class="edit__radio-group">
          <label for="high">
            <input id="high" v-model="todo.priority" type="radio" class="edit__radio" name="priority" value="high">High
          </label>
        </div>
        <div @click="hendleTodoSave()" class="edit__btn-create">
          <img src="../assets/icon/save.svg" alt="create">
        </div>
      </div>
      <div class="edit__illustration">
        <img src="../assets/illustration/illustrationadd.svg" alt="">
      </div>
    </div>
    <div v-else class="edit__not-found">
      <img src="../assets/illustration/illustration404.svg" alt="">
    </div>
    <transition name="fade">
      <div class="popup" v-if="isDisplayPopup" @click="hiddenPopup()">
        <p v-if="error.isErrorEdit" class="popup__text_red">{{ error.messageEdit }}</p>
        <p v-else class="popup__text">{{ messageSuccess }}</p>
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
        isError: false,
        messageEdit: '',
        isErrorEdit: false
      },
      messageSuccess: ''
    }
  },
  methods: {
    getTodoById (id) {
      TodoService.getById(id)
        .then((result) => {
          if (result.data.message === 'Todo is not found') {
            this.error.message = result.data.message
            this.error.isError = true
          } else {
            this.todo = result.data
          }
        })
        .catch((err) => {
          this.error.message = err
          this.error.isError = true
        })
    },
    hiddenPopup () {
      this.isDisplayPopup = false
      this.$router.push('/')
    },
    hendleTodoSave () {
      const data = {
        title: this.todo.title,
        description: this.todo.description,
        priority: this.todo.priority,
        isCompleted: this.todo.isCompleted
      }

      TodoService.editTodo(this.todo.id, data)
        .then((result) => {
          this.messageSuccess = result.data.message
          this.isDisplayPopup = true
        })
        .catch((err) => {
          this.error.messageEdit = err
          this.error.isErrorEdit = true
          this.isDisplayPopup = true
        })
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
    .edit__not-found {
      height: 80vh;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      img {
        margin-bottom: 20px;
      }
      p {
        font-size: 20px
      }
    }
    .edit__content {
      display: flex;
      .edit__form {
        padding: {
          top: 30px;
          left: 60px;
        };
        flex: 1;
        display: flex;
        flex-direction: column;
        .edit__title {
          font-family: Poppins;
          font-style: normal;
          font-weight: bold;
          font-size: 24px;
          line-height: 36px;
          margin-bottom: 41px;
        }
        .edit__input {
          background-color: rgba($color: #000000, $alpha: 0);
          border: 1px solid rgba($color: #000000, $alpha: 0);
          font-family: Poppins;
          font-size: 20px;
          outline: none;
          padding: 5px 0;
          color: #A0B3F4;
        }
        .edit__textarea {
          background-color: rgba($color: #000000, $alpha: 0);
          border: 1px solid rgba($color: #000000, $alpha: 0);
          font-size: 14px;
          padding: 5px 0;
          color: #A0B3F4;
          outline: none;
          font-family: Poppins;
        }
        .edit__radio-group {
          padding: {
            top: 10px;
          };
          .edit__radio {
            margin-right: 10px;
          }
        }
        .edit__btn-create {
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
      .edit__illustration {
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
      .edit__not-found {
        img {
          width: 80%;
        }
      }
      .edit__content {
        margin: {
          top: 20px;
        };
        display: flex;
        .edit__form {
          padding: {
            top: 0;
            left: 30px;
            right: 30px;
          };
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        .edit__illustration {
          display: none;
        }
      }
    }
  }
</style>
