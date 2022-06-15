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
                :dataUser="dataCurrentUser"
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
        <my-swip/>
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
import ShowPracticeListUser from "@/components/ComponentsProfile/ShowPracticeListUser"

import MySwip from "@/components/ComponentsProfile/MySwip"

export default {
  components: {
    PracticeForm, 
    ProfileUserInfo, 
    SearchUsersInList, 
    PracticeListAdmin, 
    PracticeListUser,
    ShowPracticeListUser,
    MySwip
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

<style>
.swiper-box {
  
  min-width: 0;
  height: 200px;
  box-shadow: 2px 9px 50px hsla(0, 0, 0, .1),
        -2px 9px 60px hsla(0, 0, 0, .1);
}
.swiper-wrapper {
  width: 100%;
}
</style>
