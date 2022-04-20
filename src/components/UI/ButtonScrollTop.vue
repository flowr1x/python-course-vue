<template>
  <GlobalEvents @scroll="showButtonToTopHide"/>
  <div id="btn-scroll-top" 
    class="manual__btn-top"
    :class="{'manual__btn-top_hide': isActiveBtnToTop}"
    @click="scrollToTop">
    <svg class="svg-icon" viewBox="0 0 20 20">
      <path fill="none" d="M14.989,9.491L6.071,0.537C5.78,0.246,5.308,0.244,5.017,0.535c-0.294,0.29-0.294,0.763-0.003,1.054l8.394,8.428L5.014,18.41c-0.291,0.291-0.291,0.763,0,1.054c0.146,0.146,0.335,0.218,0.527,0.218c0.19,0,0.382-0.073,0.527-0.218l8.918-8.919C15.277,10.254,15.277,9.784,14.989,9.491z"></path>
    </svg>
  </div>
</template>
<script>
export default {
  name: "button-scroll-top",
  data() {
    return {
      isActiveBtnToTop: false,
      offestBtnTop: 80,
    }
  },
  methods: {
    showButtonToTopHide(event) {
      if (this.offestBtnTop < window.pageYOffset && !this.isActiveBtnToTop) {
        this.isActiveBtnToTop = true;
      } else if (this.offestBtnTop > window.pageYOffset && this.isActiveBtnToTop) {
        this.isActiveBtnToTop = false;
      }
    },
    scrollToTop() {
      if (window.pageYOffset > 0) {
        window.scrollBy(0, -60);
        setTimeout(this.scrollToTop, 0);
      } 
    },
  }
}
</script>
