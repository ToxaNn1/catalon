<template>
  <section class=" px-[1.25rem] container mx-auto shedule-wrapper">
    <div class="flex item-center my-[1.25rem] justify-between">
      <p class="text-[1.5rem] mb-0 text-violet text-medium leading-[1.8rem]">
        {{ ts('courses') }}
      </p>
      <img
        src="/cabinet-icons/addButton.svg"
        alt="button"
        class="cursor-pointer"
        @click="store.toggleModal()"
      >
      <AddUserModal
        v-if="store.getModalState"
        :show="store.getModalState"
      />
    </div>
    <div>
      <a-tabs v-model:activeKey="activeKey">
        <a-tab-pane
          key="1"
          :tab="ts('sheduled')"
          class="mb-[1.25rem]"
        >
          <a-table
            :data-source="data"
            :columns="columns"
            :pagination="{ hideOnSinglePage: true }"
            :scroll="{ x: 1300, y: 1000 }"
          >
            <template #bodyCell="{ column }">
              <template v-if="column.key === 'action'">
                <ScheduleDropdown />
              </template>
            </template>
          </a-table>
        </a-tab-pane>
        <a-tab-pane
          key="2"
          :tab="ts('active')"
          class="mb-[1.25rem]"
        >
          <a-table
            :data-source="data"
            :columns="columns"
            :pagination="{ hideOnSinglePage: true }"
            :scroll="{ x: 1300, y: 1000 }"
          >
            <template #bodyCell="{ column }">
              <template v-if="column.key === 'action'">
                <ActiveDropdown />
              </template>
            </template>
          </a-table>
        </a-tab-pane>
        <a-tab-pane
          key="3"
          :tab="ts('completed')"
          class="mb-[1.25rem]"
        >
          <a-table
            :data-source="data"
            :columns="columns"
            :pagination="{ hideOnSinglePage: true }"
            :scroll="{ x: 1300, y: 1000 }"
          >
            <template #bodyCell="{ column }">
              <template
                v-if="column.key === 'action'"
              >
                <CompletedDropdown />
              </template>
            </template>
          </a-table>
        </a-tab-pane>
      </a-tabs>
    </div>
  </section>
</template>
<script>
import {computed, ref} from 'vue'
import ScheduleDropdown from "~/components/pages/cabinet/ScheduleDropdown";
import ActiveDropdown from "~/components/pages/cabinet/ActiveDropdown";
import CompletedDropdown from "~/components/pages/cabinet/CompletedDropdown";
import AddUserModal from "~/components/pages/cabinet/AddUserModal";
import {useModalState} from "~/store/modalState";
import {useScopedI18n} from "~/utils/scopedI18n";


export default {
  name: "SheduledCourses",
  components: {AddUserModal, ScheduleDropdown, ActiveDropdown, CompletedDropdown},

  setup() {
    const {ts} = useScopedI18n('sheduled')
    const data = [
      {
        ['Course Name']: 'Back-End Q3 2022',
        id: 1,
        occupation: 'UX DESIGN',
        ['Start Date']: 'Jul 1,2022',
        ['End Date']: 'Sep 1,2022',
        students: 6,
        level: 'entry',
        price: 'free',
        location: 'Remote',
        action: '...'
      },
      {
        ['Course Name']: 'Front-End',
        id: 2,
        occupation: 'UX DESIGN',
        ['Start Date']: 'Jul 1,2022',
        ['End Date']: 'Sep 1,2022',
        students: 6,
        level: 'entry',
        price: 'free',
        location: 'Remote',
        action: '...'
      },
      {
        ['Course Name']: 'Mobile',
        id: 3,
        occupation: 'UX DESIGN',
        ['Start Date']: 'Jul 1,2022',
        ['End Date']: 'Sep 1,2022',
        students: 6,
        level: 'entry',
        price: 'free',
        location: 'Remote',
        action: '...'
      },
      {
        ['Course Name']: 'UI/UX Design',
        id: 4,
        occupation: 'UX DESIGN',
        ['Start Date']: 'Jul 1,2022',
        ['End Date']: 'Sep 1,2022',
        students: 6,
        level: 'entry',
        price: 'free',
        location: 'Remote',
        action: '...'
      },
      {
        ['Course Name']: 'QA',
        id: 5,
        occupation: 'UX DESIGN',
        ['Start Date']: 'Jul 1,2022',
        ['End Date']: 'Sep 1,2022',
        students: 6,
        level: 'entry',
        price: 'free',
        location: 'Remote',
        action: '...'
      }]

    const columns = computed(()=>[
      {
        title: ts('courseName'),
        dataIndex: ['Course Name'],
        key: 'id',
      },
      {
        title: ts('occupation'),
        dataIndex: 'occupation',
        key: 'id',
      },
      {
        title: ts("startDate"),
        dataIndex: ['Start Date'],
        key: 'id'
      },
      {
        title: ts('endDate'),
        dataIndex: ['End Date'],
        key: 'id'
      },
      {
        title: ts('students'),
        dataIndex: 'students',
        key: 'id'
      },
      {
        title: ts('level'),
        dataIndex: 'level',
        key: 'id'
      },
      {
        title: ts('price'),
        dataIndex: 'price',
        key: 'id'
      },
      {
        title: ts('location'),
        dataIndex: 'location',
        key: 'id'
      },
      {
        title: '',
        dataIndex: 'action',
        key: 'action',
        fixed: 'right',
        width: 70,
        align: 'center'
      }
    ])

    const store = useModalState()

    const activeKey = ref('1')

    return {
      activeKey,store, data, columns, ts
    };
  },

}
</script>

<style scoped lang="scss">
body::-webkit-scrollbar-track {
  background: red !important;
}

body::-webkit-scrollbar-thumb {
  background-color: var(--thumbBG);
  border-radius: 6px;
  border: 3px solid var(--scrollbarBG);
}

.shedule-wrapper {
  margin-top: 100px;
  margin-bottom: 100px;
  scrollbar-color: red;

  &:deep(.ant-tabs-top > .ant-tabs-nav::before .ant-tabs-nav::after){
    display: none !important;
  }

  &:deep(.ant-tabs-nav-operations > button){
    display: none;
  }

  &:deep(.ant-table-cell::before) {
    width: 0px !important;
  }

  &:deep(.ant-tabs-nav-list){
    @apply flex w-full  lg:justify-start md:justify-start  items-center justify-center gap-[0.75rem];
  }
  &:deep(.ant-tabs-tab){
    @apply m-0;
    &:deep(.ant-tabs-ink-bar .ant-tabs-ink-bar-animated){
      width: 0px !important;
    }
    &>div{
    @apply text-veryDarkGray text-[0.875rem] leading-[1.875rem] border-gray border  px-[1.188rem] py-[0px] rounded-md bg-white;
  }}

  &:deep(.ant-tabs-tab-active > div){
    @apply text-white bg-blue text-[0.875rem] leading-[1.875rem] border-none border px-[1.188rem] py-[0px] rounded-md;
  }

}

</style>