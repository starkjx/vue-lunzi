<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>
<script>
  import Vue from 'vue'

  export default {
    name: 'LunziTabs',
    props: {
      selected: {
        type: String,
        required: true
      },
      direction:{
        type: String,
        default: 'horizontal',
        validator(value){
          return ['horizontal', 'vertical'].indexOf(value) >= 0
        }
      }
    },
    mounted() {
      this.$children.forEach((vm) => {
        if(vm.$options.name === 'LunziTabsHead'){
          vm.$children.forEach((vmC) =>{
            if(vmC.$options.name === 'LunziTabsItem' && vmC.name === this.selected){
              this.eventBus.$emit('update:selected', this.selected, vmC)
            }
          })
        }
      })
    },
    data(){
      return {
        eventBus: new Vue()
      }
    },
    provide(){
      return {
        eventBus: this.eventBus
      }
    }
  }
</script>
<style>
  .tabs{

  }
</style>