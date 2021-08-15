<template>
  <div>
    <h2>
      rugu
      {{ name }}
    </h2>
  </div>
</template>
<script>
export default {
  props: {
    name: {
      type: String,
      default: "zhang",
    },
  },
  beforeRouteUpdate(to, from, next) {
    console.log(to, from, next);
  },
};
</script>