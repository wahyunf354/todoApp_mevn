<template>
  <div class="alltodo__container">
    <div class="title">
      <p>Todos</p>
    </div>
    <div class="content" v-for="(todo,i) in this.todos" :key="i" >
      <CardTodo :title='todo.title' :updatedAt='todo.updatedAt' :description='todo.description' />
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
      todos: []
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
        })
        .catch(err => {
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
</style>
