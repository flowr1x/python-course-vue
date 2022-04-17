<template>
    <ul class="nav-aside__list">
        <router-link
            tag="li"
            :to="path"
            active-class="nav-aside__item_active"
            class="nav-aside__item" 
            @click="onClickBtnInWave"
            exact
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
    methods: {
      onClickBtnInWave(event) {
        const size = Math.max(event.currentTarget.offsetWidth, event.currentTarget.offsetHeight);
        const x = event.offsetX - size / 2;
        const y = event.offsetY - size / 2;
        const wave = document.createElement("span");

        wave.className = "wave";
        wave.style.cssText = `width: ${size}px;height:${size}px;top:${y}px;left:${x}px`;
        event.currentTarget.append(wave);
        setTimeout(() => wave.remove(), 500);
      }
    }
}
</script>
