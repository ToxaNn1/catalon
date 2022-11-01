import { defineStore } from 'pinia'

export const useSelectedCourse = defineStore('selectedCourse', {
  state: () => {
    return { selectedCourseType: '' }
  },
  actions: {
    selectCourse(course) {
      this.selectedCourseType = course
    },
  },
  getters: {
    getSelectedCourse: (state) => state.selectedCourseType,
  },
})
