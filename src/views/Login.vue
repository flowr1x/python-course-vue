<template>
  <div class="form-login__body">
    <h2 class="form-login__header">Python-Learn</h2>
    <div class="form-login__title">
      <div class="form-login__subtitle">Вход</div>
      <span>|</span>
      <router-link to="/register" class="form-login__register">Зарегистрироваться</router-link>
    </div>
    <form action="#" method="post" class="form-login__form" @submit.prevent="onSubmit">
      <div class="form-login__item">
        <input type="text"
          class="form-login__input"
          placeholder="Email"
          v-model="email"
          :class="{invalid: (v$.email.$dirty && v$.email.required.$invalid) || (v$.email.$dirty && v$.email.email.$invalid)}"
          >
          <small v-if="v$.email.$dirty && v$.email.required.$invalid">Поле email не должно быть пустом</small>
          <small v-else-if="v$.email.$dirty && v$.email.email.$invalid">Некорректный email</small>
      </div>
      <div class="form-login__item">
        <input type="password"
          class="form-login__input"
          placeholder="Пароль"
          v-model="password"
          :class="{invalid: (v$.password.$dirty && v$.password.required.$invalid) || (v$.password.$dirty && v$.password.minLength.$invalid)}">
        <small v-if="v$.password.$dirty && v$.password.required.$invalid">Поле password не должно быть пустом</small>
        <small v-else-if="v$.password.$dirty && v$.password.minLength.$invalid">Пароль должен содержать {{ v$.password.minLength.$params.min }} символов</small>
      </div>
      <button type="submit" 
        class="form-login__button btn">Войти</button>
    </form>
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
      password: { required, minLength: minLength(10) },
    }
  },
  methods: {
    onSubmit() {
      if (this.v$.$invalid) {
        this.v$.$touch();
        return;
      }
      const formData = {
        email: this.email,
        password: this.password
      };

      console.log(formData);
      this.$router.push("/");
    }
  }
}
</script>
