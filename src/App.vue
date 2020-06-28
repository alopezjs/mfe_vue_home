<template>
  <div id="vue-app">
    <div id="vue-component" class="container">
      <div class="main">
        <h1>
          <img src="https://vuejs.org/images/logo.png" width="50" height="50" />
          Vue App
        </h1>

        <router-view></router-view>
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
      (user) => {
        if (user) {
          console.log('USER', user);
        } else {
          console.log('Not logged');
        }
      },
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
    #links {
      margin: 30px 0 30px;
      a {
        padding: 10px;
        display: inline-block;
        width: 75px;
        text-align: center;
        &.router-link-exact-active {
          background-color: #007bff;
          color: #fff;
          border-radius: 4px;
        }
      }
    }
  }
}
</style>
