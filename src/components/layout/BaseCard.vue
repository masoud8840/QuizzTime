<template>
  <section class="container">
    <slot></slot>
  </section>
</template>

<style lang="scss" scoped>
.container {
  width: 97%;
  max-width: 1339px;
  margin: 35px auto;
  background-color: #efefef;
  padding: 30px 20px;
  border-radius: 0.3rem;
  box-shadow: 0 0 7px #ccc;
}
</style>