<template>
  <div class="form__box_input">
    <input :type="type" 
      class="form__input" 
      :value="modelValue" 
      @input="updateInput" 
      ref="input"
      :class="{'form__input_password': type === 'password'}"
      :disabled="isDisabled">
    <label class="form__label" :class="{'form__label_active': modelValue}">{{ placeholder }}</label>
    <div @click="showPassword"
      class="toggle-show"
      v-if="type == 'password'"
      >
      <svg class="svg-icon toggle-show__icon" viewBox="0 0 20 20">
          <path d="M10,
          6.978c-1.666,0-3.022,1.356-3.022,
          3.022S8.334,13.022,10,13.022s3.022-1.356,3.022-3.022S11.666,
          6.978,10,6.978M10,12.267c-1.25,0-2.267-1.017-2.267-2.267c0-1.25,
          1.016-2.267,2.267-2.267c1.251,0,2.267,1.016,2.267,2.267C12.267,
          11.25,11.251,12.267,10,12.267 M18.391,9.733l-1.624-1.639C14.966,
          6.279,12.563,5.278,10,5.278S5.034,6.279,3.234,8.094L1.609,
          9.733c-0.146,0.147-0.146,0.386,0,0.533l1.625,1.639c1.8,
          1.815,4.203,2.816,6.766,2.816s4.966-1.001,
          6.767-2.816l1.624-1.639C18.536,10.119,18.536,9.881,18.391,
          9.733 M16.229,11.373c-1.656,1.672-3.868,2.594-6.229,
          2.594s-4.573-0.922-6.23-2.594L2.41,10l1.36-1.374C5.427,
          6.955,7.639,6.033,10,6.033s4.573,0.922,6.229,2.593L17.59,10L16.229,11.373z">
        </path>
      </svg>
    </div>
    <div @click="copyText"
      class="toggle-show"
      v-if="isCopy"
      >
      <svg class="svg-icon toggle-show__icon" viewBox="0 0 20 20">
					<path d="M17.391,2.406H7.266c-0.232,0-0.422,0.19-0.422,0.422v3.797H3.047c-0.232,0-0.422,0.19-0.422,0.422v10.125c0,0.232,0.19,0.422,0.422,0.422h10.125c0.231,0,0.422-0.189,0.422-0.422v-3.797h3.797c0.232,0,0.422-0.19,0.422-0.422V2.828C17.812,2.596,17.623,2.406,17.391,2.406 M12.749,16.75h-9.28V7.469h3.375v5.484c0,0.231,0.19,0.422,0.422,0.422h5.483V16.75zM16.969,12.531H7.688V3.25h9.281V12.531z"></path>
			</svg>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "my-input-form",  
  props: {
    modelValue: [String, Number],
    placeholder: [String],
    type: {
      type: String,
      default: "text",
    },
    isDisabled: {
      type: Boolean,
      required: false,
      default: false,
    },
    isCopy: {
      type: Boolean,
      required: false,
      default: false,
    }
  },
  methods: {
    updateInput(event) {
      this.$emit("update:modelValue", event.target.value);
    },
    showPassword() {
      const password = this.$refs.input;
      if (password.getAttribute("type") == "password") {
        password.setAttribute("type", "text");
      } else {
        password.setAttribute("type", "password");
      }     
    },
    copyText() {
       navigator.clipboard.writeText(this.$refs.input.value)
        .then(() => {})
        .catch(err => console.log(err));
        window.open(this.$refs.input.value)
    }
  }
}
</script>
