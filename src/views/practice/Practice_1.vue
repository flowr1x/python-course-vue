<template>
  <MyViewerPdf :path="path"/>
</template>

<script>
import MyViewerPdf from "@/components/MyViewerPdf.vue"
export default {
  props: {
    path: String,
  },
  components: {
    MyViewerPdf
  },
}
</script>
