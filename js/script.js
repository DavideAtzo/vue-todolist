'use strict';

const { createApp } = Vue;

createApp({
    data() {
        return {

            todolist: [
                {
                    text: 'fare la spesa',
                    done: true,
                },
                {
                    text: 'andare al parco',
                    done: false,
                },
                {
                    text: 'giocare a calcetto',
                    done: false,
                },
                {
                    text: 'fare una passeggiata',
                    done: true,
                }
            ],
            newTodo: ''
        }
    },
    methods: {
        deleteTodo(elementTodoDelete) {
            this.todolist.splice(elementTodoDelete, 1)
        },
        addTodo() {
            if (this.newTodo.trim() != '') {
                this.todolist.push({ text: this.newTodo, done: false })
                this.newTodo = '';
            }
        }
    }
}).mount('#app');