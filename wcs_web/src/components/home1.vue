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
      <!-- :default-active=this.$router.history.current.path -->
      <el-aside :width=" isCollapse ? '64px' : '170px'">
        <div class="toogle-button" @click="toggleCollspace">|||</div>
        <el-menu background-color="#545c64" text-color="#fff" active-text-color="#409eff"
         :unique-opened="true" :collapse="isCollapse" :collapse-transition="false" :router="true"
         :default-active="activePath">
      <!-- 一级菜单 -->
      <el-submenu :index="items.id + ''" v-for="items in menuList" :key="items.id">
        <!-- 一级菜单的模板区 -->
        <template slot="title">
          <!-- 图标 -->
            <!-- 图标可以自定义，通过:class='key.xx' -->
          <i class="el-icon-location"></i>
          <!-- 文本 -->
          <span>{{items.authName}}</span>
        </template>
        <!-- 二级菜单 -->
        <el-menu-item :index="'/' + item.path" v-for="item in items.children" :key="item.id"
               @click="saveNavStatus('/' + item.path)">
          <template slot="title">
            <!-- 图标 -->
            <!-- 图标可以自定义，通过:class='key.xx' -->
            <i class="el-icon-menu"></i>
            <!-- 文本 -->
            <span>{{item.authName}}</span>
          </template>
        </el-menu-item>
      </el-submenu>
    </el-menu>
      </el-aside>
      <el-main>
        <!-- 路由占位符 -->
        <router-view/>
      </el-main>
    </el-container>
  </el-container>
</template>
<script type="text/ecmascript-6">
  export default{
    created(){
      this.getMenuList();
      this.activePath = window.sessionStorage.getItem('activePath');
    },
    data(){
      return{
        menuList :[],
        //是否折叠，false：不折叠
        isCollapse : false,
        activePath : '',
      }
    },
    methods:{
      logout(){
        window.sessionStorage.clear()
        this.$router.push('/')
      },
      async getMenuList(){
        const {data : res} = await this.$http.get('menus') 
        if(res.meta.status != 200) return this.$message.error(res.meta.msg)
        this.menuList = res.data
        
      },
      //点击按钮切换菜单的折叠和展开
      toggleCollspace(){
        this.isCollapse = ! this.isCollapse
      },
      saveNavStatus(activePath){
        window.sessionStorage.setItem("activePath",activePath);
        this.activePath = activePath;
      }
    }
  }
</script>
<style  scoped>
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
  .el-menu{
      border-right: none;
    }
  .el-main{
    background-color: #EAEDF1;
  }
  .iconFont{
    margin-right: 10px;
  }
  .toogle-button{
    background-color: #4a5064;
    font-size: 10px;
    line-height: 24px;
    color: #fff;
    text-align: center;
    letter-spacing: 0.2em;
    cursor: pointer;
  }
</style>