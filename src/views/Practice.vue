<template>
  <div class="manual__list list-manual">
    <transition-group name="list-theme">
      <div class="list-manual__item" v-for="item in listManualItem" :key="item.path">
        <div class="list-manual__header">
          <router-link :to="item.path" class="list-manual__link">{{ item.title }}</router-link>
          <h3 class="list-manual__title">{{ item.subtitle }}</h3>
        </div>
        <div class="list-manual__body">
          <div class="list-manual__buttons list-manual__buttons_double">
            <router-link :to="item.path" class="list-manual__btn btn">Посмотреть</router-link>
            <a :href="item.document" download class="list-manual__btn btn">Скачать</a>
          </div>
        </div>  
      </div>
    </transition-group>
  </div>
</template>

<script>
import {practiceManualItem} from "@/mocks/headerTheory.js";

export default {
  data() {
    return {
      listManualItem: practiceManualItem
    }
  }, 
  
}
</script>

