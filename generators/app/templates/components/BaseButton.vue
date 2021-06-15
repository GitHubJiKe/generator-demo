<template>
  <button>
    <slot></slot>
  </button>
</template>
    
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class BaseButton extends Vue {}
</script>
    
<style lang="less" scoped>
</style>