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
              <input type="text" class="search-beginpage__input">
              <button class="search-beginpage__btn">Найти</button>
            </form>
          </div>
        </div>
      </section>
      <section class="page__manual manual">
        <div class="manual__container">
          <h2 class="manual__title">Содержание</h2>
          <div class="manual__content">
            <aside class="manual__aside">
              <nav class="manual__nav nav-aside">
                <div class="nav-aside__button"
                  @click="isActive = !isActive" 
                  :class="{'nav-aside__button_active': isActive}"
                >
                  Меню раздела <span></span>
                </div>
                <div class="nav-aside__body" :class="{'nav-aside__body_active': isActive}">
                  <aside-list v-for="item in listManualItem"
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
          <div class="manual__btn-top">
              <div id="btn-scroll-top">Вернуться на верх</div>
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
                path: "/",
            },
            { 
                title: "Глава 2",
                subtitle: "Краткая историческая справка",
                path: "/",
            },
            { 
                title: "Глава 3",
                subtitle: "Типы данных. Переменные",
                path: "/",
            },
            { 
                title: "Глава 4",
                subtitle: "Ввод и вывод данных",
                path: "/",
            },
            { 
                title: "Глава 5",
                subtitle: "Логические выражения и операторы",
                path: "/",
            },
            { 
                title: "Глава 6",
                subtitle: "Ветвление. Условный операторы",
                path: "/",
            },
            { 
                title: "Глава 7",
                subtitle: "Ошибки и исключения. Обработка исключений",
                path: "/",
            },
            { 
                title: "Глава 8",
                subtitle: "Циклы в программировании. Цикл while",
                path: "/",
            },
            { 
                title: "Глава 9",
                subtitle: "Функции в программировании",
                path: "/",
            },
            { 
                title: "Глава 11",
                subtitle: "Возврат значений из функции. Оператор return",
                path: "/",
            },
            { 
                title: "Глава 12",
                subtitle: "Параметры и аргументы функции",
                path: "/",
            },
            { 
                title: "Глава 13",
                subtitle: "Встроенные функции",
                path: "/",
            },
            { 
                title: "Глава 14",
                subtitle: "Модуль",
                path: "/",
            },
            { 
                title: "Глава 15",
                subtitle: "Модуль",
                path: "/",
            },
            { 
                title: "Глава 16",
                subtitle: "Генератор псевдослучайных чисел - random",
                path: "/",
            },
            { 
                title: "Глава 17",
                subtitle: "Списки",
                path: "/",
            },
            { 
                title: "Глава 18",
                subtitle: "Цикл for",
                path: "/",
            },
            { 
                title: "Глава 19",
                subtitle: "Строки",
                path: "/",
            },
            { 
                title: "Глава 20",
                subtitle: "Кортеж",
                path: "/",
            },
          ]
    }
  }
}
</script>
