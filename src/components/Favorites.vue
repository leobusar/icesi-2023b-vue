<template>
    <div>
        <v-list>
            <v-list-subheader> My Favorites </v-list-subheader>
            <v-list-item v-for="(dog, index) in favorites"  :prepend-avatar="dog.img" :title="dog.breed" :subtitle="dog.name" :key="index">
            <template v-slot:append>
                <v-btn icon>
                    <v-icon @click="store.removeFromFavorites(dog)">mdi-delete</v-icon>
                </v-btn>
            </template>
            </v-list-item>
        </v-list>
    </div>
</template>

<script setup>
import { useFavoriteStore } from '../stores/favorites';
import {ref} from 'vue'

const  store = useFavoriteStore()

const  favorites = ref(store.favorites)

</script>