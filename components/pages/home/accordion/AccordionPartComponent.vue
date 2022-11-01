<template>
  <div class="lg:py-[6.25rem] py-[1.875rem] bg-lightGray lg:mt-[6.25rem] mt-[3.75rem]">
    <div class="container mx-auto">
      <a-collapse
        v-model="activeKey"
        :bordered="false"
        :expand-icon-position="'right'"
        accordion
      >
        <template #expandIcon="{ isActive }">
          <div>
            <img
              class="arrow"
              src="/images/reveal.svg"
              alt="arrow"
              :class="isActive && 'expanded'"
            >
          </div>
        </template>
        <a-collapse-panel
          v-for="accordion in accordionData"
          :key="accordion.header"
          class="bg-lightGray accordion-shadow lg:hover:bg-white lg:text-[2.25rem] text-[1.75rem] md:text-[2rem] text-violet font-medium leading-10"
          :header="accordion.header"
        >
          <component :is="components[accordion.componentName]" />
        </a-collapse-panel>
      </a-collapse>
    </div>
  </div>
</template>
<script>
import {resolveComponent, ref, computed} from "vue";
import {useScopedI18n} from "~/utils/scopedI18n"

export default {
  setup() {
    const {ts} = useScopedI18n('accordionPartComponent')

    const activeKey = ref(null);
    const components = {
      StagesAccordionPartComponent: resolveComponent(
        "PagesHomeAccordionStagesAccordionPartComponent"
      ),
      StepsAccordionPartComponent: resolveComponent(
        "PagesHomeAccordionStepsAccordionPartComponent"
      ),
      RequiredAccordionPartComponent: resolveComponent(
        "PagesHomeAccordionRequiredAccordionPartComponent"
      ),
      PathAccordionPartComponent: resolveComponent(
        "PagesHomeAccordionPathAccordionPartComponent"
      ),
    };
    const accordionData = computed(() => [
      {
        header: ts('whatAreStages'),
        componentName: "StagesAccordionPartComponent",
      },
      {
        header: ts('becomeStudent'),
        componentName: "StepsAccordionPartComponent",
      },
      {
        header: ts('requirementsForApplicants'),
        componentName: "RequiredAccordionPartComponent",
      },
      {
        header: ts('studentsPath'),
        componentName: "PathAccordionPartComponent",
      },
    ])

    return {
      accordionData,
      components,
      activeKey,
    };
  },
};
</script>
<style lang="scss" scoped>
.arrow {
  transition: .3s;

  &.expanded {
    transform: rotate(180deg) !important;
  }
}

.accordion-shadow {
  box-shadow: 0px 25px 50px rgba(0, 0, 0, 0.05);
  border-radius: 6px;
}

.ant-collapse:deep(.ant-collapse-content > .ant-collapse-content-box) {
  padding: 16px 0px 0px 0px;
}

</style>
