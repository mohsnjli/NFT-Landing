<template>
  <div>
    <Header class="sticky top-0 z-50 bg-black/10 backdrop-blur-md" />
    <landing />
    <Gototop />
    <Main />
    <Footer />
  </div>
</template>
<script>
import Header from './components/Header/HeaderLinks.vue'
import Footer from './components/Footer.vue'
import Gototop from './components/Buttons/GoToTop.vue'
import Landing from './Pages/Landing.vue'
import Main from './Pages/Main.vue'
export default {
  components: {
    Header,
    Landing,
    Main,
    Gototop,
    Footer,
  },
}
</script>

<style scoped></style>
