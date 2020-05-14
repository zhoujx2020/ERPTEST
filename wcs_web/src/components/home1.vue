<template>
  <el-container class="home-container">
    <!--页面头 -->
    <el-header>
      <div id="log">
        <img src="../assets/login/ic_user.png" alt=""/>
        <span>XXX管理系统</span>
      </div>
      <el-button type="info" @click="logout">退出</el-button>
    </el-header>
    <!-- 主题 -->
    <el-container>
      <!-- 侧边栏 -->
      <el-aside width="200px">
        <el-menu  default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" background-color="#545c64"
                  text-color="#fff" active-text-color="#ffd04b">
      <!-- 一级菜单 -->
      <el-submenu index="1">
        <!-- 一级菜单的模板区 -->
        <template slot="title">
          <!-- 图标 -->
          <i class="el-icon-location"></i>
          <!-- 文本 -->
          <span>导航一</span>
        </template>
        <!-- 二级菜单 -->
        <el-menu-item index="1-4-1">
          <template slot="title">
            <!-- 图标 -->
            <i class="el-icon-location"></i>
            <!-- 文本 -->
            <span>菜单1</span>
          </template>
        </el-menu-item>
      </el-submenu>
    </el-menu>
      </el-aside>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>
<script type="text/ecmascript-6">
  export default{
    methods:{
      logout(){
        window.sessionStorage.clear()
        this.$router.push('/')
      }
    }
  }
</script>
<style scoped>
.home-container{
    height: 100%;
  }
  .el-header{
    background-color: #373d41;
    display: flex;
    justify-content: space-between;
    padding-left: 0px;
    align-items: center;
    color: #fff;
    font-size: 20px;
  }
  #log{
    display: flex;
    align-items:center;
  }
  .el-aside{
    background-color: #333744;
  }
  .el-main{
    background-color: #EAEDF1;
  }
</style>