<template>
  <base-button>Base Button</base-button>
</template>
    
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import BaseButton from "./components/BaseButton.vue";

@Component({
  components: {
    BaseButton,
  },
})
export default class App extends Vue {}
</script>
    
<style lang="less" scoped>
</style>