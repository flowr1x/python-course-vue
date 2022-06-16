<template>
  <div class="profile__search search-profile">
    <h3 class="search-profile__title">Поиск пользователей</h3>

    <div class="search-profile__content">
      <my-input-form placeholder="Поиск" class="search-profile__search"/>
          
      <search-users-in-item
        v-for="(userData, user) in users"
        :key="user"
        :userData="userData"
        :uid="user"
        @searchUserByUid="(uid, data) => { this.$emit('searchUserByUid', uid, data)}"
        />
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
}
</script>
