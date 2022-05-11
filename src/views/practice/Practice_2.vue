<template>
  <MyViewerPdf :path="'./static/practice_2.pdf'"/>
</template>

<script>
import MyViewerPdf from "@/components/MyViewerPdf.vue"
export default {
  components: {
    MyViewerPdf
  }
}
</script>
