<template>
  <div class="flex flex-wrap card-container gap-0 max-w-8rem">
    <div class="flex align-content-end">
      <i class="pi pi-sun"></i><InputSwitch v-model="dark" /><i class="pi pi-moon"></i>
    </div>
  </div>
</template>

<script>
import InputSwitch from 'primevue/inputswitch';

export default {
  name: "NavBar",
  components: {
    InputSwitch,
  },
  data() {
    return {
      dark: true,
    };
  },
}
</script>

<style scoped>

</style>