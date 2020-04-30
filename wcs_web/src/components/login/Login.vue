<template>
  <div>
    <div class="login_form">
      <table align="center" style="width: 30%;">
        <tr class=" tr_type"><input type="text"  class=" qxs-icon"  placeholder="用户名" v-model="form.userNo"></tr>
        <tr class=" tr_type"><input type="text"  class=" qxs-icon"  placeholder="密码" v-model="form.userPassword"></tr>
        <tr class=" tr_type"><el-button class="login_btn" @click.native="login" type="primary" round :loading="isBtnLoading">登录</el-button></tr>
        <tr class=" tr_type"><span style="float: right;color: #A9A9AB">忘记密码？</span></tr>
      </table>
      <!--<button class="login_btn el-button el-button&#45;&#45;primary is-round" type="primary" round>登录</button>-->
    </div>
  </div>
</template>


<script>
//  import { userLogin } from '../../api/api';
import axios from 'axios'
import qs from 'qs'

  export default {
    data() {
      return {
        form:{
          userNo:'',
          userPassword:'',
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
      login() {
        if(this.isBtnLoading){
          this.$message.success('正在登陆中请稍后再按。。。');
          return;
        }
        this.isBtnLoading = true;
        if (!this.form.userNo) {
          this.$message.error('请输入用户名');
          this.userNo = 'AAAAAA';
          return;
        }
        if (!this.form.userPassword) {
          this.$message.error('请输入密码');
          return;
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
        this.$router.push({name:'home',
                                    params:{site:this.form.userNo}})

          this.isBtnLoading = false;
      },
      doTest(){
      }
    }
  }
</script>
<style>
  .login_form {
    padding-top: 10%;
    padding-left: 10%;
    padding-right: 10%;
  }
  .qxs-ic_user {
    background: url("../../assets/login/ic_user.png") no-repeat;
    background-size: 13px 15px;
    background-position: 3%;
  }
  .qxs-ic_password {
    background: url("../../assets/login/ic_password.png") no-repeat;
    background-size: 13px 15px;
    background-position: 3%;
    margin-bottom: 20px;
  }

  .login_logo {
    height: 100%;
  }
  .login_btn {
    width: 70%;
    font-size: 16px;
    background: -webkit-linear-gradient(left, #000099, #2154FA); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(right, #000099, #2154FA); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(right, #000099, #2154FA); /* Firefox 3.6 - 15 */
    background: linear-gradient(to right, #000099 , #2154FA); /* 标准的语法 */
    filter: brightness(1.4);
  }
  .tr_type{
    width: 40%;
  }
</style>
