<template>
  <div class="data-page">
    <project-quality class="content"/>
  </div>
</template>

<script>
import ProjectQuality from './components/ProjectQuality';

export default {
  components: { ProjectQuality }
}
</script>
<style lang="less" scoped>
.data-page {
  background-color: #fff;
  min-height: inherit;
  padding: 0 24px;
  .content{
    padding-top: 20px;
  }
}
</style>