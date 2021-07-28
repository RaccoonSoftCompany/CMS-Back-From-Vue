<template>
  <div>
    <div v-for="menu in menus" :key="menu.path">
      <el-submenu
        v-if="menu.children && menu.children.length > 0"
        :index="menu.path"
      >
        <template slot="title">
          <i :class="menu.meta.icon" :style="menu.meta.style"></i>&nbsp;
          <span :class="menuTitleDisplay">{{ menu.meta.title }}</span>
        </template>

        <sidebar-item :menus="menu.children"></sidebar-item>
      </el-submenu>

      <el-menu-item v-else :index="menu.path">
        <i :class="menu.meta.icon" :style="menu.meta.style"></i>&nbsp;
        <span :class="menuTitleDisplay" slot="title">{{
          menu.meta.title
        }}</span>
      </el-menu-item>
    </div>
  </div>
</template>

<script>
export default {
  name: "sidebarItem",
  data() {
    return {
      menuTitleDisplay: {
        menu_title: this.collapse,
      },
    };
  },
  props: {
    menus: {
      type: Array,
      require: true,
    },
  },
};
</script>

<style scoped>
@import "https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css";
i {
  font-size: 30px;
}
/* .profile-details{
  position: fixed;
  bottom: 0;
  width: 260px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #1d1b31;
  padding: 6px 0;
  transition: all 0.5s ease;
}

.profile-details {
  background: none;
}
.profile-details {
  width: 78px;
}
.profile-details .profile-content {
  display: flex;
  align-items: center;
}
.profile-details img {
  height: 52px;
  width: 52px;
  object-fit: cover;
  border-radius: 16px;
  margin: 0 14px 0 12px;
  background: #c7ecee;
  transition: all 0.5s ease;
}
.profile-details img {
  padding: 10px;
}
.profile-details .profile_name,
.profile-details .job {
  color: black;
  font-size: 18px;
  font-weight: 500;
  white-space: nowrap;
}
.profile-details i,
.profile-details .profile_name,
.profile-details .job {
  display: flex;
}
.profile-details .job {
  font-size: 15px;
} */
.el-menu--collapse span {
  display: none;
}
.el-menu--collapse .el-submenu__icon-arrow {
  display: none;
}
</style>