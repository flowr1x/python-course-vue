<template>
    <div style="height: 500px; overflow-y: scroll; background: #fff;">
      <pdf :src="pdfdata"
        v-for="page in numPages"
        :key="page"
        :id="page"
        :page="page"
        :text="false" />
    </div>
</template>

<script>
import pdf from 'pdfvuer';

export default {
	props: {
    path: String,
  },
  data() {
    return {
      numPages: 0,
      pdfdata: undefined,
    }
  },
  mounted() {
    this.getPDF();
  },
  methods: {
    getPDF() {
      this.pdfdata = pdf.createLoadingTask(this.path);
      this.pdfdata.then(pdf => {
        this.numPages = pdf.numPages;
      });
    }
  }
};
</script>
