<template>
  <div class = "login_container">
    <div class="login_box">
      <!-- 头像区 -->
      <div class="avatar_box">
        <img src="@/assets/login/log.jpg" alt="">
      </div>
      <!-- 登录表单区 -->
      <el-form  label-width="0px" class="login_form" :model="form" ref="formRef">
        <!-- 用户名 -->
        <el-form-item prop="userNo" >
          <el-input prefix-icon="el-icon-user" v-model="form.username"></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item  prop="userPassword">
          <el-input prefix-icon="el-icon-lock" v-model="form.password" type="password"></el-input>
        </el-form-item>
        <!-- 按钮 -->
         <el-form-item class="btns">
          <el-button type="primary" @click="login">登录</el-button>
          <el-button type="info" @click="resetForm">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>


<script scope>
//  import { userLogin } from '../../api/api';
import axios from 'axios'
import qs from 'qs'

  export default {
    data() {
      return {
        form:{
          username:'',
          password:'',
        },
        age: '',
        insetTime:'',
        isBtnLoading: false
      }
    },
    created () {
      if(JSON.parse( localStorage.getItem('user')) && JSON.parse( localStorage.getItem('user')).userNo){
        this.userNo = JSON.parse( localStorage.getItem('user')).userNo;
        this.userPassword = JSON.parse( localStorage.getItem('user')).userPassword;
      }
    },
    computed: {
      btnText() {
        if (this.isBtnLoading) return '登录中...';
        return '登录';
      }
    },
    methods: {
      // 重置登录表单
      resetForm(){
        this.$refs.formRef.resetFields()
        // this.form.userNo = ''
        // this.form.userPassword = ''
      },
      async login() {
        
        if(this.isBtnLoading){
          this.$message.success('正在登陆中请稍后再按。。。');
          return;
        }
        this.isBtnLoading = true;
        if (!this.form.username) {
          this.$message.error('请输入用户名');
          return;
        }
        if (!this.form.password) {
          this.$message.error('请输入密码');
          return;
        }
        const { data : res} = await this.$http.post('login',this.form)
        // console.log(res.meta.status)
        if(res.meta.status != 200){
            this.$message.error(res.meta.msg);
            this.isBtnLoading = false
            return 
        }else{
            this.$message.success("登录成功");
            this.$router.push({name:'home1',params:{site:this.form.username}})
            console.log(res)
            window.sessionStorage.setItem('token',res.data.token)
            this.isBtnLoading = false
            return ;
        }

        // axios.post('/api/userdb/login',qs.stringify(this.form))
        //     .then((res) => {
        //       let sums = res.data.data;
        //       if(res.data.code == 0){
        //         // this.$message.success('登录成功'+res.data.data);
        //         this.$router.push({name:'home',
        //                             params:{site:this.form.userNo}});
        //       }else{
        //         this.$message.error(res.data+"---");
        //       }
        //   })
        //   .catch((err) => {
        //     // if(String(err).indexOf("Request failed with status code 504") > -1){
        //     if(String(err).length > 9){
        //       this.$message.error('网络异常或者后台服务未启动'+err);
        //     }
        //   })
        
      },
      doTest(){
      }
    }
  }
</script>
<style scoped>
 .login_container{
   background-color: #2b4b6b;
   height: 100%;
 }
 .login_box{
   width: 450px;
   height: 300px;
   background-color: #fff;
   border-radius: 3px;
   position: absolute;
   left: 50%;
   top: 50%;
   transform: translate(-50%,-50%);
 }
  .avatar_box{
      height: 130px;
      width: 130px;
      border: 1px solid #eee;
      border-radius: 50%;
      padding: 10px;
      box-shadow: 0 0 10px #ddd;
      position: absolute;
      left: 50%;
      transform: translate(-50%,-50%);
      background-color: #fff;
   }
   img{
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: #eee;
   }
   .btns{
     display: flex;
     justify-content: flex-end;
   }
   .login_form{
     position: absolute;
     bottom: 0;
     width: 100%;
     padding: 0 20px;
     box-sizing: border-box;
   }
</style>
