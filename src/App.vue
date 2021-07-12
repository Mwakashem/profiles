<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
  </div>
  <router-view/>
</template>

<style>
#app {
  
  color: #2c3e50;
}

#nav {
  padding: 30px;
  text-align: center;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #1f6eef;
}
</style>
