<template>
  <div class="popover" ref="popover">
    <div v-if="visible" class="content-wrapper" ref="contentWrapper"
         :class="{[`position-${position}`]: true}">
      <slot name="content"></slot>
    </div>
    <span ref="triggerWrapper" style="display: inline-block;">
      <slot></slot>
    </span>
  </div>
</template>
<script>
  export default {
    name: 'LunziPopover',
    props: {
      position: {
        type: String,
        default: 'top',
        validator(value){
          return ['top', 'bottom', 'left', 'right'].indexOf(value) >= 0
        }
      },
      trigger: {
        type: String,
        default: 'click',
        validator(value){
          return ['click', 'hover'].indexOf(value) >= 0
        }
      }
    },
    mounted(){
      if(this.trigger === 'click'){
        this.$refs.popover.addEventListener('click',this.onClick)
      }else{
        this.$refs.popover.addEventListener('mouseenter',this.open)
        this.$refs.popover.addEventListener('mouseleave',this.close)
      }
    },
    destroyed(){
      if(this.trigger === 'click'){
        this.$refs.popover.removeEventListener('click',this.onClick)
      }else{
        this.$refs.popover.removeEventListener('mouseenter',this.open)
        this.$refs.popover.removeEventListener('mouseleave',this.close)
      }
    },
    data(){
      return {
        visible: false,
      }
    },
    computed:{
      openEvent(){
        if(this.trigger === 'click'){
          return 'click'
        }else{
          return 'mouseenter'
        }
      },
      closeEvent(){
        if(this.trigger === 'click'){
          return 'click'
        }else{
          return 'mouseleave'
        }
      }
    },
    methods:{
      positionContent () {
        const {contentWrapper, triggerWrapper} = this.$refs
        document.body.appendChild(contentWrapper)
        let {width, height, top, left} = triggerWrapper.getBoundingClientRect()
        let {height: heightOwn} = contentWrapper.getBoundingClientRect()
        let positions = {
          top:{
            left: left + window.scrollX,
            top: top + window.scrollY,
          },
          bottom:{
            left: left + window.scrollY,
            top: top + height + window.scrollY,
          },
          left:{
            left: left + window.scrollX,
            top: top + window.scrollY + (height - heightOwn) / 2,
          },
          right:{
            left: left + width + window.scrollX,
            top: top + window.scrollY + (height - heightOwn) / 2,
          },
        }
        contentWrapper.style.left = positions[this.position].left + 'px'
        contentWrapper.style.top = positions[this.position].top + 'px'
      },
      onClickDocument (e) {
        if (this.$refs.popover &&
          (this.$refs.popover === e.target || this.$refs.popover.contains(e.target))
        ) { return }
        if(this.$refs.contentWrapper &&
          (this.$refs.contentWrapper === e.target || this.$refs.contentWrapper.contains(e.target)))
        { return }
        this.close()
      },
      open () {
        this.visible = true
        this.$nextTick(() => {
          this.positionContent()
          document.addEventListener('click', this.onClickDocument)
        })
      },
      close () {
        this.visible = false
        document.removeEventListener('click', this.onClickDocument)
      },
      onClick (event) {
        if (this.$refs.triggerWrapper.contains(event.target)) {
          if (this.visible === true) {
            this.close()
          } else {
            this.open()
          }
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
  $border-color: #333;
  $border-radius: 4px;
  .popover{
    display: inline-block;
    vertical-align: top;
    position: relative;
  }
  .content-wrapper{
    position: absolute;
    border: 1px solid $border-color;
    border-radius: $border-radius;
    filter: drop-shadow(0 1px 2px rgba(0,0,0,0.5));
    background: white;
    padding: .5em 1em;
    max-width: 20em;
    word-break: break-all;
    &::before, &::after{
      content: '';
      display: block;
      width: 0;
      height: 0;
      border: 10px solid transparent;
      position: absolute;
    }
    &.position-top{
      margin-top: -15px;
      transform: translateY(-100%);
      &::before, &::after{
        left: 10px
      }
      &::before{
        border-bottom: none;
        border-top-color: black;
        top: 100%;
      }
      &::after{
        border-bottom: none;
        top: calc(100% - 1.5px);
        border-top-color: white;
      }
    }
    &.position-bottom{
      margin-top: 15px;
      &::before, &::after{
        left: 10px
      }
      &::before{
        border-top: none;
        border-bottom-color: black;
        bottom: 100%;
      }
      &::after{
        border-top: none;
        bottom: calc(100% - 1px);
        border-bottom-color: white;
      }
    }
    &.position-left{
      margin-left: -15px;
      transform: translateX(-100%);
      &::before, &::after{
        top: 50%;
        transform: translateY(-50%);
      }
      &::before{
        border-right: none;
        border-left-color: black;
        left: 100%
      }
      &::after{
        border-right: none;
        left: calc(100% - 1.5px);
        border-left-color: white;
      }
    }
    &.position-right{
      margin-left: 15px;
      &::before, &::after{
        top: 50%;
        transform: translateY(-50%);
      }
      &::before{
        border-right-color: black;
        right: 100%;
        border-left: none;
      }
      &::after{
        border-left: none;
        right: calc(100% - 1px);
        border-right-color: white;
      }
    }
  }
</style>