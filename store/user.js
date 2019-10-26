export const state = () => ({
  data: {
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
  ADD_AUTH_DATA: (state, { token, renewToken, user }) => {
    state.data = {...state.data, token, renewToken, ...user};
  },
  TEST: (state, name) => {
    state.name = name;
  },
  toggle (state, todo) {
    todo.done = !todo.done
  }
}