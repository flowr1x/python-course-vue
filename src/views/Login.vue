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
                  placeholder="Пароль"
                  v-model="login.password"
                  :class="{'form__input_invalid':
                    (v$.login.password.$dirty && v$.login.password.required.$invalid) ||
                    (v$.login.password.$dirty && v$.login.password.minLength.$invalid)
                  }" />
              </div>
              <div class="form__item form__item_right">
                <my-button class="form__btn">Войти</my-button>
              </div>
              <div class="form__item">
                <!-- <a href="#" class="form__forgot">Восстановить пароль</a> -->
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
                    placeholder="Пароль"
                    v-model="register.password"
                    :class="{'form__input_invalid':
                      (v$.register.password.$dirty && v$.register.password.required.$invalid) ||
                      (v$.register.password.$dirty && v$.register.password.minLength.$invalid)
                    }"/>
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
import { required, email, minLength } from '@vuelidate/validators'
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
   
  }
}
</script>
