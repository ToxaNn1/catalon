<template>
  <section class="mb-[6.25rem] wrapper">
    <FilterPartComponent />
    <div class="flex lg:hidden pt-[150px] py-[1.25rem] justify-center items-center gap-[0.75rem]  mx-auto my-0 w-[300px]">
      <a-select
        v-model="value"
        class="w-[291px] p-[1.25rem]"
        show-search
        placeholder="Select a course"
        :options="options"
        :filter-option="filterOption"
        @change="changeCard"
      />
      <img
        src="/courses-icons/sort.svg"
        alt="sort"
        :class="sortValue ? 'rotateImg' : 'resetRotateImg'"
        @click="sortCards"
      >
    </div>
    <div
      class="grid grid-box md:grid-cols-[repeat(auto-fill,minmax(350px,1fr))] lg:gap-6 gap-[3.125rem] lg:mt-[3.125rem] lg:pt-0 pt-[3.125rem]"
    >
      <div
        v-for="card in sortedData"
        :key="card.title"
        class="flex flex-col items-center justify-between   lg:border lg:border-lightGray md:border md:border-lightGray md:p-6 rounded-md gap-6 lg:p-6"
      >
        <CoursesOneCard
          :body="card.body"
          :title="card.title"
          :date="card.date"
          :img="card.img"
        />
        <div class="flex-col flex items-center justify-between gap-[1.5rem]">
          <div class="lg:flex hidden items-center gap-5">
            <CoursesCardsIcons :icons="card.icons" />
          </div>
          <CoursesCalendar :date-dekstop="card.dateDekstop" />
        </div>
        <div class="flex items-center gap-[1rem]   w-[300px]">
          <CButton class="shadow-none w-[8.75rem] lg:w-full px-[31px] lg:block hidden">
            {{ ts('readMore') }}
          </CButton>
          <CButton
            class="bg-blue shadow-none w-[8.75rem]  lg:w-full w-[100%] text-white px-[31px]"
            @click="selectCourse(card.title)"
          >
            {{ ts('apply') }}
          </CButton>
          <CreateAccountComponent />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {useScopedI18n} from "~/utils/scopedI18n"
import CreateAccountComponent from "../../CreateAccountComponent";
import CButton from "~/components/universal/CButton";
import CoursesCardsIcons from "~/components/pages/courses/courses-cards/CoursesCardsIcons";
import CoursesCalendar from "~/components/pages/courses/courses-cards/CoursesCalendar";
import FilterPartComponent from "~/components/pages/courses/filter/FilterPartComponent";
import {ref,computed} from 'vue'
import CoursesOneCard from "~/components/pages/courses/courses-cards/CoursesOneCard";
import dayjs from "dayjs";
import {useRoute, useRouter} from "nuxt/app";
import { useSelectedCourse } from '~/store/selectedCourse'
import { useModalState } from '~/store/modalState'

export default {
  name: "CoursesCardsPartComponent",
  components: {CoursesOneCard, FilterPartComponent, CreateAccountComponent,  CButton, CoursesCardsIcons, CoursesCalendar},
  setup() {
    const route = useRoute()
    const router = useRouter()
    const modalApplication = ref(route.query.type)

    const {ts} = useScopedI18n('courses')

    const store = useSelectedCourse()
    const modalStore = useModalState()

    const value = ref(null)
    const cardsData = computed(()=>[
      {
        title: "BACK-END",
        body: ts('backEndBody'),
        img: "backEnd",
        icons: ["java", "git", "springFramework", "gradle", "hibernate"],
        date: ts('backEndDate'),
        dateDekstop: dayjs('2022-07-01').format('D MMMM YYYY')
      },
      {
        title: "MOBILE",
        body: ts('mobileBody'),
        img: "mobile",
        icons: ["flutter", "dart", "firebase", "sQLite", "googleMaps"],
        date: ts('mobileDate'),
        dateDekstop: dayjs('2022-07-01').format('D MMMM YYYY')
      },
      {
        title: "UI/UX DESIGN",
        body: ts('ui/uxBody'),
        img: "uiUx",
        icons: ["figma", "adobeIlustrator", "adobePhotoshop", "unsplash"],
        date: ts('ui/uxDate'),
        dateDekstop: dayjs('2022-09-12').format('D MMMM YYYY')

      },
      {
        title: "FRONT-END",
        body: ts('frontEndBody'),
        img: "frontEnd",
        icons: ["html5", "CSS", "sass", "javascript", "react", "git"],
        date: ts('frontEndDate'),
        dateDekstop: dayjs('2022-07-01').format('D MMMM YYYY')
      },
      {
        title: "QA",
        body: ts('qaBody'),
        img: "qa",
        icons: ["qase", "jira", "figma", "swagger"],
        date: ts('qaDate'),
        dateDekstop: dayjs('2022-07-01').format('D MMMM YYYY')
      },
    ]);

    const options = [
      {value: 'BACK-END', label: 'BACK-END'},
      {value: 'MOBILE', label: 'MOBILE'},
      {value: 'UI/UX DESIGN', label: 'UI/UX DESIGN'},
      {value: 'FRONT-END', label: 'FRONT-END'},
      {value: 'QA', label: 'QA'},]

    const sortedData = ref(cardsData.value)
    const sortValue = ref(false)

    const filterOption = (input, option) => {
      return option.value.toLowerCase().indexOf(input.toLowerCase()) >= 0;
    };

    const changeCard = (value) => {
      sortedData.value = [...cardsData.value].filter((item) => item.title === value)
    }

    const sortCards = () => {
      if (sortValue.value) {
        sortValue.value = !sortValue.value
        sortedData.value = sortedData.value.sort((a, b) => a.title.localeCompare(b.title)) //desc

      } else {
        sortedData.value = sortedData.value.sort((a, b) => b.title.localeCompare(a.title)) // asc
        sortValue.value = !sortValue.value
      }
    }
    const selectCourse = (course) => {
      store.selectCourse(course)
      // router.push({ name: 'form-course' })
      modalStore.toggleModal()
    }

    return {
      modalApplication,
      sortedData,
      options,
      filterOption,
      ts,
      value,
      changeCard,
      sortCards,
      sortValue,
      selectCourse,
    };
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  .rotateImg {
    transform: rotate(-180deg);
    transition: 1s;
  }

  .resetRotateImg {
    transform: rotate(0deg);
    transition: 1s;
  }

  .ant-select-selector {
    border-radius: 6px !important;
  }

  .shadow-none {
    box-shadow: none;
  }

  :deep {
    .anticon {
      font-size: 13px !important;
      color: black;
    }

    .anticon .anticon-down .ant-select-suffix {
      font-size: 13px !important;
      color: black;
    }
  }
}

</style>
