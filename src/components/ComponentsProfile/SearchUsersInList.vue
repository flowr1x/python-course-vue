<template>
  <div class="profile__search search-profile">
    <h3 class="search-profile__title">Поиск пользователей</h3>

    <div class="search-profile__content">
      <div class="search-profile__search-box">
        <my-input-form v-model="searchInput" placeholder="Поиск" class="search-profile__search-input"/>
        <div class="search-profile__box-select">
          <div class="search-profile__data">Поиск по группе</div>
          <v-select v-model="selectedGroup" :options="groups"/>
        </div>
      </div>
      <search-users-in-item
        v-for="(userData, user) in currentUsers"
        :key="user"
        :userData="userData"
        :uid="user"
        @searchUserByUid="(uid, data) => { this.$emit('searchUserByUid', uid, data)}"
      />
      <div class="profile-practice__error" v-if="!isEmpty(currentUsers)">Студентов нет</div>
    </div>
  </div>
</template>

<script>
import SearchUsersInItem from "@/components/ComponentsProfile/SearchUsersInItem"
export default {
  name: "search-users-in-list",
  props: ["users"],
  components: {
    SearchUsersInItem
  },
  data() {
    return {
      groups: [],
      selectedGroup: null,
      currentUsers: {},
      searchInput: "",
    }
  },
  mounted() {
    this.currentUsers = this.users;
    for (let user in this.users) {
      const groupUser = this.users[user].info;
      this.groups.push({code: groupUser, label: groupUser.group});
    }
  },
  methods: {
    isEmpty(obj) {
      for (let item in obj) return true;
      return false
    },
  },
  watch:{
    selectedGroup() {
      if (!this.selectedGroup) {
        this.currentUsers = this.users;
      } else {
        this.currentUsers = {};
        
        for (let user in this.users) {
          const currentGroup = this.users[user].info.group;
          if (this.selectedGroup.label === currentGroup) {
            this.currentUsers[user] = this.users[user];
          }
        }
      }
            
    },
    searchInput() {
      // Обнуление currentUsers
      this.selectedGroup = null;
      this.currentUsers = {};

      const textInput = this.searchInput.toLowerCase();

      for (let user in this.users) {
        const currentUserInfo = this.users[user].info;
        const currentUserFullName = (currentUserInfo.firstName + " " + currentUserInfo.lastName).toLowerCase();
        
        if (currentUserFullName.includes(textInput)) {
          this.currentUsers[user] = this.users[user];
        }
      }
    }
  }
}
</script>
