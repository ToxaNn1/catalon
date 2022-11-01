<template>
  <div>
    <HeaderPartComponent />
    <WeDoPartComponent />
    <WhatWillDoComponent />
    <ValuesCardComponent />
    <AccordionPartComponent />
    <ProjectComponent />
    <TestimonalsComponent />
    <FooterPartComponent />
  </div>
</template>

<script>
import HeaderPartComponent from "~/components/pages/home/header-part/HeaderPartComponent";
import WeDoPartComponent from "~/components/pages/home/what-we-do/WeDoPartComponent";
import WhatWillDoComponent from "~/components/pages/home/what-will-do/WhatWillDoComponent";
import ValuesCardComponent from "~/components/pages/home/values-card/ValuesCardComponent";
import AccordionPartComponent from "~/components/pages/home/accordion/AccordionPartComponent";
import ProjectComponent from "~/components/pages/home/projects/ProjectComponent";
import TestimonalsComponent from "~/components/pages/home/testimonals/TestimonalsComponent";
import FooterPartComponent from "~/components/pages/home/footer-part/FooterPartComponent";

export default {
  name: "Index",
  components: {
    FooterPartComponent,
    ProjectComponent,
    TestimonalsComponent,
    AccordionPartComponent,
    ValuesCardComponent,
    WhatWillDoComponent,
    WeDoPartComponent,
    HeaderPartComponent,
  },
};
</script>
