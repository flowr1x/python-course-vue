<template>
  <div class="slider">
    <swiper
      class="slider__content"
      :modules="modules"
      effect="creative"
      :slides-per-view="1"
      :space-between="50"
      navigation
      :pagination="{ clickable: true }"
     
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide
        class="slider__slide"
        v-for="practice in practices"
        :key="practice.id">
        <my-slide 
          :practice="practice"
          @sendPracticeInUser="(item) => $emit('sendPracticeInUser', item)"/>
      </swiper-slide>
    </swiper>
    <div class="profile-practice__error" v-if="!isEmpty(practices)">Заданий нет</div>
  </div>
</template>
<script>
// Import Swiper Vue.js components
import { Navigation, Pagination, A11y, EffectCreative, Virtual } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue/swiper-vue';
import MySlide from "@/components/ComponentsProfile/MySlide";

// Import Swiper styles
import 'swiper/swiper-bundle.css';

export default {
  name: "my-slider",
  props: [
    "practices",
  ],
  mounted() {
    console.log(this.practices);
  },
  components: {
    Swiper,
    SwiperSlide,
    MySlide
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
      modules: [Navigation, Pagination, A11y, EffectCreative, Virtual],
    };
  },
  computed: {
    isAdmin() {
      return this.$store.getters.isAdmin;  
    }
  },
  methods: {
    isEmpty(obj) {
      for (let item in obj) return true;
      return false
    },
  },
}
</script>
