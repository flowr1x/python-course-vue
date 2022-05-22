<template>
  <div 
    class="dialog" 
    v-if="show" 
    @click.stop="$emit('update:show', false)">
    <div @click.stop class="dialog__content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "my-dialog",
  props: {
    show: {
      type: Boolean,
      default: false,
    }
  },
  methods: {
  }
}
</script>
