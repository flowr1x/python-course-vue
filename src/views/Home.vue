<template>
  <div class="manual__list list-manual"> <!--manuel__list list-manual-->
    <div class="list-manual__item" v-for="item in listManualItem" :key="item.path">
      <div class="list-manual__header">
        <router-link :to="item.path" class="list-manual__link">{{ item.title }}</router-link>
        <h3 class="list-manual__title">{{ item.subtitle }}</h3>
      </div>
      <div class="list-manual__body">
        <ul class="list-manual__list list-sub">
          <li class="list-sub__item" v-for="li in item.shortlinks" :key="li.path">
            <div class="list-sub__content">
              <router-link :to="li.path" class="list-sub__link">{{ li.title }}</router-link>
            </div>
          </li>
        </ul>
        <div class="list-manual__buttons">
          <router-link :to="item.path" class="list-manual__btn btn btn-red">Посмотреть главу</router-link>
        </div>
      </div>  
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data() {
      return {
          isActive: false,
          listManualItem: [
            { 
                title: "Глава 1",
                subtitle: "Краткая история языков программирования",
                path: "/theory_1",
                shortlinks: [
                    {title: "Программа. Язык программирования", path: "/"},
                    {title: "Основные этапы исторического развития языков программирования", path: "/"},
                    {title: "Разнообразия языков программирования", path: "/"},
                    {title: "Трансляция", path: "/"},
                ]
            },
            { 
                title: "Глава 2",
                subtitle: "Краткая историческая справка",
                path: "/theory_2",
                shortlinks: [
                    {title: "Краткая историческая справка", path: "/"},
                    {title: "Основные особенности языка", path: "/"},
                    {title: "Дзен Питона", path: "/"},
                    {title: "Как писать программы на Python", path: "/"},
                ]
            },
            { 
                title: "Глава 3",
                subtitle: "Типы данных. Переменные",
                path: "/theory_3",
                shortlinks: [
                    {title: "Данные и их типы", path: "/"},
                    {title: "Операции в программировании", path: "/"},
                    {title: "Изменение типов данных", path: "/"},
                    {title: "Переменные", path: "/"},
                ]
            },
            { 
                title: "Глава 4",
                subtitle: "Ввод и вывод данных",
                path: "/theory_4",
                shortlinks: [
                    {title: "Данные и их типы", path: "/"},
                    {title: "Ввод данных. Функция input()", path: "/"},
                ]
            },
            { 
                title: "Глава 5",
                subtitle: "Логические выражения и операторы",
                path: "/theory_5",
                shortlinks: [
                    {title: "Сложные логические выражения", path: "/"},
                    {title: "Операции в программировании", path: "/"},
                    {title: "Изменение типов данных", path: "/"},
                    {title: "Переменные", path: "/"},
                ]
            },
            { 
                title: "Глава 6",
                subtitle: "Ветвление. Условный операторы",
                path: "/theory_6",
                shortlinks: [
                    {title: "Определение", path: "/"},
                    {title: "Условный оператор", path: "/"},
                    {title: "Множественное ветвление: if-elif-else", path: "/"},
                ]
            },
            { 
                title: "Глава 7",
                subtitle: "Ошибки и исключения. Обработка исключений",
                path: "/theory_7",
                shortlinks: [
                    {title: "Ошибки и исключения", path: "/"},
                    {title: "Обработка исключений. Оператор try-except", path: "/"},
                    {title: "Множественное ветвление: if-elif-else", path: "/"},
                ]
            },
            { 
                title: "Глава 8",
                subtitle: "Циклы в программировании. Цикл while",
                path: "/theory_8",
                shortlinks: [
                    {title: "Цикл while", path: "/"},
                    {title: "Обработка исключений. Оператор try-except", path: "/"},
                    {title: "Множественное ветвление: if-elif-else", path: "/"},
                ]
            },
            { 
                title: "Глава 9",
                subtitle: "Функции в программировании",
                path: "/theory_9",
                shortlinks: [
                    {title: "Определение Функции. Оператор def", path: "/"},
                    {title: "Вызов функции", path: "/"},
                    {title: "Функции придают программе структуру", path: "/"},
                ]
            },
            { 
                title: "Глава 10",
                subtitle: "Локальные и глобальные переменные",
                path: "/theory_10",
                shortlinks: [
                    {title: "Возврат нескольких значений", path: "/"},
                ]
            },
            { 
                title: "Глава 11",
                subtitle: "Возврат значений из функции. Оператор return",
                path: "/theory_11",
                shortlinks: [
                    {title: "Произвольное количество аргументов", path: "/"},
                ]
            },
            { 
                title: "Глава 12",
                subtitle: "Параметры и аргументы функции",
                path: "/theory_12",
                shortlinks: [
                    {title: "Функции для работы с символами", path: "/"},
                ]
            },
            { 
                title: "Глава 13",
                subtitle: "Встроенные функции",
                path: "/theory_13",
                shortlinks: [
                    {title: "Ключевое слово Import", path: "/"},
                ]
            },
            { 
                title: "Глава 14",
                subtitle: "Модуль",
                path: "/theory_14",
                shortlinks: [
                    {title: "Генератор псевдослучайных чисел - random", path: "/"},
                ]
            },
            { 
                title: "Глава 15",
                subtitle: "Генератор псевдослучайных чисел - random",
                path: "/theory_15",
                shortlinks: [
                    {title: "Определение", path: "/"},
                    {title: "Функции целых чисел randint() и randrange()", path: "/"},
                    {title: "Функция random() - случайные вещественные числа", path: "/"},
                ]
            },
            { 
                title: "Глава 16",
                subtitle: "Списки",
                path: "/theory_16",
                shortlinks: [
                    {title: "Определение", path: "/"},
                    {title: "Пример: созданеи и заполнение списка", path: "/"},
                    {title: "Функция random() - случайные вещественные числа", path: "/"},
                ]
            },
            { 
                title: "Глава 17",
                subtitle: "Цикл for",
                path: "/theory_17",
                shortlinks: [
                    {title: "Функция range()", path: "/"},
                    {title: "Цикл for и range()", path: "/"},
                    {title: "Функция enumerate()", path: "/"},
                ]
            },
            { 
                title: "Глава 18",
                subtitle: "Строки",
                path: "/theory_18",
                shortlinks: [
                    {title: "Определение", path: "/"},
                    {title: "Методы строк", path: "/"},
                    {title: "Функция enumerate()", path: "/"},
                ]
            },
            { 
                title: "Глава 19",
                subtitle: "Кортеж",
                path: "/theory_19",
                shortlinks: [
                    {title: "Строки", path: "/"},
                    {title: "Основные команды", path: "/"},
                    {title: "Нарезка строк", path: "/"},
                ]
            },
          ]
      }
  },
  
}
</script>
