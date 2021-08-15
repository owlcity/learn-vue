<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />

    <button @click="handleClick('back')">返回上一页</button>
    <button @click="handleClick('push')">跳转到parent</button>
    <button @click="handleClick('replace')">替换到parent</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  beforeRouteEnter(to, from, next) {
    console.log(to);
    console.log(from);
    console.log(next);
    next((vm) => {
      console.log(vm);
    });
  },
  beforeRouteLeave(to, from, next) {
    const leave = confirm("您确定要离开吗?");
    if (leave) next();
    else next(false);
  },
  methods: {
    handleClick(type) {
      if (type === "back") this.$router.back();
      else if (type === "push") {
        this.$router.push({
          name: `argu`,
          params: {
            name: "lison",
          },
        });
      } else if (type === "replace") {
        this.$router.replace({
          name: "parent",
        });
      }
    },
  },
};
</script>
