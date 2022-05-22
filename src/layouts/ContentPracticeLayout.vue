<template>
  <div class="wrapper">
    <Header/>
    <main class="page">
      <section class="page__manual manual">
        <div class="manual__container">
          <div class="manual__title">
            <h2>Содержание</h2>
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
            <div class="manual__list list-manual">
              <router-view :path="document"/>
              <div class="manual__btns-change-page btns-change-page">
                <div class="btns-change-page__block">
                  <button button class="btns-change-page__btn" 
                    :class="{'btns-change-page__btn_hide':!this.prevPath}" 
                    @click="this.$router.push(prevPath)">Предыдущая</button>
                </div>
                <div class="btns-change-page__block">
                  <button class="btns-change-page__btn"
                    :class="{'btns-change-page__btn_hide':!this.nextPath}" 
                    @click="this.$router.push(nextPath)">Следующая</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <button-scroll-top />
    </main>
    <Footer/>
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import AsideList from "@/components/AsideList.vue";
import {practiceManualItem} from "@/mocks/headerTheory.js"


export default {
  components: {
    Header, Footer, AsideList
  },
  data() {
    return {
      isActive: false,
      listManualItem: practiceManualItem, 
      currentPath: "",
      nextPath: "",
      prevPath: "",
      document: "",
    }
  },
  created() {
    this.setCurrentPath();
    this.getDocument();
  },
  watch: {
    "$route"() {
      this.setCurrentPath();
    }
  },
  methods: {
    getDocument() {
      
    },
    setCurrentPath() {
      this.currentPath = this.$route.path;
      
      practiceManualItem.forEach((page, index, arr) => {
        if (page.path === this.currentPath) {
          const nextPage = arr[index+1];
          const prevPage = arr[index-1];
          this.document = page.document;
          if (nextPage) this.nextPath = nextPage.path;
          else this.nextPath = false;

          if (prevPage) this.prevPath = prevPage.path; 
          else this.prevPath = false;
        }
      })
    } 
  }
}
</script>
