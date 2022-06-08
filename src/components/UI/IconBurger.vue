<template>
  <div class="icon-menu__burger" 
    :class="{'menu-icon_active': isActive}">
    <span></span>
  </div>
</template>

<script>
export default {
  name: "icon-burger",
  props: {
    isActive: {
      type: Boolean, 
      default: false,
    }
  }, 
}
</script>
