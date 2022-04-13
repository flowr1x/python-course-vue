<template>
  <div class="form__inner">
    <div class="form__block block">
      <section class="block__item block-item">
        <h2 class="block-item__title">У вас уже есть аккаунт?</h2>
        <button class="block-item__btn btn" @click="onClickLogIn">Войти</button>
      </section>
      <section class="block__item block-item">
        <h2 class="block-item__title">У вас нет аккаунта?</h2>
        <button class="block-item__btn btn" @click="onClickLogOut">Зарегистрироваться</button>
      </section>
    </div>
    <div class="form__box">
      <!-- Form Login -->
      <form action="#" class="form form_signin" @submit.prevent="onSubmitLogUp">
          <h3 class="form__title">Вход</h3>
          <div class="form__item">
            <input type="text" 
              class="form__input" 
              placeholder="Email"
              v-model="login.email"
              :class="{'form__input_invalid': 
                (v$.login.email.$dirty && v$.login.email.required.$invalid) || 
                (v$.login.email.$dirty && v$.login.email.email.$invalid)
              }">
          </div>
          <div class="form__item">
            <input type="password" 
              class="form__input" 
              placeholder="Password"
              v-model="login.password"
              :class="{'form__input_invalid': 
                (v$.login.password.$dirty && v$.login.password.required.$invalid) || 
                (v$.login.password.$dirty && v$.login.password.minLength.$invalid)
              }">
          </div>
          <div class="form__item">
            <button type="submit" class="form__btn btn">Вход</button>
          </div>
          <div class="form__item">
            <a href="#" class="form__forgot">Восстановить пароль</a>
          </div>
      </form>
      <!-- Form Register -->
       <form action="#" class="form form_signup" @submit.prevent="onSubmitLogIn">
          <h3 class="form__title">Регистрация</h3>
          <div class="form__item">
            <input type="text" 
              class="form__input" 
              placeholder="Имя"
              v-model="register.firstName"
              :class="{'form__input_invalid': 
                (v$.register.firstName.$dirty && v$.register.firstName.required.$invalid)}">
          </div>
          <div class="form__item">
            <input type="text" 
              class="form__input" 
              placeholder="Фамилия"
              v-model="register.lastName"
              :class="{'form__input_invalid': 
                (v$.register.lastName.$dirty && v$.register.lastName.required.$invalid)}">
          </div>
          <div class="form__item">
            <input type="text" 
              class="form__input" 
              placeholder="Номер группы"
              v-model="register.group"
              :class="{'form__input_invalid': 
                (v$.register.group.$dirty && v$.register.group.required.$invalid)}">
          </div>
          <div class="form__item">
            <input type="email" 
              class="form__input" 
              placeholder="Email"
              v-model="register.email"
              :class="{'form__input_invalid': 
                (v$.register.email.$dirty && v$.register.email.required.$invalid) || 
                (v$.register.email.$dirty && v$.register.email.email.$invalid)
              }">
          </div>
          <div class="form__item">
            <input type="password" 
              class="form__input" 
              placeholder="Пароль"
              v-model="register.password"
              :class="{'form__input_invalid': 
                (v$.register.password.$dirty && v$.register.password.required.$invalid) || 
                (v$.register.password.$dirty && v$.register.password.minLength.$invalid)
              }">
          </div>
          <div class="form__item">
            <input type="password" 
              class="form__input" 
              placeholder="Пароль"
              v-model="register.confirmPassword"
              :class="{'form__input_invalid': 
                (v$.register.confirmPassword.$dirty && v$.register.confirmPassword.required.$invalid) || 
                (v$.register.confirmPassword.$dirty && v$.register.confirmPassword.sameAs.$invalid)}">
          </div>
          <div class="form__item">
            <button type="submit" class="form__btn btn">Зарегистрироваться</button>
          </div>
      </form>
    </div>
  </div>
</template>

<script>
import useVuelidate from '@vuelidate/core'
import { required, email, minLength, sameAs } from '@vuelidate/validators'

export default {
  name: "login",
  setup() {
    return { 
      v$: useVuelidate() 
    }
  },
  data: () => ({
    login: {
      email: "",
      password: "",
    },
    register: {
      email: "",
      group: "",
      firstName: "",
      lastName: "",
      password: "",
      confirmPassword: "",
    }
  }),
  validations () {
    return {
      login: {
        email: { required, email }, 
        password: { required, minLength: minLength(6) },
      },
      register: {
        email: { required, email },
        group: { required },
        firstName: { required },
        lastName: { required },
        password: { required, minLength: minLength(6) },
        confirmPassword: { required, sameAs: sameAs(this.register.password) }
      }
    }
  },
  methods: {
    onSubmitLogUp() {
      if (this.v$.login.$invalid) {
        this.v$.login.$touch();
        return;
      }
      console.log(this.login);
      this.$router.push("/");
    },
    onSubmitLogIn() {
      if (this.v$.register.$invalid) {
        this.v$.register.$touch();
        return;
      }
      console.log(this.register);
      this.$router.push("/");
    },
    onClickLogOut(event) {
      document.querySelector(".form__box").classList.add("form__box_active");
    },
    onClickLogIn(event) {
      document.querySelector(".form__box").classList.remove("form__box_active");
    }
  }
}
</script>
