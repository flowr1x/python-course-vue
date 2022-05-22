<template>
  <div class="profile__practice profile-practice">
    <h3 class="profile-practice__title">Практические работы</h3>
    <practice-item 
      v-for="(obj, practice) in list" 
      :practice="obj"
      :key="obj.id"
      @remove="$emit('remove', practice)"/>
    <div class="profile-practice__error" v-if="!isEmpty(list)">Практических нет</div>
  </div> 
</template>
<script>
import PracticeItem from "@/components/PracticeItem.vue";

export default {
  name: "practice-list",
  components: {
    PracticeItem
  },
  props: {
    list: {
      type: Object,
      required: true,
    }
  },
  methods: {
    isEmpty(obj) {
      for (let item in obj) return true;
      return false
    }
  }

}
</script>
