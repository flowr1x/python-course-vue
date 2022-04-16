<template>
  <input type="text" class="form__input" :value="modelValue" @input="updateInput">
</template>

<script>
export default {
  name: "my-input-form",  
  props: {
    modelValue: [String, Number],
  },
  methods: {
    updateInput(event) {
      this.$emit("update:modelValue", event.target.value);
    }
  }
}
</script>
