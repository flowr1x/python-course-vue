<template>
  <ContentContainer :status="showLoader">
    <template #content>
      <div class="form__content">
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
          <div class="form__box" ref="formBox">
            <!-- Form Login -->
            <form action="#" class="form form_signin" @submit.prevent="onSubmitLogUp">
                  <h3 class="form__title">Вход</h3>
                  <div class="form__item">
                    <my-input-form
                      placeholder="Email"
                      v-model="login.email"
                      :class="{'form__input_invalid':
                        (v$.login.email.$dirty && v$.login.email.required.$invalid) ||
                        (v$.login.email.$dirty && v$.login.email.email.$invalid)
                      }" />
                  </div>
                  <div class="form__item">
                    <my-input-form type="password"
                      class="form__input_password"
                      placeholder="Password"
                      v-model="login.password"
                      :class="{'form__input_invalid':
                        (v$.login.password.$dirty && v$.login.password.required.$invalid) ||
                        (v$.login.password.$dirty && v$.login.password.minLength.$invalid)
                      }" />
                      <label for="checkbox-password1"
                        class="checkbox-label"
                        >
                        <my-input-form type="checkbox" @click="showPassword" class="checkbox-password" id="checkbox-password1" />
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
                  <div class="form__item form__item_right">
                    <my-button class="form__btn">Войти</my-button>
                  </div>
                  <div class="form__item">
                    <a href="#" class="form__forgot">Восстановить пароль</a>
                  </div>
            </form>
            <!-- Form Register -->
             <form action="#" class="form form_signup" @submit.prevent="onSubmitLogIn">
                <h3 class="form__title">Регистрация</h3>
                <div class="form__item">
                  <my-input-form
                    placeholder="Имя"
                    v-model="register.firstName"
                    :class="{'form__input_invalid':
                      (v$.register.firstName.$dirty && v$.register.firstName.required.$invalid)}"/>
                </div>
                <div class="form__item">
                  <my-input-form
                    placeholder="Фамилия"
                    v-model="register.lastName"
                    :class="{'form__input_invalid':
                      (v$.register.lastName.$dirty && v$.register.lastName.required.$invalid)}"/>
                </div>
                <div class="form__item">
                  <my-input-form
                    placeholder="Номер группы"
                    v-maska="['##.##.##-#-##', '##.##.##-##-##',]"
                    v-model="register.group"
                    :class="{'form__input_invalid':
                      (v$.register.group.$dirty && v$.register.group.required.$invalid)}"/>
                </div>
                <div class="form__item">
                  <my-input-form type="email"
                    placeholder="Email"
                    v-model="register.email"
                    :class="{'form__input_invalid':
                      (v$.register.email.$dirty && v$.register.email.required.$invalid) ||
                      (v$.register.email.$dirty && v$.register.email.email.$invalid)
                    }"/>
                </div>
                <div class="form__item">
                  <my-input-form type="password"
                    class="form__input_password"
                    placeholder="Пароль"
                    v-model="register.password"
                    :class="{'form__input_invalid':
                      (v$.register.password.$dirty && v$.register.password.required.$invalid) ||
                      (v$.register.password.$dirty && v$.register.password.minLength.$invalid)
                    }"/>
                    <label for="checkbox-password2"
                      class="checkbox-label"
                      >
                      <my-input-form type="checkbox" @click="showPassword" class="checkbox-password" id="checkbox-password2"/>
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
                  <my-input-form type="password"
                    class="form__input_password"
                    placeholder="Пароль"
                    v-model="register.confirmPassword"
                    :class="{'form__input_invalid':
                      (v$.register.confirmPassword.$dirty && v$.register.confirmPassword.required.$invalid) ||
                      (v$.register.confirmPassword.$dirty && v$.register.confirmPassword.sameAs.$invalid)}"/>
                </div>
                <div class="form__item">
                  <my-button type="submit" class="form__btn">Зарегистрироваться</my-button>
                </div>
            </form>
          </div>
        </div>
      </div>
    </template>
  </ContentContainer>
</template>

<script>
import useVuelidate from '@vuelidate/core'
import { required, email, minLength, sameAs } from '@vuelidate/validators'
import messages from "@/plugins/messages.js"
import ContentContainer from "@/components/ContentContainer.vue";
import {mapActions} from "vuex"

export default {
  components: { 
    ContentContainer
  },
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
    },
    showLoader: false,
  }),
  mounted() {
    // Проверяет query запрос, для вывода сообщения из messeages.js
    const query = this.$route.query.message;
    if (query) this.$message(messages[query]);
  },
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
    ...mapActions({loginToPage:"login", registerToPage: "register"}),
    async onSubmitLogUp() {
      if (this.v$.login.$invalid) {
        this.v$.login.$touch();
        return;
      }
      this.showLoader = true;
      try {
        await this.loginToPage(this.login);
        this.$router.push("/?message=comeback");
      } catch (error) {}
      finally {
        this.showLoader = false;
      }
    },
    async onSubmitLogIn() {
      if (this.v$.register.$invalid) {
        this.v$.register.$touch();
        return;
      }  
      this.showLoader = true;
      try {
        await this.registerToPage(this.register);
        this.$router.push("/?message=welcome");
      } catch(e) { } 
      finally {
        this.showLoader = false;
      }
    },
    onClickLogOut(event) {
      this.$refs.formBox.classList.add("form__box_active");
    },
    onClickLogIn(event) {
      this.$refs.formBox.classList.remove("form__box_active");
    },
    showPassword() {
      const collectionPassword = document.querySelectorAll(".form__input_password");
      for (let password of collectionPassword) {
        if (password.getAttribute("type") == "password") {
          password.setAttribute("type", "text");
        } else {
          password.setAttribute("type", "password");
        }
      }     
    }
  }
}
</script>
