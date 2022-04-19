<template>
  <div class="manual__list list-manual"> <!--manuel__list list-manual-->
    <div class="list-manual__item" v-for="item in listManualItem" :key="item.path">
      <div class="list-manual__header">
        <router-link :to="item.path" class="list-manual__link">{{ item.title }}</router-link>
        <h3 class="list-manual__title">{{ item.subtitle }}</h3>
      </div>
      <div class="list-manual__body">
        <ul class="list-manual__list list-sub">
          <li class="list-sub__item" v-for="li in item.shortlinks" :key="li.path">
            <div class="list-sub__content">
              <router-link :to="{path:li.path, hash: li.link}" class="list-sub__link">{{ li.title }}</router-link>
            </div>
          </li>
        </ul>
        <div class="list-manual__buttons">
          <router-link :to="item.path" class="list-manual__btn btn btn-red">Посмотреть главу</router-link>
        </div>
      </div>  
    </div>
  </div>
</template>

<script>
import listManualItem from "@/mocks/headerTheory.js";
export default {
  name: 'Home',
 
  data() {
    return {
      isActive: false,    
      listManualItem: listManualItem
    }
  },
  
}
</script>
