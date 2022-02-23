<template>
  <main>
    <NavbarMenu />

    <router-view />
    <Footer />
  </main>
</template>

<script>
import NavbarMenu from "@/components/NavbarMenu";
import Footer from "@/components/Footer";

export default {
  name: "App",
  components: {
    NavbarMenu,
    Footer,
  },
};
</script>


<style>
@import "/assets/css/styles.css";
@import "/assets/css/fonts.css";
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
