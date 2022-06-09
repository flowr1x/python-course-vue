<template>
   <div class="wrapper">
      <Header/>
      <div class="class">
        <router-view />
      </div>
    </div>
    <div id="intro"></div>
</template>

<script>
import messages from "@/plugins/messages.js"
import Header from "@/components/Header.vue";


export default {
  computed: {
    error() {
      return this.$store.getters.error;
    }
  },
   components: {
    Header
  },
  watch: {
    error(fbError) {
      console.log(fbError.code);
      this.$error(messages[fbError.code] || "Неизвестаная ошибка");
    }
  }
}
</script>
<style lang="sass">

</style>
