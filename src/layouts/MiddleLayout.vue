<template>
  <div class="wrapper">
    <Header/>
    <main class="page">
      <router-view />
    </main>
    <Footer/>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Header, Footer
  },
  async mounted() {
    if (!Object.keys(this.$store.getters.practice).length) {
      await this.$store.dispatch("fetchPractice");
    }
    await this.$store.dispatch("fetchUserPractice");
    if (!Object.keys(this.$store.getters.info).length) {
      await this.$store.dispatch("fetchInfo");
    }
    if (!Object.keys(this.$store.getters.users).length) {
      await this.$store.dispatch("fetchListAllUser");
    }
  },

}
</script>
