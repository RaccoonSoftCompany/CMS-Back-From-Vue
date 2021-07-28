<template>
  <div>
    <el-card shadow="hover" class="mgb20" style="height: 400px">
      <div class="user-info">
        <span>个人资料：</span>
        <p></p>
        <hr />
        <!-- <div class="user-info-cont"> -->
        <!-- <div class="user-info-name">{{ showUsername }}</div> -->
        <!-- <div>{{ role }}</div> -->
        <!-- </div> -->
      </div>
      <p></p>
      <div class="user-info-list">用户名：{{ showUsername }}</div>
      <p></p>
      <div class="user-info-list">
        邮箱：
        <p></p>
      </div>
    </el-card>
  </div>
</template>

<script>
import Cookies from "js-cookie";
export default {
  computed: {
    showUsername() {
      return Cookies.get("username");
    },
  },
};
</script>
<style scoped>
span {
  font-size: 30px;
}
</style>