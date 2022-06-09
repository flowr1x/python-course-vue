<template>
  <ContentContainer :status="showPreloader">
    <template #content>
      <div class="wrapper">
        <Header/>
        <main class="page">
          <router-view />
        </main>
        <Footer/>
      </div>
    </template>
  </ContentContainer>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import ContentContainer from "@/components/ContentContainer"
import {mapGetters, mapActions} from "vuex";

export default {
  components: {
    Header, 
    Footer,
    ContentContainer
  },
  data() {
    return {
      showPreloader: true,
    }
  },
  async mounted() {
    try {
      await this.$store.dispatch("fetchUserPractice");
      if (!Object.keys(this.$store.getters.practice).length) {
        await this.$store.dispatch("fetchPractice");
      }
      if (!Object.keys(this.$store.getters.info).length) {
        await this.$store.dispatch("fetchInfo");
      }
      if (!Object.keys(this.$store.getters.users).length) {
        await this.$store.dispatch("fetchListAllUser");
      }
    } catch(error) {

    } finally {
      this.showPreloader = false;
    }
  },
  methods: {
  }
}
</script>
