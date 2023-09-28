import Home from "../components/Home.vue";
import Pets from "../components/Pets.vue";
import Favorites from "../components/Favorites.vue";

const routes =  [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/pets",
        name: "Pets",
        component: Pets
    },
    {
        path: "/favorites",
        name: "Favorites",
        component: Favorites
    }
]

export default routes
