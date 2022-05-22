<template>
  <div class="page__profile">
    <div class="profile__container">
      <div class="profile__content">
        <div class="profile__title">
          <h2 @click="f">Профиль</h2>
          <button class="profile__btn btn"  @click="logout">Выйти</button>
        </div>
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
          <div class="form-profile__item form-profile__btn">
            <my-button class="form-profile__button " @submit.prevent="submitHandler">Обновить</my-button>
          </div>
        </form>
        <h3 class="profile__title">Создание практических работ</h3>
        <my-dialog v-model:show="dialogVisible">
          <practice-form @createPractice="createPractice" /> 
        </my-dialog>
        <my-button @click="showDialog">Создать</my-button>
        <practice-list :list="practice" @remove="removePractice"/>
        <!-- <PracticeTableList :list="listPr" v-if="isAdmin"/> -->
      </div>
    </div>
  </div>
</template>

<script>
import useVuelidate from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import { mapGetters } from "vuex"
import listPractice from "@/mocks/practiceWorks.js"
import PracticeTableList from "@/components/PracticeTableList"
import PracticeList from "@/components/PracticeList"
import PracticeForm from "@/components/PracticeForm"

export default {
  components: {
    PracticeTableList, PracticeList, PracticeForm
  },
  setup() {
 
    return { 
      v$: useVuelidate(),
      listPractice
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
  data() {
    return {
      listPr: listPractice,
      dialogVisible: false,
    }
  },
  computed: {
    ...mapGetters(["info", "practice"]),
    isAdmin() {
      return this.$store.getters.isAdmin;  
    }
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
    },
    createPractice(practiceItem) {
      this.$store.dispatch("createPractice", practiceItem)
    },
    removePractice(practiceName) {
      const newPracticeList = {};
      for (let item in this.practice) {
        if (practiceName == item) continue;
        newPracticeList[`${item}`] = this.practice[`${item}`];
      }

      this.$store.dispatch("removePractice", newPracticeList);
    },
    showDialog() {
      this.dialogVisible = true;
    },
  }
}
</script>
