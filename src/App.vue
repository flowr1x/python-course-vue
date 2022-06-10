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
import VideoLayout from "@/layouts/VideoLayout.vue"; 

export default {
  computed: {
    layout() {
      return (this.$route.meta.layout || "empty") + "-layout";
    },
    mode() {
      return this.$store.getters.mode;
    }
  },
  async created() {
    this.$store.dispatch("changeDarkMode", localStorage.getItem("mode"));
  },
  mounted() {
    this.$store.dispatch("getUid");
  },
  components: {
    EmptyLayout, MainLayout, MiddleLayout, ContentLayout, MainPracticeLayout, ContentPracticeLayout,VideoLayout
  },
}
</script>
<style lang="scss">

</style>
