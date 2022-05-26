<template>
  <div class="page__profile">
    <div class="profile__container">
      <div class="profile__content">
        <div class="profile__title">
          <h2>Профиль</h2>
          <my-button class="profile__btn" @click="logout">Выйти</my-button>
        </div>
        <profile-user-info 
          :info="info" 
          @submitHandler="submitHandler"/>
        <div class="profile__show">
          <div v-if="isAdmin">
            <my-dialog v-model:show="dialogVisibleUserSearch">
              <search-users-in-list :users="users" @sendNameUser="showNameUser"/>
            </my-dialog>
            <h3 class="profile__title">Практические работы пользователей</h3>
            <my-button @click="dialogVisibleUserSearch = true">Поиск пользователей</my-button>
            <div v-if="userPracticeNow">
              <practice-list-user
              :list="practice"
              :userPractice="userPracticeNow"
              @sendPracticeInUser="sendPractice"/>
            </div>
          </div>
          <div v-if="isAdmin">
            <h3 class="profile__title">Создать практические работы</h3>
            <my-dialog v-model:show="dialogVisible">
              <practice-form @createPractice="createPractice" />
            </my-dialog>
            <my-button @click="showDialog">Создать</my-button>
            <practice-list-admin
              :list="practice"
              @remove="removePractice"/>
          </div>
          <div v-if="!isAdmin">
              <practice-list-user
              :list="practice"
              :userPractice="userPractice"
              @sendPracticeInUser="sendPractice"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex"
import listPractice from "@/mocks/practiceWorks.js"
import PracticeListUser from "@/components/PracticeListUser"
import PracticeForm from "@/components/PracticeForm"
import ProfileUserInfo from "@/components/ProfileUserInfo"
import PracticeListAdmin from "@/components/PracticeListAdmin"
import SearchUsersInList from "@/components/SearchUsersInList"

export default {
  components: {
    PracticeForm, ProfileUserInfo, SearchUsersInList, PracticeListAdmin, PracticeListUser
  },
  data() {
    return {
      listPr: listPractice,
      dialogVisible: false,
      dialogVisibleUserSearch: false,
      userPracticeNow: "",
      nowUserId: "",
    }
  },
  computed: {
    ...mapGetters(["info", "practice", "userPractice", "users"]),
    isAdmin() {
      return this.$store.getters.isAdmin;  
    }
  },
  methods: {
    async logout() {
      await this.$store.dispatch("logout");
      this.$router.push("/login?message=logout");
    },
    async submitHandler(info) {
      try {
        await this.$store.dispatch("updateInfo", info);
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
    async sendPractice(practice) {
      await this.$store.dispatch("createUserPractice", { "newUserPractice":practice, "userId": this.nowUserId});
    },
    showNameUser(name) {
      this.userPracticeNow = this.users[name]?.practice;
      this.nowUserId = name;
    }
  }
}
</script>
