<template>
  <div class="icon-menu__burger" 
    @click="onClickBurger" 
    :class="{'menu-icon_active': isActive}">
    <span></span>
  </div>
</template>

<script>
export default {
  name: "icon-burger",
  props: ["isActive"], 
  data() {
    return {
      isOpen: false,
    }
  },
}
</script>
