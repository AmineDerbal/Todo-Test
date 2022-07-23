import http from './http.js'
export default class Todo {
    constructor() {
        this.content = []
        this.additionDisabled = false 
    }
    getOne(index) {
        this.additionDisabled = true 
        let vm = this
        return http(`todos/${index}`)
        .then(res => res.json())
        .then(res => { vm.content.unshift(res) })
        .then(() => { 
            this.additionDisabled = false 
         })
    }

    update(index, body) {
        return http(`todos/${index}`, 'PUT', {
            'content-type': 'application/json'
        }, body)
        .then(res => res.json())
    }
    toggleStatus(index) {
        let id = this.content.length - index
        this.update(index, {
            title: "just an updated task...",
            completed: !this.content[id].completed
        })
        .then(res => { this.content[id] = res })
        
    }

    delete(index) {
        return http(`todos/${index}`, 'DELETE')
        .then(res => res.json())
        .then(res => { this.content = this.content.filter(todo => todo.id != index )})
        
    }
}
