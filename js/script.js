'use strict';

const {createApp} = Vue;

createApp({
    data(){
        return {
            todolist: [
                'fare la spesa',
                'andare al parco',
                'giocare a calcetto',
                'fare una passeggiata'
            ]
        }
    },
}).mount('#app');