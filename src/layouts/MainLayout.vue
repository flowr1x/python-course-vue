<template>
  <div class="wrapper">
    <Header/>
    <main class="page">
      <router-view/>
      <button-scroll-top />
    </main>
    <Footer/>
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";


export default {
  components: {
    Header, 
    Footer
  },
  // ----- РАЗОБРАТЬСЯ ЗАЧЕМ ЭТО НУЖНО ------
  async mounted() {
    if (!Object.keys(this.$store.getters.getInfoUser).length) {
      await this.$store.dispatch("fetchInfo");
    }
  },
}
</script>
