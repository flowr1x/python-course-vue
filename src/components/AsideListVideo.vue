<template>
    <ul class="nav-aside__list">
        <li
            tag="li"
            
            class="nav-aside__item" 
            @click="onClickBtnInWave"
          
            >
            <a href="#">
                <h4 class="nav-aside__chapter">{{ title }}</h4>
                <div class="nav-aside__title">{{ subtitle }}</div>
            </a>
        </li>
    </ul>                                    
</template>
<script>
export default {
    name: "aside-list-video",
    props: ["title", "subtitle", "link"],
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

        this.$emit("getReferense", this.link);
      }
    }
}
</script>
