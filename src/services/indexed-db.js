import localforage from 'localforage';

const TODO_KEY = 'TODO';

class DB {
  constructor() {
    this.db = localforage.createInstance('todos');
  }

  addTodo(todoText) {
    return this.getTodos()
      .then(todos => {
        let newId;
        let newTodos;
        if (todos && todos.length) {
          const prevId = todos[todos.length - 1].id;
          newId = prevId + 1;
          newTodos = [...todos, {
            text: todoText,
            completed: false,
            id: newId
          }];
        } else {
          newId = 0;
          newTodos = [{
            text: todoText,
            completed: false,
            id: newId
          }];
        }
        

        return this.db
          .setItem(TODO_KEY, newTodos)
          .catch(err => {
            console.warn(`Error while saving todo`);
            console.error(err);
          });
      })
  }

  removeTodo(todo) {
    return this.getTodos()
      .then(todos => {
        const idx = todos.indexOf(todo);
        let newTodos = null;
        
        if (idx === -1) {
          console.error(`Error: Cannot find this todo`)
        } else {
          newTodos = [...todos.slice(0, idx), ...todos.slice(idx + 1)];
          return this.db
            .setItem(TODO_KEY, newTodos)
            .catch(err => {
              console.error(`Error while deleting todo`);
            });
        }
      })
  }

  toggleTodo(id) {
    return this.getTodos(TODO_KEY)
      .then(todos => {
        const newTodos = todos.map(t => {
          if (t.id === id) {
            t.completed = !t.completed;
          }

          return t;
        });

        return this.db
          .setItem(TODO_KEY, newTodos)
          .catch(err => {
            console.error(`Error while updating todo`);
          });
      })
  }

  updateTodo(todo) {
    return this.getTodos(TODO_KEY)
      .then(todos => {
        const newTodos = todos.map(t => {
          if (t.id === todo.id) {
            t.text = todo.text;
          }

          return t;
        });

        return this.db
          .setItem(TODO_KEY, newTodos)
          .catch(err => {
            console.error(`Error while updating todo`);
          });
      })
  }

getTodos() {
    return this.db.getItem(TODO_KEY)
      .catch(err => {
        console.warn(`Error while retriving todos`);
        console.error(err);
      });
  }
}

const db = new DB();

export default db;
