<script lang="ts" setup>
useHead({
  title: "Lucia & Francesco",
  htmlAttrs: {
    lang: "it-IT",
  },
  meta: [
    {
      name: 'description',
      content: "Matrimobio Lucia & Francesco"
    },
    {
      name: 'author',
      content: "Salvatore Laisa"
    }
  ],
  link: [
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css?family=Work+Sans:400,300,600,400italic,700'
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css?family=Sacramento'
    },
    {
      rel: 'stylesheet',
      href: 'css/animate.css',
    },
    {
      rel: 'stylesheet',
      href: 'css/icomoon.css',
    },
    {
      rel: 'stylesheet',
      href: 'css/magnific-popup.css',
    },
    {
      rel: 'stylesheet',
      href: 'css/owl.carousel.min.css',
    },
    {
      rel: 'stylesheet',
      href: 'css/owl.theme.default.min.css',
    },
  ]
})
</script>

<style lang="scss">
@import "./assets/sass/overrides.scss";
@import "./assets/sass/bootstrap.scss";
@import "./assets/sass/style.scss";
</style>

<template>
  <div id="page">
    <Nav />
    <Header />
    <Couple />
    <Event />
    <Story />
    <!-- <Gallery /> -->
    <Counter />
    <Testimonial />
    <Services />
    <Form />
    <Footer />
  </div>
</template>
