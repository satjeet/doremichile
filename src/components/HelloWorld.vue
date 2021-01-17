<template>
  <Game />
</template>

<script>
import Game from "./Game";
export default {
  name: "App",
  components: { Game },
};
</script>

<style>
body {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
}
</style>
