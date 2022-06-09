<template>
  <ContentContainer :status="showPreloader">
    <template #content>
      <div class="wrapper">
        <Header/>
        <main class="page">
          <section class="page__beginpage beginpage">
            <div class="beginpage__container">
              <div class="beginpage__title">
                <h1>Видеоуроки</h1>
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
                      <aside-list-video v-for="item in listManualItem"
                        class="nav-aside__item"
                        :key="item.link"
                        :link="item.link"
                        :title="item.title"
                        :subtitle="item.subtitle"
                        @getReferense="getReferense"
                      />
                    </div>
                  </nav>
                </aside>
                <div class="manual__list list-manual">
                  <router-view :link="nowVideo"/>
                  <div class="manual__list list-manual">
                  <div class="manual__btns-change-page btns-change-page">
                    <div class="btns-change-page__block">
                      <button button class="btns-change-page__btn"
                        :class="{'btns-change-page__btn_hide':!this.prevVideo}"
                        @click="getPrevVideo()">Предыдущая</button>
                    </div>
                    <div class="btns-change-page__block">
                      <button class="btns-change-page__btn"
                        :class="{'btns-change-page__btn_hide':!this.nextVideo}"
                        @click="getNextVideo()">Следующая</button>
                    </div>
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
  </ContentContainer>
</template>
<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import AsideListVideo from "@/components/AsideListVideo.vue";
import {videoManualItem} from "@/mocks/headerTheory.js"
import ContentContainer from "@/components/ContentContainer.vue"
;
export default {
  components: {
    Header, 
    Footer,
    AsideListVideo,
    ContentContainer
  },
  data() {
    return {
      isActive: false,
      listManualItem: videoManualItem, 
      nowVideo: "",
      nextVideo: "",
      prevVideo: "",
      showPreloader: true,
    }
  },
  mounted() {
    this.showPreloaderTime();
    this.nowVideo = this.listManualItem[0].link;
    this.setCurrentPath();
  },
  methods: {
    showPreloaderTime() {
      setTimeout(() => {
        this.showPreloader = false
      }, 2500)
    },
    setCurrentPath() {
      this.listManualItem.forEach((page, index, arr) => {
        if (page.link === this.nowVideo) {
          const nextVideo = arr[index+1];
          const prevVideo = arr[index-1];

          if (nextVideo) this.nextVideo = nextVideo.link;
          else this.nextVideo = false;

          if (prevVideo) this.prevVideo = prevVideo.link; 
          else this.prevVideo = false;
        }
      })
    },
    getNextVideo() {
      this.getReferense(this.nextVideo);
    },
    getPrevVideo() {
       this.getReferense(this.prevVideo);
    },
    getReferense(link) {
      this.nowVideo = link;
      this.setCurrentPath();
    }
  },
}
</script>
