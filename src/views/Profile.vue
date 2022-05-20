<template>
  <div class="page__profile">
    <div class="profile__container">
      <div class="profile__content">
        <h2 class="profile__title">Профиль</h2>
        <form class="profile__form form-profile" @submit.prevent="submitHandler">
          <div class="form-profile__item">
            <my-input-form class="form-profile__input"
              placeholder="Имя"
              v-model="info.firstName"
              :class="{'form__input_invalid': 
                (v$.info.firstName.$dirty && v$.info.firstName.required.$invalid)}"
              />
          </div>
          <div class="form-profile__item"> 
            <my-input-form class="form-profile__input"
             placeholder="Фамилия"
              v-model="info.lastName"
              :class="{'form__input_invalid': 
                (v$.info.lastName.$dirty && v$.info.lastName.required.$invalid)}"/>
          </div>
          <div class="form-profile__item">
            <my-input-form class="form-profile__input"
             placeholder="Номер группы" 
             v-maska="['##.##.##-#-##', '##.##.##-##-##',]"
             v-model="info.group"
             :class="{'form__input_invalid': 
                (v$.info.group.$dirty && v$.info.group.required.$invalid)}"/>
          </div>
          <div class="form-profile__item">
            <my-button class="form-profile__button " @submit.prevent="submitHandler">Обновить</my-button>
          </div>
        </form>
        <div class="profile__posts" v-if="isAdmin">
          <h3>Это профиль админа</h3>
        </div>
      </div>
      <div class="profile__btn-exit">
        <a href="#" class="profile__btn btn" @click.prevent="logout">Выйти</a>
      </div>
    </div>
  </div>
</template>

<script>
import useVuelidate from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import { mapGetters } from "vuex"

export default {
  setup() {
    return { 
      v$: useVuelidate() 
    }
  },
  data() {
    return {
      isAdmin: false,
    }
  },
  validations() {
    return {
      info: {
        group: { required },
        firstName: { required },
        lastName: { required },
      }
    }
  },
  async mounted() {
    if (!Object.keys(this.$store.getters.info).length) {
      await this.$store.dispatch("fetchInfo");
    }
    this.isAdmin = this.$store.getters.isAdmin;
  },
  computed: {
    ...mapGetters(["info"]),
  },
  methods: {
    async logout() {
      await this.$store.dispatch("logout");
      this.$router.push("/login?message=logout");
    },
    async submitHandler() {
      if (this.v$.$invalid) {
        this.v$.$touch();
        return;
      }  
      try {
        await this.$store.dispatch("updateInfo", this.info);
      } catch (error) {}
    }
  }
}
</script>
