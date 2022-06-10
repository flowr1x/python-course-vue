<template>
  <div class="page__profile">
    <div class="profile__container">
      <div class="profile__content">
        <div class="profile__title">
          <h2>Профиль</h2>
          <my-button class="profile__btn" @click="logout">Выйти</my-button>
        </div>
        <!-- ИНФОРМАЦИЯ О USER -->
        <profile-user-info :info="getInfoUser" @submitHandler="submitHandler"/>
        <div class="profile__show">
          <!-- ПОИСК ПРАКТИЧЕСКИХ РАБОТ USER -->
          <div v-if="isAdmin">
            <my-dialog v-model:show="dialogVisibleUserSearch">
              <search-users-in-list 
                :users="getListAllUsers" 
                @searchUserByUid="searchUserByUid"/>
            </my-dialog>
            <h3 class="profile__title">Индивидуальные задания пользователей</h3>
            <my-button @click="dialogVisibleUserSearch = true">Поиск пользователей</my-button>
            <div v-if="nowUserId">
              <show-practice-list-user
                :userPractice="userPracticeNow"
                @sendPracticeInUser="sendPractice"/>
            </div>
            <div class="profile-practice__error" v-else-if="!nowUserId">Выберете пользователя</div>
            
          </div>
          <!-- СОЗДАНИЕ ПРАТИЧЕСКИХ РАБОТ -->
          <div v-if="isAdmin">
            <h3 class="profile__title">Создать практические работы</h3>
            <my-dialog v-model:show="dialogVisible">
              <practice-form @createPractice="createPractice" />
            </my-dialog>
            <my-button @click="showDialog">Создать</my-button>
            <practice-list-admin
              :list="getCurrentPractices"
              @remove="removePractice"/>
          </div>
          <!-- ДОБАВЛЕНИЕ ССЫЛКИ ЮЗЕРОМ -->
          <div v-if="!isAdmin">
              <practice-list-user
              :list="getCurrentPractices"
              :userPractice="getPracticeCurrentUser"
              @sendPracticeInUser="sendPractice"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"

import PracticeListUser from "@/components/ComponentsProfile/PracticeListUser"
import PracticeForm from "@/components/ComponentsProfile/PracticeForm"
import ProfileUserInfo from "@/components/ComponentsProfile/ProfileUserInfo"
import PracticeListAdmin from "@/components/ComponentsProfile/PracticeListAdmin"
import SearchUsersInList from "@/components/ComponentsProfile/SearchUsersInList"
import ShowPracticeListUser from "@/components/ComponentsProfile/ShowPracticeListUser"


export default {
  components: {
    PracticeForm, 
    ProfileUserInfo, 
    SearchUsersInList, 
    PracticeListAdmin, 
    PracticeListUser,
    ShowPracticeListUser,
  },
  data() {
    return {
      dialogVisible: false,
      dialogVisibleUserSearch: false,
      userPracticeNow: "",
      nowUserId: "",
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
      } catch (error) {}
    },
    createPractice(practiceItem) {
      this.createPracticeAdmin(practiceItem)
    },
    removePractice(practiceName) {
      const newPracticeList = {};
      for (let item in this.getCurrentPractices) {
        if (practiceName == item) continue;
        newPracticeList[`${item}`] = this.getCurrentPractices[`${item}`];
      }

      this.removePracticeAdmin(newPracticeList);
    },
    showDialog() {
      this.dialogVisible = true;
    },
    async sendPractice(practice) {
      await this.createUserPractice({ "newUserPractice":practice, "userId": this.nowUserId});
    },
    searchUserByUid(name) {
      this.userPracticeNow = "";
      this.userPracticeNow = this.getListAllUsers[name]?.practice;
      this.nowUserId = name;
    },
  }
}
</script>
