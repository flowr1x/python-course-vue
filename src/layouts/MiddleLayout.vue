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
  computed: {
    ...mapGetters([
      "getCurrentPractices",
      "getInfoUser",
      "getListAllUsers",
    ]),
  },
  async mounted() {
    try {
      await this.fetchUserPractice();
      if (!Object.keys(this.getCurrentPractices).length) {
        await this.fetchPractice();
      }
      if (!Object.keys(this.getInfoUser).length) {
        await this.fetchInfo();
      }
      if (!Object.keys(this.getListAllUsers).length) {
        await this.fetchListAllUser();
      }
    } catch(error) {

    } finally {
      this.showPreloader = false;
    }
  },
  methods: {
    ...mapActions({
      fetchUserPractice: "fetchUserPractice",
      fetchPractice: "fetchPractice",
      fetchInfo: "fetchInfo",
      fetchListAllUser: "fetchListAllUser",
    }),
  }
}
</script>
