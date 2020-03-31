<template>
  <article class="post">
    <header class="post_header">
      <div class="post-title">
        <h1>Post title</h1>
        <nuxt-link to="/">
          <i class="el-icon-back"></i>
        </nuxt-link>
      </div>
      <div class="post-info">
        <small>
          <i class="el-icon-time"></i>
          {{ new Date().toLocaleString() }}
        </small>
        <small>
          <i class="el-icon-view"></i>
          42
        </small>
      </div>
      <img
        src="https://avatars.mds.yandex.net/get-pdb/1384286/36c64871-a22e-48b6-85b6-1bb0030a5712/s1200"
        alt
        class="post-img"
      />
    </header>
    <main class="post-content">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A optio consectetur minus sunt architecto at hic, perferendis doloremque. Ab optio laborum velit, molestias quia possimus! Beatae accusamus consequatur quis repellendus.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A optio consectetur minus sunt architecto at hic, perferendis doloremque. Ab optio laborum velit, molestias quia possimus! Beatae accusamus consequatur quis repellendus.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A optio consectetur minus sunt architecto at hic, perferendis doloremque. Ab optio laborum velit, molestias quia possimus! Beatae accusamus consequatur quis repellendus.</p>
    </main>
    <footer>
      <app-comment-form v-if="canAddComment"
      @created="createCommendHandeler"
       />

      <div class="comments" v-if="true">
          <app-comment
            v-for="comment in 4"
            :key="comment"
            :comment="comment"
          />
      </div>
      <div class="text-center" v-else>
        Коментариев нет
      </div>
    </footer>
  </article>
</template>


<script>
import AppComment from '@/components/main/Comment'
import AppCommentForm from '@/components/main/CommentForm'

export default {
  components:{AppComment,AppCommentForm},
  validate({ params }) {
    return Boolean(params.id);
  },
  data(){
    return{
    canAddComment: true
    }
  },
  methods:{
    createCommendHandeler(){
      this.canAddComment  = false
    }
  }
};
</script>

<style lang="scss" scoped>
.post {
  max-width: 600px;
  margin: 0 auto;
}

.post-title{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}


.post-info{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: .5rem;
}

.post-img{
  width: 100%;
  height: auto;
}

.post-header{
  margin-bottom: 1.5rem;
}

.post-content{
  margin-bottom: 2rem;
}
</style>
