<template>
  <div class="alltodo__container">
    <div class="alltodo__content">
      <div class="title">
        <p>Todos</p>
      </div>
      <div class="content"  v-for="(todo,i) in this.todos" :key="i" >
        <CardTodo :handleDelete='handleDeleteTodo' :id='todo.id' :title='todo.title' :updatedAt='todo.updatedAt' :description='todo.description' />
      </div>
      <div class="empty__text" v-if="isEmpty">
        <p>Todo Not Found</p>
      </div>
    </div>
    <div class="alltodo__illustration">
      <img src="../assets/illustration/illustrationhome4.svg" alt="">
    </div>
  </div>
</template>

<script>
import CardTodo from './molekule/CardTodo'
import TodoService from '../service/TodoService.js'

export default {
  name: 'AllTodos',
  data () {
    return {
      todos: [],
      isEmpty: false
    }
  },
  components: {
    CardTodo
  },
  methods: {
    readAllTodo () {
      TodoService.getAll()
        .then(result => {
          this.todos = result.data
          if (this.todos.length === 0) {
            this.isEmpty = true
          } else {
            this.isEmpty = false
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    handleDeleteTodo (id) {
      TodoService.deleteTodo(id)
        .then((result) => {
          console.log(result)
          this.readAllTodo()
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  mounted () {
    this.readAllTodo()
  }
}
</script>

<style lang="scss">
.alltodo__container {
  padding: 10px 30px;
  display: flex;
  justify-content: space-between;

  .alltodo__content {
    flex: 1;
    .title {
      p {
        font-family: Poppins;
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 36px;
        color: white;
        margin-bottom: 33px;
      }
    }
  }

  .alltodo__illustration {
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

  .alltodo__container {
    padding: 10px 30px;
    display: flex;
    justify-content: space-between;

    .alltodo__content {
      .title {
        p {
          font-family: Poppins;
          font-style: normal;
          font-weight: bold;
          font-size: 24px;
          line-height: 36px;
          color: white;
          margin-bottom: 33px;
        }
      }
    }

    .alltodo__illustration {
      display: none;
    }
  }
}
</style>
