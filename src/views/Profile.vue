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
        <div v-if="isAdmin" class="profile__create-practice">
          <h3 class="profile__title">Создание практических работ</h3>
          <my-dialog v-model:show="dialogVisible">
            <practice-form @createPractice="createPractice" />
          </my-dialog>
          <my-button @click="showDialog">Создать</my-button>
        </div>
        <practice-list 
          :list="practice"
          :userPractice="userPractice"
          @remove="removePractice"
          @sendPracticeInUser="sendPractice"/>
        <!-- <PracticeTableList 
          :list="listPr" 
          v-if="isAdmin"/> -->
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex"
import listPractice from "@/mocks/practiceWorks.js"
import PracticeTableList from "@/components/PracticeTableList"
import PracticeList from "@/components/PracticeList"
import PracticeForm from "@/components/PracticeForm"
import ProfileUserInfo from "@/components/ProfileUserInfo"

export default {
  components: {
    PracticeTableList, PracticeList, PracticeForm, ProfileUserInfo
  },
  data() {
    return {
      listPr: listPractice,
      dialogVisible: false,
    }
  },
  computed: {
    ...mapGetters(["info", "practice", "userPractice"]),
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
      await this.$store.dispatch("createUserPractice", practice);
    },
  }
}
</script>
