<template>
  <div style="padding-top: 16px;">
    <h2>内侧边栏布局</h2>
    <p>
      <strong>预览</strong>
    </p>


    <g-layout style="color: white; overflow:hidden; margin-bottom:50px;">
      <g-header style="height: 50px; background:#a6e3e9;">
        header
      </g-header>
      <g-layout>
        <g-sider style="height: 100px; background:#ffe6eb; width:200px; color: black;">
          sider
        </g-sider>
        <g-content style="height: 100px; background:#cbf1f5;">
          content
        </g-content>
      </g-layout>
      <g-footer style="height: 50px; background:#defcfc;">
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
          <g-layout style="color: white; overflow:hidden; margin-bottom:50px;">
            <g-header style="height: 50px; background:#a6e3e9;">
              header
            </g-header>
            <g-layout>
              <g-sider style="height: 100px; background:#ffe6eb; width:200px; color: black;">
                sider
              </g-sider>
              <g-content style="height: 100px; background:#cbf1f5;">
                content
              </g-content>
            </g-layout>
            <g-footer style="height: 50px; background:#defcfc;">
              footer
            </g-footer>
          </g-layout>
      `.replace(/^ {8}/gm, '').trim()
      }
    }
  }
</script>