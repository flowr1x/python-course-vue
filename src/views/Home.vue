<template>
  <div>
    <section class="page__beginpage beginpage">
      <div class="beginpage__container">
        <div class="beginpage__title title-beginpage">
          <h1 class="title-beginpage__title">Современный учебник Python</h1>
          <p class="title-beginpage__text">
            Учебник посвещен изучению основ языкy программирования Python. Разработчик Гвидо ван Россум создал Python 20 февраля 1991 года.
          </p>
        </div>
        <div class="beginpage__search">
          <div class="search-beginpage">
            <input v-model="textInput" type="text" class="search-beginpage__input" placeholder="Поиск">
          </div>
        </div>
      </div>
    </section>
    <section class="page__manual manual">
      <div class="manual__container">
        <div class="manual__title">
          <h2>Содержание</h2>
          <icon-burger 
            v-if="Object.keys(listManualItem).length" 
            id="menu__icon_aside" :isActive="isActive" 
            @click="isActive = !isActive"/>
        </div>
        <div class="manual__content">
          <aside class="manual__aside" :class="{'manual__aside_hide': !isActive}">
            <nav class="manual__nav nav-aside">
              <div class="nav-aside__body" :class="{'nav-aside__body_active': !isActive}">
                <aside-list v-for="item in listManualItem"
                  class="nav-aside__item"
                  :key="item.path"
                  :title="item.title"
                  :subtitle="item.subtitle"
                  :path="item.path"/>
              </div>
            </nav>
          </aside>
          <section class="manual__list list-manual" :class="{'list-manual_fill': !isActive}">
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
              <div v-if="!Object.keys(listManualItem).length">Лекций с таким названием не найдено</div>
            </transition-group>
          </section>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import listManualItem from "@/mocks/headerTheory.js";
import messages from "@/plugins/messages.js";
import AsideList from "@/components/AsideList.vue";

export default {
  name: 'Home',
  data() {
    return {
      isActive: false,    
      listManualItem,
      textInput: "",
    }
  },
  components: {
    AsideList
  },
  mounted() {
    // Проверяет query запрос, для вывода сообщения из messeages.js
    const query = this.$route.query.message;
    if (query) this.$message(messages[query]);
  },
  watch: {
    // Поиск лекций из списка 
    textInput(newText, oldText) {
      this.listManualItem = listManualItem.filter(item => item
        .subtitle.toLowerCase()
        .includes(this.textInput.toLowerCase()));
    }
  },
}
</script>
