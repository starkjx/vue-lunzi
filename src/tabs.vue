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
      if(this.$children.length === 0){
        console && console.warn &&
        console.warn('tabs子组件应该是tabs-head和tabs-body,但你没有写')
      }
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