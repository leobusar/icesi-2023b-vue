<template>
    <v-card color="grey lighten-2">
        <v-card-title>
            <h3>{{ dog.name }}</h3>
            <p>{{ dog.breed }}</p>
        </v-card-title>
        <v-img cover :src="img" height="200px" />
        <v-card-actions>
          <v-btn @click="addFavorites">Add to favorites</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import axios from '../config/axios.js'
import { useFavoriteStore } from '../stores/favorites';

const store  = useFavoriteStore()

const props = defineProps({
  dog: {
    type: Object,
    required: true,
  }
})

const addFavorites = () => {
  store.addToFavorites(props.dog)
}

const img  = ref("")
const emit = defineEmits(['setimg'])

const getImg = () => {
    axios.get("breed/"+props.dog.breed+"/images/random")
         .then(res => {
            img.value = res.data.message
            emit("setimg", {  ...props.dog, img: res.data.message})
         })
}

onMounted(getImg)
</script>