<template>
  <div style="padding-top: 16px;">
    <h2>常规布局</h2>
    <p>
      <strong>预览</strong>
    </p>

    <g-layout style="color: white; margin-bottom:50px;">
      <g-header style="height: 50px; background:#494ca2;">
        header
      </g-header>
      <g-content style="height: 100px; background:#8186d5;">
        content
      </g-content>
      <g-footer style="height: 50px; background:#c6cbef;">
        footer
      </g-footer>
    </g-layout>

    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<style scoped>
  * {
    box-sizing: border-box;
  }
</style>
<script>
  import GLayout from '../../../src/layout'
  import GHeader from '../../../src/header'
  import GFooter from '../../../src/footer'
  import GContent from '../../../src/content'
  import GSider from '../../../src/sider'
  export default {
    components: {GLayout, GHeader, GFooter, GContent, GSider},
    data () {
      return {
        content: `
          <g-layout style="color: white; margin-bottom:50px;">
            <g-header style="height: 50px; background:#494ca2;">
              header
            </g-header>
            <g-content style="height: 100px; background:#8186d5;">
              content
            </g-content>
            <g-footer style="height: 50px; background:#c6cbef;">
              footer
            </g-footer>
          </g-layout>
      `.replace(/^ {8}/gm, '').trim()
      }
    }
  }
</script>