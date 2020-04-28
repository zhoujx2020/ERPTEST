<template>
	<div>
    <el-menu  :default-openeds="default_openeds_array" @select="handleSelect" @open="handleOpen">
            <el-submenu index="1">
              <template slot="title"><i class="el-icon-date"></i>一级菜单1</template>
    
              <el-submenu index="1-1" >
                <template slot="title">二级菜单1</template>
                <!--<el-menu-item v-for="tab in tabs" index='tab.index' @click="toggle(tab.view)">{{tab.label}}</el-menu-item>-->
                <el-menu-item index="1-1-1" >三级菜单1</el-menu-item>
                <el-menu-item index="1-1-2" >三级菜单2</el-menu-item>
                <el-menu-item index="1-1-3">三级菜单3</el-menu-item>
                <el-menu-item index="1-1-4">三级菜单4</el-menu-item>
              </el-submenu>
    
              <el-submenu index="1-2">
                <template slot="title">二级菜单2</template>
                <el-menu-item index="1-2-1">三级菜单1</el-menu-item>
                <el-menu-item index="1-2-2">三级菜单2</el-menu-item>
              </el-submenu>
    
              <el-submenu index="1-3">
                <template slot="title">二级菜单3</template>
                <el-menu-item index="1-3-1">三级菜单11</el-menu-item>
              </el-submenu>
            </el-submenu>
    
            <el-submenu index="2">
              <template slot="title"><i class="el-icon-menu"></i>一级菜单2</template>
           </el-submenu>
      </el-menu>
  </div>

</template>

<script>
export default {
  data () {
    return {
      aaa: this.$route.params.site
    }
  },
  methods:{
          handleSelect(key, keyPath){
            console.log(key, keyPath);
            if (key == '1-1-1'){
              this.currentView = 'componnts'
            }
          },
          handleOpen(key){
            this.default_openeds_array.push(key);
          }
        }
}
</script>
