const vm = Vue.createApp({
  data() {
    return {
      todos: [],
    };
  },

  methods: {
    getTodo() {
      const randomTodo = Math.floor(Math.random() * 200);
      fetch("https://jsonplaceholder.typicode.com/todos/" + randomTodo).then(
        (reponse) =>
          reponse.json().then((reponse) => {
            console.log(reponse);
            this.todos.push(reponse);
            localStorage.setItem("todo-api", JSON.stringify(this.todos));
          })
      );
    },

    toggleTodoStatus(index) {
      if (this.todos[index].completed) {
        this.todos[index].completed = false;
      } else {
        this.todos[index].completed = true;
      }
      localStorage.setItem("todo-api", JSON.stringify(this.todos));
    },

    deleteTodo(index) {
      this.todos.splice(index, 1);
      localStorage.setItem("todo-api", JSON.stringify(this.todos));
    },
  },
  mounted() {
    if (JSON.parse(localStorage.getItem("todo-api"))) {
      this.todos = JSON.parse(localStorage.getItem("todo-api"));
    }
  },
});

vm.mount("#app");
