<template>
  <div class="w-full bg-black text-white text-center p-3">
    {{ msg }}
  </div>
</template>

<script>
export default {
  name: "TopBar",
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
};
</script>

<style></style>
