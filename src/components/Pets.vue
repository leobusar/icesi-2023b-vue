<template>
<v-container fluid>
    <v-row>
        <v-col xs="12" sm="4" md="3" v-for="pet in dogs">
            <Dog :dog="pet" @setimg="setImg"/>
        </v-col>
    </v-row>
</v-container>
</template>
<script setup>
import  { Dogs } from  "../data/dogs.js"
import { ref } from  'vue'
import Dog from "./Dog.vue";

const dogs = ref (Dogs) 

const setImg =  (e) => {
    let index =  dogs.value.findIndex((pet)=>pet.breed==e.breed)
    dogs.value[index] =  e
}

</script>