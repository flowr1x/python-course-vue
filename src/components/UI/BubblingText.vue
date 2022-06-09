<template>
  <div ref="bubbles" class="bubbles">
    <slot></slot>
    <div v-for="bubble in bubbleData" :key="bubble.id">
      <div class="individual-bubble" :style="{left: bubble.left, width: bubble.width, height: bubble.height}"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "bubbling-text",
  data() {
    return {
      widthTextArray: [],
      sizeBubbleArray: [4,6,8,10],
      bubbleData: []
    }
  },
  mounted() {
    const bubblesText = this.$refs.bubbles;
    for (let i = 0; i < bubblesText.clientWidth; i++) {
      this.widthTextArray.push(i);
    }
    this.createBubbles();
  },
  methods: {
    randomValue(arr) {
      return arr[Math.floor(Math.random() * arr.length)];
    },
    createBubbles() {
      setInterval(() => {
        const sizeBubble = this.randomValue(this.sizeBubbleArray);
        const styleBubble = {
          id: Date.now(),
          left: this.randomValue(this.widthTextArray) + "px",
          width: sizeBubble + "px",
          height: sizeBubble + "px"
        };
        this.bubbleData.push(styleBubble);
        setTimeout(() => {
          this.bubbleData.shift();
        }, 1500) 
      }, 350)
    }
  }
}
</script>
<style>
.bubbles {
  display: inline-block;
  font-family: arial;
  position: relative;
}
.individual-bubble {
  position: absolute;
  border-radius: 50%;
  bottom: 20px;
  background-color: var(--text-color);
  z-index: 1;
  -webkit-animation: bubbleUp 2s 1 ease;
  animation: bubbleUp 2s 1 ease;
}
@-webkit-keyframes bubbleUp {
  100% {
    bottom: 100%;
    opacity: 0;
  }
}
@keyframes bubbleUp {
  0% {
    opacity: 1;
  }
  100% {
    bottom: 100%;
    opacity: 0;
  }
}
</style>
