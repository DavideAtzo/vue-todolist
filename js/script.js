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
            ]
        }
    },
}).mount('#app');