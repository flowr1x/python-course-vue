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
        <practice-item-user
          :practice="practiceObj"
          :idPractice="practiceName"
          :userPractices="practices"
          @sendPracticeInUser="(item) => this.$emit('sendPracticeInUser', item)"/>
      </swiper-slide>
    </swiper>
    <div class="profile-practice__error" v-if="!isEmpty(list)">Актуальные заданий нет</div>
  </div>
</template>

<script>
// Import Swiper Vue.js components
import { Navigation, Pagination, A11y, EffectCreative, Virtual } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue/swiper-vue';
import PracticeItemUser from "@/components/ComponentsProfile/PracticeItemUser.vue";

// Import Swiper styles
import 'swiper/swiper-bundle.css';

export default {
  name: "practice-list",
  props: [
    "list",
    "practices",
  ],
  mounted() {
    console.log(this.practices);
  },
  components: {
    Swiper,
    SwiperSlide,
    PracticeItemUser
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
  methods: {
    isEmpty(obj) {
      for (let item in obj) return true;
      return false
    },
  },
};
</script>
