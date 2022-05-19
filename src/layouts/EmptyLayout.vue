<template>
   <div class="wrapper">
        <div class="form__content">
          <router-view />
        </div>
    </div>
</template>

<script>
import messages from "@/plugins/messages.js"

export default {
  computed: {
    error() {
      return this.$store.getters.error;
    }
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
