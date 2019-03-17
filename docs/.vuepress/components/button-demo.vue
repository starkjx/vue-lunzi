<template>
  <div>
    <div style="padding-top: 16px;">

      <p><strong>预览</strong></p>
      <g-button>默认</g-button>
      <g-button icon="left">左图标</g-button>
      <g-button icon="right" iconPosition="right">右图标</g-button>
      <g-button :loading="true">加载中</g-button>
      <g-button disabled>不可选</g-button>

      <p><strong>代码</strong></p>
      <pre><code>{{content1}}</code></pre>
    </div>

    <div style="padding-top: 16px;">

      <p><strong>预览</strong></p>

      <g-button-group>
        <g-button icon="left">上一页</g-button>
        <g-button>1</g-button>
        <g-button>2</g-button>
        <g-button disabled>当前页</g-button>
        <g-button>3</g-button>
        <g-button>4</g-button>
        <g-button icon="right">下一页</g-button>
      </g-button-group>

      <p><strong>代码</strong></p>
      <pre><code>{{content2}}</code></pre>
    </div>
  </div>
</template>
<script>
  import Button from '../../../src/button'
  import ButtonGroup from '../../../src/button-group'

  export default {
    components: {
      'g-button': Button,
      'g-button-group': ButtonGroup
    },
    data () {
      return {
        content1: `
<g-button icon="left">左图标</g-button>
<g-button icon="setting" iconPosition="right">右图标</g-button>
<g-button :loading="true">加载中</g-button>
<g-button disabled>不可选</g-button>
      `.replace(/\t+/g, '').trim(),
        content2: `
<g-button-group>
  <g-button icon="left">上一页</g-button>
  <g-button>1</g-button>
  <g-button>2</g-button>
  <g-button disabled>当前页</g-button>
  <g-button>3</g-button>
  <g-button>4</g-button>
  <g-button icon="right">下一页</g-button>
</g-button-group>
      `.replace(/\t+/g, '').trim(),
      }
    }
  }
</script>