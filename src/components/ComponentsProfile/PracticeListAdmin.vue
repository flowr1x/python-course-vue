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
        v-for="(practiceObj, practiceName) in list" 
        :key="practiceName">
        <practice-item-admin 
          :practice="practiceObj"
          @remove="$emit('remove', practiceName)"/>
      </swiper-slide>
    </swiper>
    <div class="profile-practice__error" v-if="!isEmpty(list)">Заданий нет</div>
  </div>
</template>
<script>
import PracticeItemAdmin from "@/components/ComponentsProfile/PracticeItemAdmin.vue";
// Import Swiper Vue.js components
import { Navigation, Pagination, A11y, EffectCreative, Virtual } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue/swiper-vue';


// Import Swiper styles
import 'swiper/swiper-bundle.css';

export default {
  name: "practice-list-admin",
  props: [
    "list",
  ],
  mounted() {
    console.log(this.practices);
  },
  components: {
    Swiper,
    SwiperSlide,
    PracticeItemAdmin,
    
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
  data() {
    return {
      dialogVisible: false,
    }
  },
  methods: {
    isEmpty(obj) {
      for (let item in obj) return true;
      return false
    },

  },
};
</script>
