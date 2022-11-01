import { defineStore } from 'pinia'

export const useHamburgerMenu = defineStore('hamburgerMenu', {
  state: () => {
    return { activeMenu: false }
  },
  actions: {
    toggleMenu() {
      this.activeMenu = !this.activeMenu
    },
  },
  getters: {
    getActiveMenu: (state) => state.activeMenu,
  },
})