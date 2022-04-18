<template>
  <GlobalEvents @scroll="showButtonToTopHide"/>
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
              <input type="text" class="search-beginpage__input">
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
              <router-view />
            </div>
          </div>
          <div id="btn-scroll-top" 
            class="manual__btn-top"
            :class="{'manual__btn-top_hide': isActiveBtnToTop}"
            @click="scrollToTop">
            <svg class="svg-icon" viewBox="0 0 20 20">
					    <path fill="none" d="M14.989,9.491L6.071,0.537C5.78,0.246,5.308,0.244,5.017,0.535c-0.294,0.29-0.294,0.763-0.003,1.054l8.394,8.428L5.014,18.41c-0.291,0.291-0.291,0.763,0,1.054c0.146,0.146,0.335,0.218,0.527,0.218c0.19,0,0.382-0.073,0.527-0.218l8.918-8.919C15.277,10.254,15.277,9.784,14.989,9.491z"></path>
					  </svg>
          </div>
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
      listManualItem: listManualItem,
      offestBtnTop: 400,
      isActiveBtnToTop: false,
    }
  },
  methods: {
    showButtonToTopHide(event) {
      if (this.offestBtnTop < window.pageYOffset && !this.isActiveBtnToTop) {
        this.isActiveBtnToTop = true;
      } else if (this.offestBtnTop > window.pageYOffset && this.isActiveBtnToTop) {
        this.isActiveBtnToTop = false;
      }
    },
    scrollToTop() {
      if (window.pageYOffset > 0) {
        window.scrollBy(0, -60);
        setTimeout(this.scrollToTop, 0);
      } 
    },
  }
}
</script>
