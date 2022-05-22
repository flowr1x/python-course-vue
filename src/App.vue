<template>
  <div class="app" :class="mode">
    <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>

<script>
import EmptyLayout from "@/layouts/EmptyLayout.vue"; 
import MainLayout from "@/layouts/MainLayout.vue"; 
import MiddleLayout from "@/layouts/MiddleLayout.vue"; 
import ContentLayout from "@/layouts/ContentLayout.vue"; 
import MainPracticeLayout from "@/layouts/MainPracticeLayout.vue";
import ContentPracticeLayout from "@/layouts/ContentPracticeLayout.vue"; 

export default {
  computed: {
    layout() {
      return (this.$route.meta.layout || "empty") + "-layout";
    },
    mode() {
      return this.$store.getters.mode;
    }
  },
  created() {
    this.$store.dispatch("changeDarkMode", localStorage.getItem("mode"));
  },
  components: {
    EmptyLayout, MainLayout, MiddleLayout, ContentLayout, MainPracticeLayout, ContentPracticeLayout
  },
  methods: {

  }
}
</script>
<style lang="scss">

</style>
