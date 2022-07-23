import Todo from './util/Todo.js'
const vm = Vue.createApp({
  data() {
    return {
      todos: {
        content: []
      }
    };
  },
  mounted() {
    this.todos = new Todo()
    this.todos.getOne(1)
  },
});

vm.mount("#app");
