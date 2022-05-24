<template>
  <sign-in v-if="isLogIn == false" @log-in="isLogIn = $event" />
  <div class="wrapper" v-if="isLogIn">
    <NavBar @log-out="isLogIn = $event" />
    <router-view />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import SignIn from "@/components/SignIn.vue";



export default {
  name: "App",
  components: {
    SignIn,
    NavBar,
  },
  data(){
    return {
      isLogIn: true/*Пароль-admin,логин-admin*/
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: black;
}

p {
  font-size: 14pt;
}

.wrapper {
  width: 100vw;
  height: 100vh;
  padding: 35px 100px 35px 100px;
}
</style>
