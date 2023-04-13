<template>
  <q-layout view="lHh Lpr lFf">
    <header-block></header-block>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import HeaderBlock from "components/HeaderBlock";

export default defineComponent({
  name: 'MainLayout',

  components: {
    HeaderBlock,
  },

})
</script>
