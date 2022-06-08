<template>
  <div class="manual__list list-manual">
    <transition-group name="list-theme">
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
            <router-link :to="item.path" class="list-manual__btn btn">Посмотреть</router-link>
          </div>
        </div>  
      </div>
    </transition-group>
  </div>
</template>

<script>
import themes from "@/themes/index.js";
import listManualItem from "@/mocks/headerTheory.js";
import messages from "@/plugins/messages.js";

export default {
  name: 'Home',
  props: [
    'textInput'
  ],
  data() {
    return {
      isActive: false,    
      listManualItem
    }
  },
  mounted() {
    // Проверяет query запрос, для вывода сообщения из messeages.js
    const query = this.$route.query.message;
    if (query) this.$message(messages[query]);
  },
  watch: {
    textInput(newText, oldText) {
      this.listManualItem = listManualItem.filter(item => item
        .subtitle.toLowerCase()
        .includes(this.textInput.toLowerCase()));
    }
  },
  methods: {
    changeThemesApp() {
      let bodyStyles = document.body.style;
      const darkTheme = themes.dark;
      for (let color in darkTheme) {
        bodyStyles.setProperty(color, darkTheme[color]);
      }
    }
  }
}
</script>
<style scoped>
.list-theme-enter-active,
.list-theme-leave-active {
  transition: all 0.3s ease;
}
.list-theme-enter-from,
.list-theme-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
.list-theme-move {
  transition: transform .5s ease;
}
</style>
