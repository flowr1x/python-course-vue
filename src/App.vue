<template>
  <div class="app" :class="mode">
    <component :is="layout" :mode="mode" @toggle="toggle">
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
  data() {
    return {
      mode: "default"
    }
  },
  computed: {
    layout() {
      return (this.$route.meta.layout || "empty") + "-layout";
    }
  },
  created() {
    this.mode = localStorage.getItem("mode");
  },
  components: {
    EmptyLayout, MainLayout, MiddleLayout, ContentLayout, MainPracticeLayout, ContentPracticeLayout
  },
  methods: {
    toggle() {
      if (this.mode === "dark") this.mode = "default";
      else this.mode = "dark";
      localStorage.setItem("mode", this.mode);
    }
  }
}
</script>
