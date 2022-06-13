<template>
  <div class="video__wrapper">
    <iframe loading="lazy" width="560" height="315" src="https://www.youtube.com/embed/i0g4mQbMexg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
</template>

<script>
export default {
  name: "show-video",
  props: ["link"],
  watch: {
    link() {
      this.changeLink();
    }
  },
  methods: {
    changeLink() {
      const el = document.querySelector("iframe");
      el.setAttribute("src", "https://www.youtube.com/embed/" + this.link);
    }
  }
}
</script>
