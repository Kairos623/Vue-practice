<template>
  <nav class="nav">
    <img alt="Vue logo" src="@/components/Group.png">
    <div class="nav-btns">
      <v-button @click="$router.push('/ActiveUsers')">Активные пользователи</v-button>
      <v-button @click="$router.push('/UsersAll')">Список пользователей</v-button>
      <v-button @click="$router.push('/BlackList')">Черный список</v-button>
      <v-button @click="$router.push('/History')">История</v-button>
      <v-button @click="$emit('logOut', false)">Выход</v-button>
    </div>
  </nav>
</template>

<script>
export default {
  name: "v-nav"
};
</script>

<style>
.nav {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  border-bottom: 3px solid #6C757D;
  margin-bottom: 40px;
}
</style>