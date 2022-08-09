<template>
  <div  v-if="show" class="loading-content">
    <div class="loading-animate"></div>
  </div>
</template>

<script>
export default {
  name: "loading",
  props:{
    show:Boolean,
  },
  data() {
    return {
    }
  }
}
</script>

<style scoped>
.loading-content {
  width:100%;
  height:100%;
  min-width: 2rem;
  position: fixed;
  left: 309px;
  top: 70px;
  z-index: 300;
  text-align: center;
  color: #fff;
  background: #fff;
  border-radius: 0.08rem;
  overflow: hidden;
}
.loading-animate{
  display: inline-block;
  position: relative;
  margin-left: -20%;
  margin-top: 18%;
  width:10%;
  height:30%;
  vertical-align: middle;
  align-content: center;
  background-image: url("loading.gif");
  background-repeat: no-repeat;
  background-size:35%;
  transform-origin: center;
}
</style>