<template>
  <div class="alltodo__container">
    <div class="title">
      <p>Todos</p>
    </div>
    <div class="content">
      <CardTodo/>
      <CardTodo/>
      <CardTodo/>
      <CardTodo/>
    </div>
  </div>
</template>

<script>
import CardTodo from './molekule/CardTodo'

export default {
  name: 'AllTodos',
  components: {
    CardTodo
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
