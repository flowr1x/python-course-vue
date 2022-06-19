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
      filterUsers: {}
    }
  },
  mounted() {
    this.filterGroupAndUser();
  },
  methods: {
    isEmpty(obj) {
      for (let item in obj) return true;
      return false
    },
    filterGroupAndUser() {
      // Можно оптимизировать 
      for (let user in this.users) {
        const groupUser = this.users[user].info;
        const repeat = false;
  
        for (let group of this.groups) {
          if (groupUser.group === group.label) repeat = true;
        }
  
        if (!(groupUser.group === "00.00.00-00-00")) {
          this.currentUsers[user] = this.users[user];
          this.filterUsers[user] = this.users[user];
          if (!repeat) this.groups.push({code: groupUser, label: groupUser.group});
        } 
      }
    }
  },
  watch:{
    selectedGroup() {
      if (!this.selectedGroup) {
        this.currentUsers = this.filterUsers;
      } else {
        this.currentUsers = {};
        
        for (let user in this.filterUsers) {
          const currentGroup = this.filterUsers[user].info.group;
          if (this.selectedGroup.label === currentGroup) {
            this.currentUsers[user] = this.filterUsers[user];
          }
        }
      }
            
    },
    searchInput() {
      // Обнуление currentUsers
      this.selectedGroup = null;
      this.currentUsers = {};

      const textInput = this.searchInput.toLowerCase();

      for (let user in this.filterUsers) {
        const currentUserInfo = this.filterUsers[user].info;
        const currentUserFullName = (currentUserInfo.firstName + " " + currentUserInfo.lastName).toLowerCase();
        
        if (currentUserFullName.includes(textInput)) {
          this.currentUsers[user] = this.filterUsers[user];
        }
      }
    }
  }
}
</script>
