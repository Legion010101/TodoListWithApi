import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    headers: {'API-KEY':'ca401a5b-4cee-4677-8c51-5f2f868ea819'}
})



export const authApi = {
    authUser() {
        return instance.get(`auth/me`).then((response) => response.data)
    },
    login(dataUser) {
        return instance
            .post(`auth/login`, dataUser)
            .then((response) => response.data)
    },
    logout() {
        return instance.delete(`auth/login`).then((response) => response.data)
    },
}

export const todoListsApi = {
    getTodoLists() {
        return instance.get(`/todo-lists`)
    },
    postTodoList(title) {
        return instance
            .post(`/todo-lists`,title)
            .then((response) => response.data)
    },
    deleteTodoList(todolistId) {
        return instance
            .delete(`/todo-lists/${todolistId}`)
            .then((response) => response.data)
    },
    updateTodoList(todolistId,NewTitle) {
        return instance
            .put(`/todo-lists/${todolistId}`, {title: NewTitle})
            .then((response) => response.data)
    },

    orderTodoList(todolistId,putAfterItemId) {
        return instance
            .put(`/todo-lists/${todolistId}/reorder`, putAfterItemId)
            .then((response) => response.data)
    },
}

export const tasksApi = {
   async getTasks(todolistId) {
        const data = await instance.get(`/todo-lists/${todolistId}/tasks`)
        return data
    },
    postTasks(todolistId,taskDate) {
        return instance
            .post(`/todo-lists/${todolistId}/tasks`,taskDate)
            .then((response) => response.data)
    },

    updateTasks(todolistId,taskDate,taskId) {
        return instance
            .put(`/todo-lists/${todolistId}/tasks/${taskId}`, taskDate)
            .then((response) => response.data)
    },

    deleteTasks(todolistId,taskId) {
        return instance
            .delete(`/todo-lists/${todolistId}/tasks/${taskId}`)
            .then((response) => response.data)
    },
    orderTasks(todolistId,taskId, putAfterItemId) {
        return instance
            .put(`/todo-lists/${todolistId}/tasks/${taskId}/reorder`, putAfterItemId)
            .then((response) => response.data)
    },
}