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
            <icon-burger id="menu__icon_aside" @onClickBurger="getAsideHide"/>
          </div>
          <div class="manual__content ">
            <aside class="manual__aside" :class="{'manual__aside_hide': !isActive}">
              <nav class="manual__nav nav-aside">
                <div class="nav-aside__body" :class="{'nav-aside__body_active': !isActive}">
                  <aside-list v-for="item in listManualItem"
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

export default {
  components: {
    Header, Footer, AsideList
  },
  data() {
    return {
      isActive: false,
      listManualItem: [
            { 
                title: "Глава 1",
                subtitle: "Краткая история языков программирования",
                path: "/theory_1",
            },
            { 
                title: "Глава 2",
                subtitle: "Краткая историческая справка",
                path: "/theory_2",
            },
            { 
                title: "Глава 3",
                subtitle: "Типы данных. Переменные",
                path: "/theory_3",
            },
            { 
                title: "Глава 4",
                subtitle: "Ввод и вывод данных",
                path: "/theory_4",
            },
            { 
                title: "Глава 5",
                subtitle: "Логические выражения и операторы",
                path: "/theory_5",
            },
            { 
                title: "Глава 6",
                subtitle: "Ветвление. Условный операторы",
                path: "/theory_6",
            },
            { 
                title: "Глава 7",
                subtitle: "Ошибки и исключения. Обработка исключений",
                path: "/theory_7",
            },
            { 
                title: "Глава 8",
                subtitle: "Циклы в программировании. Цикл while",
                path: "/theory_8",
            },
            { 
                title: "Глава 9",
                subtitle: "Функции в программировании",
                path: "/theory_9",
            },
            { 
                title: "Глава 10",
                subtitle: "Локальные и глобальные переменные",
                path: "/theory_10",
            },
            { 
                title: "Глава 11",
                subtitle: "Возврат значений из функции. Оператор return",
                path: "/theory_11",
            },
            { 
                title: "Глава 12",
                subtitle: "Параметры и аргументы функции",
                path: "/theory_12",
            },
            { 
                title: "Глава 13",
                subtitle: "Встроенные функции",
                path: "/theory_13",
            },
            { 
                title: "Глава 14",
                subtitle: "Модуль",
                path: "/theory_14",
            },
            { 
                title: "Глава 15",
                subtitle: "Генератор псевдослучайных чисел - random",
                path: "/theory_15",
            },
            { 
                title: "Глава 16",
                subtitle: "Списки",
                path: "/theory_16",
            },
            { 
                title: "Глава 17",
                subtitle: "Цикл for",
                path: "/theory_17",
            },
            { 
                title: "Глава 18",
                subtitle: "Строки",
                path: "/theory_18",
            },
            { 
                title: "Глава 19",
                subtitle: "Кортеж",
                path: "/theory_19",
            },
      ],
      offestBtnTop: 400,
      isActiveBtnToTop: false,
    }
  },
  methods: {
    getAsideHide(isOpen) {
      this.isActive = isOpen;
    },
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
    }
  }
}
</script>
