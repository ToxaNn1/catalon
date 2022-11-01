import { defineStore } from 'pinia'

export const useModalState = defineStore('modalState', {
  state: () => {
    return { modalShow: false }
  },
  actions: {
    toggleModal() {
      this.modalShow = !this.modalShow
    },
  },
  getters: {
    getModalState: (state) => state.modalShow,
  },
})