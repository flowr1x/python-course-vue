<template>
      <swiper
        class="sliders__content"
        :modules="modules"
        effect="creative"
        :slides-per-view="1"
        :space-between="50"
        navigation
        :pagination="{ clickable: true }"
        :scrollbar="{ draggable: true }"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
      >
          <swiper-slide class="swiper-slide swiper-slide_1">Slide 1</swiper-slide>
          <swiper-slide class="swiper-slide swiper-slide_2">Slide 2</swiper-slide>
          <swiper-slide class="swiper-slide swiper-slide_3">Slide 3</swiper-slide>
      </swiper>
</template>
<script>
  // Import Swiper Vue.js components
  import { Navigation, Pagination, Scrollbar, A11y, EffectCreative, Virtual } from 'swiper';
  import { Swiper, SwiperSlide } from 'swiper/vue/swiper-vue';

  // Import Swiper styles
  import 'swiper/swiper-bundle.css';

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      const onSwiper = (swiper) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log('slide change');
      };
      return {
        onSwiper,
        onSlideChange,
        modules: [Navigation, Pagination, Scrollbar, A11y, EffectCreative, Virtual],
      };
    },
  };
</script>

<style scope>
.swiper-slide {
 height: 200px;
}
.swiper-slide_1 {
  background: pink;
}
.swiper-slide_2 {
  background: green;
}
.swiper-slide_3 {
  background: red;
}
</style>
