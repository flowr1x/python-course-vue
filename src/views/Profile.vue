<template>
  <div class="page__profile">
    <div class="profile__container">
      
      <div class="profile__content">
        <div class="profile__title">
          <h2>Профиль</h2>
          <my-button class="profile__btn" @click="logout">Выйти</my-button>
        </div>
        <div class="profile__main-window main-windows">
          <!-- ИНФОРМАЦИЯ О USER -->
          <profile-user-info :info="getInfoUser" @submitHandler="submitHandler" class="main-window__item"/>
          <!-- ПОИСК ПРАКТИЧЕСКИХ РАБОТ USER -->
          <div v-if="isAdmin" class="main-window__item">
            <div class="slider__header">
              <div class="slider__title">Индивидуальные задания пользователя</div>
              <my-dialog v-model:show="dialogVisibleUserSearch">
                <search-users-in-list 
                  :users="getListAllUsers" 
                  @searchUserByUid="searchUserByUid"/>
              </my-dialog>
              <my-button @click="dialogVisibleUserSearch = true">Поиск пользователей</my-button>
            </div>
            <div v-if="nowUserId">
              <my-slider
                :practices="userPracticeNow"
                @sendPracticeInUser="sendPractice"/>
            </div>
            <div class="profile-practice__error" v-else-if="!nowUserId">Выберете пользователя</div>
          </div>
          <!-- СОЗДАНИЕ ПРАТИЧЕСКИХ РАБОТ -->
          <div v-if="isAdmin" class="main-window__item">
            <div class="slider__header">
              <div class="slider__title">Созданные индивидуальные задания</div>
              <my-dialog v-model:show="dialogVisible">
                <practice-form @createPractice="createPractice" />
              </my-dialog>
              <my-button @click="showDialog">Создать</my-button>
            </div>
            <practice-list-admin
              :list="getCurrentPractices"
              @remove="removePractice"
              @createPractice="createPractice"/>
          </div>
          <!-- ДОБАВЛЕНИЕ ССЫЛКИ ЮЗЕРОМ -->
          <div v-if="!isAdmin" class="main-window__item">
              <div class="slider__header">
                <div class="slider__title">
                  Актуальные индивидуальные задания
                </div>
              </div>
              <practice-list-user
              :list="getCurrentPractices"
              :practices="getPracticeCurrentUser"
              @sendPracticeInUser="sendPractice"/>
          </div>
          <!-- Страрые работы юзера нельзя изменять -->
          <div v-if="!isAdmin" class="main-window__item">
            <div class="slider__header">
              <div class="slider__title">Индивидуальные задания пользователя</div>
            </div>
            <my-slider
              :practices="getPracticeCurrentUser"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"
import messages from "@/plugins/messages.js"

import PracticeListUser from "@/components/ComponentsProfile/PracticeListUser"
import PracticeForm from "@/components/ComponentsProfile/PracticeForm"
import ProfileUserInfo from "@/components/ComponentsProfile/ProfileUserInfo"
import PracticeListAdmin from "@/components/ComponentsProfile/PracticeListAdmin"
import SearchUsersInList from "@/components/ComponentsProfile/SearchUsersInList"
import MySlider from "@/components/ComponentsProfile/MySlider"

export default {
  components: {
    PracticeForm, 
    ProfileUserInfo,  
    SearchUsersInList, 
    PracticeListAdmin, 
    PracticeListUser,
    MySlider,
  },
  data() {
    return {
      dialogVisible: false,
      dialogVisibleUserSearch: false,
      userPracticeNow: "",
      nowUserId: "",
      dataCurrentUser: "",
    }
  },
  computed: {
    ...mapGetters([
      "getInfoUser", 
      "getCurrentPractices", 
      "getPracticeCurrentUser", 
      "getListAllUsers", 
      "isAdmin"
    ]),
  },
  methods: {
    ...mapActions({
      logoutAccount: "logout",
      updateInfo: "updateInfo",
      createPracticeAdmin: "createPractice",
      removePracticeAdmin: "removePractice",
      createUserPractice: "createUserPractice",
    }),
    async logout() {
      await this.logoutAccount();
      this.$router.push("/login?message=logout");
    },
    async submitHandler(info) {
      try {
        await this.updateInfo(info);
      } catch (error) {

      } finally {
        this.$message(messages["update-info"]);
      }
    },
    showDialog() {
      this.dialogVisible = true;
    },
    createPractice(practiceItem) {
      this.createPracticeAdmin(practiceItem);
      this.$message(messages["create-practice"]);
    },
    removePractice(practiceName) {
      const newPracticeList = {};
      for (let item in this.getCurrentPractices) {
        if (practiceName == item) continue;
        newPracticeList[`${item}`] = this.getCurrentPractices[`${item}`];
      }

      this.removePracticeAdmin(newPracticeList);
      this.$message(messages["remove-practice"]);
    },
    showDialog() {
      this.dialogVisible = true;
    },
    async sendPractice(practice) {
      await this.createUserPractice({ "newUserPractice":practice, "userId": this.nowUserId})
        .finally(() => this.$message(messages["update-info"]));
    },
    searchUserByUid(name, data) {
      // Объединить
      this.userPracticeNow = "";
      this.dataCurrentUser = data; 
      this.userPracticeNow = data?.practice;
      this.nowUserId = name;
    },
  }
}
</script>
