<script>
import { store } from "../store"


export default {
    data() {
        return {
            store,
        }
    }


}
</script>

<template>
    <nav>
        <div class="first_nav">
            <ul>
                <li v-for="contactsNav in store.dynamicFirstNav" :key="contactsNav">
                    {{ contactsNav }}
                </li>
            </ul>

            <ul>
                <li>icona</li>
                <li>icona</li>
                <li>icona</li>
                <li>icona</li>
            </ul>
        </div>


        <div class="second_nav">
            <img class="logo_uni" src="../assets/images/university_logo.png" alt="">
            <ul>
                <li v-for="linkNav in store.dynamicNavFoot" :key="linkNav">
                    {{ linkNav }}
                </li>
            </ul>
        </div>
    </nav>
</template>

<style lang="scss" scoped>
@import "../assets/styles/variables";
@import "../assets/styles/_partials/reset";

nav {

    .first_nav,
    .second_nav {
        display: flex;
        justify-content: space-around;
        align-items: center;

        .logo_uni {
            padding: 1rem;
        }
    }

    .first_nav {
        background-color: $orange;
        height: 4rem;
        display: flex;
        align-items: center;
        color: white;
    }

    ul {
        display: flex;
        list-style: none;
        gap: 2rem;
        font-weight: 600;

    }
}
</style>
