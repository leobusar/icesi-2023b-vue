import { defineStore } from 'pinia'
import {ref} from 'vue'


export const useFavoriteStore = defineStore('favorites', ()=>{
  const  favorites =  ref([])

    const addToFavorites = (dog) =>  {
      if(!favorites.value.includes(dog))
        favorites.value.push(dog)
    }

    const removeFromFavorites =  (dog) => {
      const index = favorites.value.indexOf(dog)
      if(index > -1)
        favorites.value.splice(index, 1)
    }

    return {favorites, addToFavorites, removeFromFavorites}
}, {persist: true})