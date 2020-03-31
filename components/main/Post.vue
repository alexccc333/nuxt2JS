<template>
  <el-card shadow="hover" :body-style="{padding:0}" class="post">
    <header slot="header" class="post_header">
      <h3>Post title</h3>
      <small>
        <i class="el-icon-time"></i>
        {{new Date().toLocaleString()}}
      </small>
    </header>
    <div class="post-body">
      <img
        src="https://avatars.mds.yandex.net/get-pdb/1384286/36c64871-a22e-48b6-85b6-1bb0030a5712/s1200"
        alt
        class="post-img"
      />
    </div>
    <footer class="post-footer">
      <el-button round @click="openPost">Открыть пост</el-button>

      <span>
        <i class="el-icon-message"></i>
        12
      </span>
    </footer>
  </el-card>
</template>

<script>
export default {
  methods: {
    openPost() {
      const id = 'test-id'
      this.$router.push(`/post/${id}`)
    }
  }
};
</script>

<style lang="scss" scoped>
.post {
  margin-bottom: 1.5rem;
}
.post-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.post-img {
  width: 100%;
  height: auto;
}
.post-body {
  // margin-bottom: 1rem;
}
.post-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
}
</style>
