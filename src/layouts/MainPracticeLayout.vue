<template>
  <div class="wrapper">
    <Header/>
    <main class="page">
      <section class="page__beginpage beginpage">
        <div class="beginpage__container">
          <div class="beginpage__title">
            <h1>Практические работы</h1>
            <div class="beginpage__subtitle">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet maiores qui, similique sit praesentium dignissimos, nobis adipisci consequuntur, impedit voluptatem sequi modi officiis voluptas inventore suscipit accusantium saepe minima veritatis.
            </div>
          </div>
        </div>
      </section>
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
              <router-view />
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
    }
  },
}
</script>
