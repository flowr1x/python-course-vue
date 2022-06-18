<template>
  <div class="form__content">
    <section class="page__welcome welcome">
      <div class="welcome__content">
        <div class="welcome__screen screen-welcome">
            <div class="screen-welcome__row">
                <div class="screen-welcome__column">
                  <div class="screen-welcome__item">
                    <bubbling-text>
                      <h2 class="screen-welcome__title">PYTHON LEARN</h2>
                    </bubbling-text>
                    <p class="screen-welcome__text">Конспекты лекций, практических работ и наглядных пособий.</p>
                  </div>
                </div>
                <div class="screen-welcome__column">
                  <div class="screen-welcome__item screen-welcome__item_button">
                    <router-link :to="'/instruction'" class="screen-welcome__btn btn">Инструкция</router-link>
                    <router-link :to="'/login'" class="screen-welcome__btn btn">Войти в систему</router-link>
                    <router-link :to="'/help'" class="screen-welcome__btn btn">Справка</router-link>
                  </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import messages from "@/plugins/messages.js"
export default {
  name: "welcome",
  mounted() {
    // Проверяет query запрос, для вывода сообщения из messeages.js
    const query = this.$route.query.message;
    if (query) this.$message(messages[query]);
  },
}
</script>
