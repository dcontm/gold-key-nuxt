export const state = () => ({
    requestForm: false
  })
  
  export const getters = {
    getRequestFormStatus(state) {
      return state.requestForm
    }
  }
  
  export const mutations = {
    changeRequestFormStatus(state) {
      state.requestForm = !state.requestForm
    }
  }
  
  export const actions = {
    changeRequestFormStatus(context) {
        context.commit(this.changeRequestFormStatus)
    }
  }