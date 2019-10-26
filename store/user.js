export const state = () => ({
    user: {
        firstName: '',
        lastName: '',
        token: '',
        renewToken: '',
        userId: '',
        phone: '',
        email: '',
        password: ''
    }
  })
  
  export const mutations = {
    ADD_AUTH_DATA: (state, { token, renewToken, ...user}) => {
      state = {...state, token, renewToken, user}
    },
    remove (state, { todo }) {
      state.list.splice(state.list.indexOf(todo), 1)
    },
    toggle (state, todo) {
      todo.done = !todo.done
    }
  }