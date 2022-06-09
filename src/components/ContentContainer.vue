<template>
  <div>
    <slot v-if="status" name="loading">
      <Preloader :show="true"/>
    </slot>
    <slot name="content" />
  </div>
</template>

<script>
import Preloader from "@/components/UI/Preloader.vue";

export default {
  name: "ContentContainer",
  components: {
    Preloader
  },
  props: {
    status: {
      type: Boolean,
      required: true,
    }
  },
}
</script>
