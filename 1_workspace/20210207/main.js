new Vue({
  el: "#app",
  data: {
    todos: [],
    todo: "",
    number: 0,
  },
  created() {
    this.todos = JSON.parse(localStorage.todos)
    this.number = this.todos.length
  },
  methods: {
    add: function() {
      this.number++
      const textData = {
        id: this.number,
        text: this.todo,
      }
      this.todos.push(textData)
      localStorage.todos = JSON.stringify(this.todos)

      this.todo = ""
    },
    delete: function(index) {
      console.log(index)
      this.todos.splice(index, 1)

      localStorage.todos = JSON.stringify(this.todos)
    },
  },
})
