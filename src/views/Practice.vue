<template>
  <div>
    <section class="page__beginpage beginpage">
      <div class="beginpage__container">
        <div class="beginpage__title title-beginpage">
          <h1 class="title-beginpage__title">Практические работы</h1>
          <p class="title-beginpage__text">
            Здесь расположенны практические работы, после выполенения которых можно получить пратические навыки
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
            <MyViewerPdf :path="nowPractice" :key="render"/>
            <div class="manual__btns-change-page btns-change-page">
                <div class="btns-change-page__block">
                  <button button class="btns-change-page__btn" 
                    :disabled="!this.prevPractice"
                    :class="{'btns-change-page__btn_hide':!this.prevPractice}"
                    @click="getPrevVideo()">Предыдущая</button>
                </div>
                <div class="btns-change-page__block">
                  <button class="btns-change-page__btn" 
                    :disabled="!this.nextPractice"
                    :class="{'btns-change-page__btn_hide':!this.nextPractice}"
                    @click="getNextVideo()">Следующая</button>
                </div>
            </div>
            <div class="manual__btns-change-page btns-change-page_single">
                <div class="btns-change-page_single__block_all">
                  <a :href="nowPractice" download class="btns-change-page__btn">Скачать текущую пратическую работу</a>
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
import {practiceManualItem} from "@/mocks/headerTheory.js"
import MyViewerPdf from "@/components/MyViewerPdf.vue"

export default {
  components: {
    AsideListVideo, MyViewerPdf
  },
  data() {
    return {
      nowPractice: "",
      nextPractice: "",
      prevPractice: "",
      isActive: false,
      listManualItem: practiceManualItem, 
      render: 0,
    }
  },
  created() {
    this.nowPractice = this.listManualItem[0].link;
  },
  mounted() {
    this.setCurrentPath();
  },
  methods: {
    setCurrentPath() {
      this.listManualItem.forEach((page, index, arr) => {
        if (page.link === this.nowPractice) {
          const nextPractice = arr[index+1];
          const prevPractice = arr[index-1];
          
          if (nextPractice) this.nextPractice = nextPractice.link;
          else this.nextPractice = false;

          if (prevPractice) this.prevPractice = prevPractice.link; 
          else this.prevPractice = false;
        }
      })
    },
    getNextVideo() {
      this.getReferense(this.nextPractice);
    },
    getPrevVideo() {
       this.getReferense(this.prevPractice);
    },
    getReferense(link) {
      this.nowPractice = link;
      this.render += 1;
      this.setCurrentPath();
      console.log(this.nowPractice);
    }
  },
}
</script>
