<template>
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
    <div class="empty__text" v-if="error">
      <p>{{ error }}</p>
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
      isEmpty: false,
      error: ''
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
          this.error = err
        })
    },
    handleDeleteTodo (id) {
      TodoService.deleteTodo(id)
        .then((result) => {
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

  .alltodo__content {
  flex:1;
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
  .error__text {
    flex: 1
  }

@media screen and (max-width: 768px) {
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
  }
</style>
