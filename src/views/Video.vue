<template>
  <div>
    <section class="page__beginpage beginpage">
      <div class="beginpage__container">
        <div class="beginpage__title title-beginpage">
          <h1 class="title-beginpage__title">Видеоуроки</h1>
          <p class="title-beginpage__text">
            Раздел с видеоуроками позволяет посмотреть наглядный пример создание программ
          </p>
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
            <show-video :link="nowVideo"/>
            <div class="manual__list list-manual">
            <div class="manual__btns-change-page btns-change-page">
              <div class="btns-change-page__block">
                <button button class="btns-change-page__btn"
                  :disabled="!this.prevVideo"
                  :class="{'btns-change-page__btn_hide':!this.prevVideo}"
                  @click="getPrevVideo()">Предыдущая</button>
              </div>
              <div class="btns-change-page__block">
                <button class="btns-change-page__btn"
                  :disabled="!this.nextVideo"
                  :class="{'btns-change-page__btn_hide':!this.nextVideo}"
                  @click="getNextVideo()">Следующая</button>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import AsideListVideo from "@/components/AsideListVideo.vue";
import ShowVideo from "@/components/ShowVideo.vue";
import {videoManualItem} from "@/mocks/headerTheory.js"
import ContentContainer from "@/components/ContentContainer.vue";

export default {
  name: "videos",
  components: {
    AsideListVideo,
    ContentContainer,
    ShowVideo
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
