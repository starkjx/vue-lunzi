<template>
  <div class="tabs-body">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'LunziTabsBody',
    inject: ['eventBus'],
  }
</script>
<style>
  .tabs-body{

  }
</style>