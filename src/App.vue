<template>
  <div id="vue-app">
    <div id="vue-component" class="container">
      <div class="main">
        <img style="margin: auto" src="https://vuejs.org/images/logo.png" />
        <p class="primary">Welcome to the home section</p>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from './utils/firebase';

export default {
  name: 'app',
  components: {},
  mounted: () => {
    console.log('mounted');
    firebase.auth().onAuthStateChanged(
      (user) => {},
      (error) => {
        console.log('ERROR onAuthStateChanged', error);
      },
    );
  },
  methods: {
    logout: () => {
      console.log('LOGOUT');
    },
  },
};
</script>

<style lang="scss" scoped>
#vue-component {
  display: block;
  .main {
    text-align: center;
    padding-top: 20px;
    img {
      margin: auto;
      width: 100px;
    }
    p.primary {
      font-size: 20px;
    }
  }
}
</style>
