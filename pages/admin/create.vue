<template>
   <el-form :model="controls" :rules="rules" ref="form" @submit.native.prevent="onSubmit">
     <h1 class="mb">Создать новый пост</h1>
       <el-form-item label="В ведите название поста" prop="title">
        <el-input  v-model.trim="controls.title" />
      </el-form-item>

    
      <el-form-item label="Текст в формате .md или .html" prop="text">
        <el-input type="textarea" resize="none" :rows="10" v-model.trim="controls.text" />
      </el-form-item>

      <el-form-item>
        <el-button type="primary" round native-type="submit" :loading="loading">Создать</el-button>
      </el-form-item>
    </el-form>
</template>


<script>
export default {
  layout:'admin',
  middleware:['admin-auth'],
  data() {
    return {
      loading: false,
      controls: {
        text: "",
        title: ""
      },
      rules: {
        text: [
          {
            required: true,
            message: "Текс не должен быть пустым",
            trigger: "blur"
          }
        ],
        title: [
          {
            required: true,
            message: "Название поста неможет быть пустым",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods:{
    onSubmit(){
      this.$refs.form.validate(async valid=>{
        if(valid){
          this.loading = true
          const formData = {
            title:this.controls.title,
            text:this.controls.text
          }
          try {
            
          } catch (e) {
            
          }
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
  form{
    width :600px;
  }
</style>