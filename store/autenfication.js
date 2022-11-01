import { defineStore } from 'pinia'

export const useAuth = defineStore('autenfication', {
  state: () => {
    return { auth: false }
  },
  actions: {
    logIn() {
      this.auth = true
    },
    logOut(){
      this.auth = false
    }
  },
  getters: {
    getAuthStatus: (state) => state.auth,
  },
})