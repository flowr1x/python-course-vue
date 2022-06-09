<template>
  <div class="profile__practice profile-practice">
    <h3 class="profile-practice__title">Поиск пользователей</h3>
    <my-input-form placeholder="Поиск"/>
    <search-users-in-item 
      v-for="(userData, user) in users" 
      :key="user"
      :userData="userData"
      :uid="user"
      @searchUserByUid="(uid) => { this.$emit('searchUserByUid', uid)}"
      />
  </div>
</template>

<script>
import SearchUsersInItem from "@/components/SearchUsersInItem"
export default {
  name: "search-users-in-list",
  props: ["users"],
  components: {
    SearchUsersInItem
  },
}
</script>
