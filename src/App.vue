<template>
  <NavBar/>
  <LetterGuess class="home"/>
</template>

<script>
import LetterGuess from './components/LetterGuess.vue'
import NavBar from "@/components/NavBar";
import { usePrimeVue } from 'primevue/config';
import 'primevue/resources/themes/md-dark-indigo/theme.css';
export default {
  name: 'App',
  components: {
    LetterGuess,
    NavBar
  },
  mounted(){
    usePrimeVue().changeTheme('md-dark-indigo', 'md-dark-indigo', 'theme-link', () => {});
  }
}
</script>

<style>
body {
  height: 100vh;
}
.home {
  height: 100vh;
}
</style>
