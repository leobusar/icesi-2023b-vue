<script setup>
import { ref, computed } from 'vue'
import { useFavoriteStore } from './stores/favorites';

const store = useFavoriteStore()

const themeSwitched = ref(false)
let favoritesBool = computed(()=>store.favorites.length > 0)
</script>

<template>
  <v-app>
    <main :class="{'orange-green': themeSwitched}">
      <div class="app-container">
        <header class="app-header dark-brown">
          <h1>My Pet Store</h1>
          <v-toolbar  color="grey-lighten-4">
            <v-toolbar-items>
              <v-btn to="/">Home</v-btn>
              <v-btn to="/pets">Pets</v-btn>
            </v-toolbar-items>
            <v-spacer></v-spacer>
            <router-link to="/favorites" class="pe-3">
                <v-badge overlap color="primary" v-model="favoritesBool">
                  <template v-slot:badge>
                    <span>{{ store.favorites.length }}</span>
                  </template>
                </v-badge>
                <v-icon large color="grey">mdi-tag-heart</v-icon>
            </router-link>
          </v-toolbar>
          <v-btn @click="themeSwitched=!themeSwitched">Switch theme</v-btn>
        </header>
        <router-view></router-view>
        <footer class="app-footer dark-brown">
          <p>123 Main Street | Smithfield, RI 90987 | 345-456-5678</p>
        </footer>
      </div>
    </main>
  </v-app>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Roboto");
/*brown and mint*/
/*dark brown 32292F
    light mint 99E1D9
    bisque F0F7F4
    dark mint 70ABAF
    light brown 705D56*/
*,
*:before,
*:after {
  box-sizing: border-box;
}
body {
  margin: 0;
  padding: 0;
}
.v-application a {
  text-decoration: none;
}
main {
  padding: 40px;
  font-family: "Roboto", "sans-serif";
  background: #fff top center repeat;
  color: #444;
  background-image: url("https://raw.githubusercontent.com/FrontEndFoxes/projects/main/petshop/images/bg.jpg");
}
h1,
p {
  margin: 0 0 1em 0;
}
img {
  max-width: 100%;
  display: block;
  margin: 0 auto;
}
.app-container {
  max-width: 940px;
  margin: 0 auto;
  background-color: #fff;
}
.app-container > * {
  border-radius: 5px;
  font-size: 150%;
  margin-bottom: 10px;
}
.wrapper {
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-auto-rows: minmax(150px, auto);
}
.wrapper > * {
  padding: 15px;
  border-radius: 5px;
}
.light-mint {
  background-color: #99e1d9;
}
.dark-mint {
  background-color: #70abaf;
}
.light-brown {
  background-color: #705d56;
  color: #f0f7f4;
}
.dark-brown {
  background-color: #32292f;
  color: #f0f7f4;
}
.bisque {
  background-color: #f0f7f4;
}
/*orange and green*/
/*
    dark orange 771100
    orange CC6633
    light orange FF9900
    dark green 689980
    light green 86a193
    */
.orange-green {
  background-image: url("https://raw.githubusercontent.com/FrontEndFoxes/projects/main/petshop/images/bg2.jpg");
  .light-mint {
    background-color: #86a193;
  }
  .dark-mint {
    background-color: #689980;
  }
  .light-brown {
    background-color: #cc6633;
  }
  .dark-brown {
    background-color: #771100;
  }
  .bisque {
    background-color: #ff9900;
  }
}
.panel {
  /* needed for the flex layout*/
  margin-left: 5px;
  margin-right: 5px;
  flex: 1 1 200px;
}
.tall-panel {
  grid-row-end: span 2;
}
.app-header,
.app-footer {
  flex: 0 1 100%;
  padding: 15px;
  text-align: center;
}
/* We need to set the margin used on flex items to 0 as we have gaps in grid.  */
@supports (display: grid) {
  .wrapper > * {
    margin: 0;
  }
}
</style>
