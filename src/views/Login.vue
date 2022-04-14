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
              class="form__input form__input_password" 
              placeholder="Password"
              v-model="login.password"
              :class="{'form__input_invalid': 
                (v$.login.password.$dirty && v$.login.password.required.$invalid) || 
                (v$.login.password.$dirty && v$.login.password.minLength.$invalid)
              }">
              <label for="checkbox-password" 
                id="checkbox-label" 
                >
                <input type="checkbox" @click="showPassword" id="checkbox-password">
                <svg class="svg-icon svg-icon__eye" viewBox="0 0 20 20">
							    <path d="M10,
                    6.978c-1.666,0-3.022,1.356-3.022,
                    3.022S8.334,13.022,10,13.022s3.022-1.356,3.022-3.022S11.666,
                    6.978,10,6.978M10,12.267c-1.25,0-2.267-1.017-2.267-2.267c0-1.25,
                    1.016-2.267,2.267-2.267c1.251,0,2.267,1.016,2.267,2.267C12.267,
                    11.25,11.251,12.267,10,12.267 M18.391,9.733l-1.624-1.639C14.966,
                    6.279,12.563,5.278,10,5.278S5.034,6.279,3.234,8.094L1.609,
                    9.733c-0.146,0.147-0.146,0.386,0,0.533l1.625,1.639c1.8,
                    1.815,4.203,2.816,6.766,2.816s4.966-1.001,
                    6.767-2.816l1.624-1.639C18.536,10.119,18.536,9.881,18.391,
                    9.733 M16.229,11.373c-1.656,1.672-3.868,2.594-6.229,
                    2.594s-4.573-0.922-6.23-2.594L2.41,10l1.36-1.374C5.427,
                    6.955,7.639,6.033,10,6.033s4.573,0.922,6.229,2.593L17.59,10L16.229,11.373z">
                  </path>
						    </svg>
              </label>
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
              v-maska="['##.##.##-#-##', '##.##.##-##-##',]"
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
              class="form__input form__input_password" 
              placeholder="Пароль"
              v-model="register.password"
              :class="{'form__input_invalid': 
                (v$.register.password.$dirty && v$.register.password.required.$invalid) || 
                (v$.register.password.$dirty && v$.register.password.minLength.$invalid)
              }">
              <label for="checkbox-password" 
                id="checkbox-label" 
                >
                <input type="checkbox" @click="showPassword" id="checkbox-password">
                <svg class="svg-icon svg-icon__eye" viewBox="0 0 20 20">
							    <path d="M10,
                    6.978c-1.666,0-3.022,1.356-3.022,
                    3.022S8.334,13.022,10,13.022s3.022-1.356,3.022-3.022S11.666,
                    6.978,10,6.978M10,12.267c-1.25,0-2.267-1.017-2.267-2.267c0-1.25,
                    1.016-2.267,2.267-2.267c1.251,0,2.267,1.016,2.267,2.267C12.267,
                    11.25,11.251,12.267,10,12.267 M18.391,9.733l-1.624-1.639C14.966,
                    6.279,12.563,5.278,10,5.278S5.034,6.279,3.234,8.094L1.609,
                    9.733c-0.146,0.147-0.146,0.386,0,0.533l1.625,1.639c1.8,
                    1.815,4.203,2.816,6.766,2.816s4.966-1.001,
                    6.767-2.816l1.624-1.639C18.536,10.119,18.536,9.881,18.391,
                    9.733 M16.229,11.373c-1.656,1.672-3.868,2.594-6.229,
                    2.594s-4.573-0.922-6.23-2.594L2.41,10l1.36-1.374C5.427,
                    6.955,7.639,6.033,10,6.033s4.573,0.922,6.229,2.593L17.59,10L16.229,11.373z">
                  </path>
						    </svg>
              </label>
          </div>
          <div class="form__item">
            <input type="password" 
              class="form__input form__input_password" 
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
    },
  }
}
</script>
