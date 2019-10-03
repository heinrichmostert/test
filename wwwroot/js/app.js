var app = new Vue({ 
    el: '#app',
    data: {
		message:'Hello Vue.js',
		seen: true,
		todos: [
			{ text: 'Learn JavaScript' },
			{ text: 'Learn Vue' },
			{ text: 'Build something awesome' }
		]
	},
	methods: {
		reverseMessage: function () {
			this.message = this.message.split('').reverse().join('')
		}
	}
});

Vue.component('todo-item', {
	template: '<li>This is a todo</li>'
})

app.todos.push({ text: 'New item' })
