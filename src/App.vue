<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
   <!-- <article v-for="(location, idx) in locations" :key="idx">
 <div>Mrma</div>
    <h1>{{ location.name }}</h1>
  </article> -->
    <router-view/>
    <!--   <p v-for="doc of documents">
    {{doc.name}}
  </p> -->
    <Register/>
  </div>
</template>

<script>
import {db} from './firebase';
import Register from "@/components/Register.vue";

export default {
  components: {
    Register
  },
  data() {
    return {
       locations: []
    }
  },
  created(){
  console.log(db)

    db.collection('locations').get().then((podaci) =>{
  podaci.docs.forEach(doc =>{
    console.log(doc.data())
  })
   console.log(locations)
})
   },
  firestore () {
    return {
      locations: db.collection('locations')
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
