<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section>
      <div class="container">
        <h2 class="title-404">404</h2>
        <h1 class="title"> PAGE NOT FOUND!</h1>
        <p>Go to <router-link class="link" to="/">main page?</router-link></p>
        
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'notFound',
}
</script>

<style lang="scss">
.wrapper-content {
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
