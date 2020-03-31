<template>
  <div class="page-wrap">
    <el-breadcrumb separator="/" class="mb">
      <el-breadcrumb-item to="/admin/list">Посты</el-breadcrumb-item>
      <el-breadcrumb-item to="/admin/list">{{post.title}}</el-breadcrumb-item>
    </el-breadcrumb>

    <el-form :model="controls" :rules="rules" ref="form" @submit.native.prevent="onSubmit">
      <!-- <h2>Войти в панель администратора</h2> -->

      <el-form-item label="Текст в формате .md или .html" prop="text">
        <el-input type="textarea" resize="none" :rows="10" v-model.trim="controls.text" />
      </el-form-item>

      <el-form-item>
        <el-button type="primary" round native-type="submit" :loading="loading">Обновить</el-button>
      </el-form-item>
    </el-form>

    <div class="mb">
      <small class="mr">
          <i class="el-icon-time"></i>
          <span >{{new Date(post.date).toLocaleString()}}</span>
      </small>


      <small>
           <i class="el-icon-view"></i>
        <span style="">{{ post.views }}</span>
      </small>
    </div>
  </div>
</template>


<script>
export default {
  layout: "admin",
  middlware: ["admin-auth"],
  head(){
      return {
          title:`Пост ${this.post.title}`
      }
  },
  async asyncData({ store, params }) {
    const post = await store.dispatch("post/fetchAdminById", params.id);
    return { post };
  },
  validate({params}){
      return !!params.id
  },
  data() {
    return {
      loading: false,
      controls: {
        text: "",
        password: ""
      },
      rules: {
        text: [
          {
            required: true,
            message: "Текс не должен быть пустым",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    onSubmit() {
      this.$refs.form.validate(async valid => {
        if (valid) {
          this.loading = true;

            const formData = {
                text:this.controls.text,
                id:this.post._id
            }
            try {
                await this.$store.dispatch('post/update',formData)
                this.$message.success('Пост обновлен')
                this.loading = false
            } catch (e) {
                this.loading = false
            }
          
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.page-wrap {
  width: 600px;
}
.mr{
    margin-right: 2rem;
}
</style>