<template>
  <q-layout view="lHh Lpr lFf">
    <header-block></header-block>
    <q-page-container>
      <router-view />
    </q-page-container>
    <footer-block></footer-block>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import HeaderBlock from "components/HeaderBlock";
import FooterBlock from "components/FooterBlock";

export default defineComponent({
  name: 'MainLayout',

  components: {
    FooterBlock,
    HeaderBlock,
  },

})
</script>
