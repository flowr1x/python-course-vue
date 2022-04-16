<template>
  <div class="icon-menu__burger" 
    @click="onClickBurger" 
    :class="{'menu-icon_active': isOpen}">
    <span></span>
  </div>
</template>

<script>
export default {
  name: "icon-burger",
  data() {
    return {
      isOpen: false,
    }
  },
  methods: {
    onClickBurger() {
      this.isOpen = !this.isOpen;
      this.$emit("onClickBurger", this.isOpen);
    }
  }
}
</script>
