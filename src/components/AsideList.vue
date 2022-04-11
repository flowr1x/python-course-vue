<template>
    <ul class="nav-aside__list">
        <router-link
            tag="li"
            active-class="nav-aside__active"
            :to="path"
            class="nav-aside__item" 
            >
            <a href="#">
                <h4 class="nav-aside__chapter">{{ title }}</h4>
                <div class="nav-aside__title">{{ subtitle }}</div>
            </a>
        </router-link>
    </ul>                                    
</template>
<script>
export default {
    name: "aside-list",
    props: ["title", "subtitle", "path"],
    data() {
       
    }
}
</script>