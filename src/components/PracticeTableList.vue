<template>
  <div class="profile__parctice-posts practice-posts">
    <h2 class="practice-posts__title">Практические работы</h2>
      <table class="practice-posts__table">
        <tr>
          <td>Номер</td>
          <td>Ссылка</td>
          <td>Оценка</td>
        </tr>
      </table>
      <div class="practice-posts__post" v-for="item in list" :key="item.id">
        <div class="practice-posts__wrapper">
          <my-input-form class="form-profile__input" :disabled="1" id="input__dis" :value="item.title"/>
          <my-input-form class="form-profile__input" :disabled="1" id="input__dis" :value="item.ref"/>
          <my-input-form class="form-profile__input" :disabled="1" id="input__dis" :value="item.mark"/>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "practice-table-list",
  props: {
    list: {
      type: Object,
      required: true,
    }
  }
}
</script>
