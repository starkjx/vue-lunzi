<template>
  <div style="padding-top: 16px;">
    <h2>只展示一个（single标记）</h2>
    <g-collapse :selected.sync="selectedTab" single>
      <g-collapse-item title="我的收藏" name="1">收藏内容</g-collapse-item>
      <g-collapse-item title="我的相册" name="2">相册内容</g-collapse-item>
      <g-collapse-item title="我的文件" name="3">文件内容</g-collapse-item>
    </g-collapse>
    内容展示：{{selectedTab.join('、')}}

    <p><strong>代码</strong></p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>
  import GCollapse from '../../../src/collapse'
  import GCollapseItem from '../../../src/collapse-item'
  export default {
    components: { GCollapse, GCollapseItem },
    data () {
      return {
        selectedTab: ['3'],
        content: `
          <g-collapse :selected.sync="selectedTab" single>
            <g-collapse-item title="我的收藏" name="1">收藏内容</g-collapse-item>
            <g-collapse-item title="我的相册" name="2">相册内容</g-collapse-item>
            <g-collapse-item title="我的文件" name="3">文件内容</g-collapse-item>
          </g-collapse>
          内容展示：{{selectedTab.join('、')}}
      `.replace(/\t+| +/g, '').trim()
      }
    }
  }
</script>