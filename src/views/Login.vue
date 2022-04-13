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
      <form action="#" class="form form_signin" @submit.prevent="onSubmit">
          <h3 class="form__title">Вход</h3>
          <div class="form__item">
            <input type="text" 
              class="form__input" 
              placeholder="Email"
              v-model="email"
              :class="{'form__input_invalid': 
                (v$.email.$dirty && v$.email.required.$invalid) || 
                (v$.email.$dirty && v$.email.email.$invalid)
              }">
          </div>
          <div class="form__item">
            <input type="password" 
              class="form__input" 
              placeholder="Password"
              v-model="password"
              :class="{'form__input_invalid': 
                (v$.password.$dirty && v$.password.required.$invalid) || 
                (v$.password.$dirty && v$.password.minLength.$invalid)
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
       <form action="#" class="form form_signup">
          <h3 class="form__title">Регистрация</h3>
          <div class="form__item">
            <input type="email" class="form__input" placeholder="Email">
          </div>
          <div class="form__item">
            <input type="text" class="form__input" placeholder="Имя">
          </div>
          <div class="form__item">
            <input type="text" class="form__input" placeholder="Фамилия">
          </div>
          <div class="form__item">
            <input type="text" class="form__input" placeholder="Номер группы">
          </div>
          <div class="form__item">
            <input type="password" class="form__input" placeholder="Пароль">
          </div>
          <div class="form__item">
            <input type="password" class="form__input" placeholder="Повторите пароль">
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
import { required, email, minLength } from '@vuelidate/validators'

export default {
  name: "login",
  setup() {
    return { 
      v$: useVuelidate() 
    }
  },
  data: () => ({
    email: "",
    password: ""
  }),
  validations () {
    return {
      email: { required, email }, 
      password: { required, minLength: minLength(6) },
    }
  },
  methods: {
    onSubmit() {
       console.log("1");
      if (this.v$.$invalid) {
        this.v$.$touch();
        return;
      }
      const formData = {
        email: this.email,
        password: this.password
      };
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
