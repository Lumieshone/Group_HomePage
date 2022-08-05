<template>
  <div class="editmail container">
    <form class="form" @submit="editMail">
      <div class="form-group">
        <label>密码</label>
        <input type="text" required placeholder="请输入您的密码" autocomplete="off" class="form-name" v-model="form.name" >
        <label>新邮箱</label>
        <input type="date" min="1979-12-31" max="2021-12-31" required placeholder="请填写您的生日" autocomplete="off" class="form-birthday" v-model="form.birthday">
      </div>
      <button type="submit" class="btn btn-info">立即提交</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "EditMail"
}
</script>

<style scoped>

</style>