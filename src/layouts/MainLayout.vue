<template>
  
  <div class="wrapper">
    <Header/>
    <main class="page">
      <section class="page__beginpage beginpage">
        <div class="beginpage__container">
          <div class="beginpage__title">
            <h1>Современный учебник Python</h1>
            <div class="beginpage__subtitle">
              Учебник посвещен изучению основ языкy программирования Python. Разработчик Гвидо ван Россум создал его 20 февраля 1991 года.
            </div>
          </div>
          <div class="beginpage__search">
            <form action="#" class="search-beginpage">
              <input v-model="searchInput" type="text" class="search-beginpage__input">
              <button class="search-beginpage__btn">Найти</button>
            </form>
          </div>
        </div>
      </section>
      <section class="page__manual manual">
        <div class="manual__container">
          <div class="manual__title">
            <h2>Содержание </h2>
            <icon-burger id="menu__icon_aside" :isActive="isActive" @click="isActive = !isActive"/>
          </div>
          <div class="manual__content ">
            <aside class="manual__aside" :class="{'manual__aside_hide': !isActive}">
              <nav class="manual__nav nav-aside">
                <div class="nav-aside__body" :class="{'nav-aside__body_active': !isActive}">
                  <aside-list v-for="item in listManualItem"
                    class="nav-aside__item" 
                    :key="item.path"
                    :title="item.title"
                    :subtitle="item.subtitle"
                    :path="item.path"    
                  />
                </div>
              </nav>
            </aside>
            <div class="manual__list list-manual" :class="{'list-manual_fill': !isActive}">
              <router-view :textInput="searchInput"/>
            </div>
          </div>
          <button-scroll-top />
        </div>
      </section>
    </main>
    <Footer/>
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import AsideList from "@/components/AsideList.vue";
import listManualItem from "@/mocks/headerTheory.js"

export default {
  components: {
    Header, Footer, AsideList
  },
  data() {
    return {
      isActive: false,
      listManualItem,
      searchInput: "",
    }
  },
}
</script>
